"use server";

import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // TODO: Implement your authentication logic here
  console.log("Sign in attempt:", { email, password });

  // For now, we'll just redirect to a success page
  redirect("/dashboard");
}

export async function signUp(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  // TODO: Implement your account creation logic here
  console.log("Sign up attempt:", { name, email, password });

  // For now, we'll just redirect to a success page
  redirect("/dashboard");
}
