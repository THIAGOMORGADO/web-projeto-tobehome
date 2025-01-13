/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { signIn } from "@/app/auth/auth";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/custom-input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { useRouter } from "next/navigation";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full bg-purple-700 hover:bg-purple-800 text-[#FE8302]"
      disabled={pending}
    >
      {pending ? "Signing in..." : "Sign In"}
    </Button>
  );
}

export function SignInForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  async function handleSubmit(formData: FormData) {
    router.push("/dashboard");
    setError(null);
    try {
      // await signIn(formData);
    } catch (err) {
      setError(
        "Failed to sign in. Please check your credentials and try again."
      );
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email"
          className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302]  px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="Senha"
          className="h-8 bg-[#7e22ce] placeholder:text-[#FE8302] text-[#FE8302]  px-2 font-medium mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-[#FE8302] focus:border-[#FE8302] sm:text-sm"
        />
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <SubmitButton />
    </form>
  );
}
