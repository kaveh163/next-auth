"use server"
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from "zod";
import { hashPassword } from "./auth";
import { storeUser } from './users';
import { redirect } from 'next/navigation';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  // string literal
  const regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  const UserSchema = z.object({
    userid: z.string().regex(regex),
    password: z.string().min(5),
    confirmPassword: z.string().min(5)
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });
  const parsedUser = UserSchema.safeParse({ userid: formData.get("userid") as string, password: formData.get("password") as string, confirmPassword: formData.get("confirmPassword") as string });
  if (!parsedUser.success) {
    return "Invalid Input"
  }
  const { userid, password } = parsedUser.data;
  
  async function saveUser() {
    try {
      const hashedPassword = await hashPassword(password);
      await storeUser(userid, hashedPassword);
    } catch (error) {
      throw error;
    }
  }
  await saveUser();

  try {
    console.log("userid",formData.get("userid"));
    console.log("password", formData.get("password"));
    // store the formData in database (create a file /lib/db.tsx for database connection) and a file /lib/auth.js for bcrypt functions
    await signIn('credentials', { userid: formData.get("userid"), password: formData.get("password"), redirect:false });
    redirect(`/member/welcome`); 
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}