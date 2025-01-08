"use client";

// SignIn.js
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import Logo from "@/app/assets/logo.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const routes = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#050042]">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 w-[90%] sm:w-[30%] bg-[#050042] rounded-lg shadow-lg max-w-sm md:max-w-lg lg:max-w-4xl xl:max-w-6xl"
      >
        <div className="items-center justify-center flex">
          <Image src={Logo} alt="logo" width={200} height={200} />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-[#bd04bb] font-bold block mb-2"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#4f0053] text-white border border-[#4f0053] focus:outline-none focus:ring-2 focus:ring-[#4f0053] focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-[#bd04bb] font-bold block mb-2"
          >
            Senha:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#4f0053] text-white border border-[#4f0053] focus:outline-none focus:ring-2 focus:ring-[#4f0053] focus:ring-opacity-50"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#500052] text-white rounded p-2"
        >
          Entrar
        </Button>
        <div className="mt-4 text-center">
          <a
            href="/signup"
            className="text-white hover:text-[#c007bc] transition-colors duration-200"
          >
            Cadastre-se
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
