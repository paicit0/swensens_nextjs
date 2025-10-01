// src/app/register/action.ts

"use server";

import { createClient } from "../../../utils/supabase/server";

export interface registerUserType {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
  gender: string;
}

export async function registerUser(user: registerUserType) {
  const email = user.email;
  const password = user.password;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        firstName: "a",
        lastName: "b",
        phone: "0",
        birthDate: "10/11/2000",
        gender: "male",
      },
    },
  });

  if (error) {
    return { success: false, message: error.message };
  }
  return {
    success: true,
    message: "Registration successful! Check your email.",
  };
}
