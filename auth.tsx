import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { unstable_noStore as noStore } from 'next/cache';

import { z } from 'zod';
import type { User } from './lib/definitions';
import { verifyPassword } from "./lib/auth";
import { getUser } from "./lib/users";


async function fetchUser(userid: string) {
  //noStore();
  try {
    const user = await getUser(userid)
    return user;
  } catch (error) {
    throw error;
  }
}
// Type 'User' is not assignable to type 'AdapterUser & User'.
// Type 'User' is missing the following properties from type 'AdapterUser': id, email, emailVerified
interface AdapterUser {
  id: string;
  email: string;
  emailVerified: Date | null;
}

interface UserToken {
  //user: {
  id: string,
  userid: string,
  password: string,

  //}
}
// Extend User to include AdapterUser properties
interface ExtendedUser extends UserToken, AdapterUser { }
interface Token {
  sub: string,
  user: {
    id: string,
    userid: string,
    password: string
  },
  iat: number,
  exp: number,
  jti: string
}
interface Session {

  user: {
    id: string,
    userid: number,
    password: string
  },
  expires: string
}
//const regex = new RegExp("^(\\+98|0)?9\\d{9}$");

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async session({ session, token }) {
      console.log('sessionid', session);
      console.log('token', token);
      session.user = token.user as ExtendedUser
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  providers: [
    Credentials({
      credentials: {
        userid: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);

        const parsedCredentials = z
          .object({ userid: z.string().regex(/^(\\+98|0)?9\d{9}$/), password: z.string().min(5) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { userid, password } = parsedCredentials.data;
          console.log("auth-userid", userid);
          console.log("auth-pass", password);
          const user = await fetchUser(userid);
          console.log("auth-user", user);
          if (!user) return null;

          const passwordMatch = await verifyPassword(password, (user as User).password);
          console.log("passwordMatch", passwordMatch);
          console.log("user-in-auth", user);
          if (passwordMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
