"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import LocationForm from "./location-form";
import CreciForm from "./creci-form";
import AccessForm from "./access-form";
// import { axios } from "@/app/services/api";

const TOTAL_STEPS = 3;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    neighborhood: "",
    state: "",
    zipCode: "",
    uf: "",
    confirmPassword: "",
    rg: "",
    cpf: "",
    birthDate: "",
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  // const submitForm = async () => {
  //   try {
  //     await axios.get("/");
  //     alert("Banco de dados contatado com sucesso!");
  //   } catch (error) {
  //     console.error("Erro ao contatar o banco de dados:", error);
  //     alert("Erro ao contatar o banco de dados. Tente novamente mais tarde.");
  //   }
  // };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const progress = (step / TOTAL_STEPS) * 100;

  function handleNewAccounts(formData: string) {
    console.log(formData);
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Preencha os campos para cadastra-se</CardTitle>
        <CardDescription>
          Etapa {step} de {TOTAL_STEPS}
        </CardDescription>
        <Progress value={progress} className="w-full mt-2 bg-purple-500" />
      </CardHeader>
      <CardContent>
        {step === 1 ? (
          <AccessForm
            formData={{
              ...formData,
              password: formData.password,
              confirmPassword: formData.confirmPassword,
            }}
            updateFormData={updateFormData}
          />
        ) : step === 2 ? (
          <LocationForm
            formData={{
              ...formData,
              address: formData.address,
              state: formData.state,
              city: formData.city,
              uf: formData.uf,
            }}
            updateFormData={updateFormData}
          />
        ) : (
          <CreciForm
            formData={{
              ...formData,

              rg: formData.rg,

              cpf: formData.cpf,
              birthDate: formData.birthDate,
            }}
            updateFormData={updateFormData}
          />
        )}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button
              onClick={prevStep}
              variant="default"
              className="bg-purple-700 hover:bg-purple-800 text-[#FE8302]"
            >
              Voltar
            </Button>
          )}
          {step < TOTAL_STEPS ? (
            <Button
              onClick={nextStep}
              className="bg-purple-700 hover:bg-purple-800 text-[#FE8302]"
            >
              Próximo
            </Button>
          ) : (
            <Button
              onClick={() => handleNewAccounts(JSON.stringify(formData))}
              className="bg-purple-700 hover:bg-purple-800 text-[#FE8302]"
            >
              Enviar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
