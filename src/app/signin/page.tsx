/* eslint-disable react/no-unescaped-entities */
import { SignInForm } from "./sign-in-form";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
          Login
        </h1>
        <SignInForm />
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-purple-700 hover:text-purple-600"
          >
            Create a new account
          </Link>
        </p>
      </div>
    </div>
  );
}
