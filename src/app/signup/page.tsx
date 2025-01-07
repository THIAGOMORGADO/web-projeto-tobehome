"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { TextInput as InputComponent } from "../_components/Input";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#030142]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Criar Conta</CardTitle>
          <CardDescription>
            Preencha os campos abaixo para se cadastrar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <InputComponent
                label="Nome"
                placeholder="Nome"
                type="name"
                id="name"
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
