// src/app/register/action.ts

"use server";

import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";
import { revalidatePath } from "next/cache";
import { create } from "domain";

export interface registerUserType {
  user_role: string;
  user_email: string;
  user_password: string;
  user_firstName: string;
  user_lastName: string;
  user_phone: string;
  user_birthDate: string;
  user_gender: string;
}

export async function registerUser(user: registerUserType) {
  console.log("register/action data received:", user);
  const email = user.user_email;
  const password = user.user_password;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  const createUser = await supabase
    .from("users")
    .insert({
      user_role: user.user_role,
      user_email: user.user_email,
      user_firstName: user.user_firstName,
      user_lastName: user.user_lastName,
      user_phone: user.user_phone,
      user_birthDate: user.user_birthDate,
      user_gender: user.user_gender,
    });

  if (createUser.error) {
    console.error("Error creating user:", createUser.error);
  }

  console.log("register/action:", data);
  console.log("register/action createUser:", createUser.data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/login", "layout");
  redirect("/login");
}
