/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // Indica que este arquivo será renderizado no lado do cliente (Client Side Rendering - CSR)

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Importa componentes de UI personalizados

import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../types/UserType";
import MultiStepForm from "@/components/_components/MultiForm";
import Image from "next/image";

import Logo from "@/app/assets/logo.jpg";

export default function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<User> = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center h-screen px-3">
      <MultiStepForm />
    </div>
  );
}
