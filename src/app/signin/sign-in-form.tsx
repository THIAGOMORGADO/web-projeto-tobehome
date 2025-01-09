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
      className="w-full bg-purple-700 hover:bg-purple-800 text-white"
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
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="Enter your password"
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
