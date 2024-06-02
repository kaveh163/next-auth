import type { NextAuthConfig } from 'next-auth';
export const authConfig = {
  pages: {
    signIn: "/signup", 
  },
  // callbacks: {
  //   authorized({ auth, request: { nextUrl } }) {
  //     const isLoggedIn = !!auth?.user;
  //     console.log("isLoggedin", isLoggedIn);
  //     console.log("user-auth",auth?.user);
  //     const isOnLogin = nextUrl.pathname.startsWith("/Login");
  //     const isOnWelcome = nextUrl.pathname.startsWith("/member/welcome");
  //     if (isOnLogin && isLoggedIn) {
  //       return Response.redirect(new URL("/member/welcome", nextUrl));
  //     }
  //     if (isOnWelcome) {
  //       if(isLoggedIn) return true;
  //       return false; // redirect to the Login page
  //     }
      
  //     return true;
  //   },
  // },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
