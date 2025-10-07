// src/app/login/action.ts

"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";

export interface loginUserType {
  email: string;
  password: string;
}

interface loginUserReturnType {
  success: boolean;
}

export async function loginUser(user: loginUserType): Promise<loginUserReturnType> {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });

  if (error) {
    redirect("/error");
  }

  console.log("login/action: supabase.auth User Email:", data.user.email);

  revalidatePath("/", "layout");

  return { success: true };
}
