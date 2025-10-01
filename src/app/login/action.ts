// src/app/login/action.ts

"use server";

import { createClient } from "../../../utils/supabase/server";

export interface loginUserType {
  email: string;
  password: string;
}

export async function loginUser(user: loginUserType) {
  const email = user.email;
  const password = user.password;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return { success: false, message: error.message };
  }
  return {
    success: true,
    message: "Login successful!",
  };
}
