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

import AccessForm from "./access-form";
import LocationForm from "./location-form";
import CreciForm from "./creci-form";

const TOTAL_STEPS = 3;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",

    address: "",
    city: "",
    country: "",

    provider: "",
    creci: "",
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Formulário de Múltiplas Etapas</CardTitle>
        <CardDescription>
          Etapa {step} de {TOTAL_STEPS}
        </CardDescription>
        <Progress value={progress} className="w-full mt-2" />
      </CardHeader>
      <CardContent>
        {step === 1 ? (
          <AccessForm
            formData={{
              ...formData,
              password: formData.password,
              confirm: formData.confirm,
            }}
            updateFormData={updateFormData}
          />
        ) : step === 2 ? (
          <LocationForm
            formData={{
              ...formData,
              address: formData.address,
              city: formData.city,
              country: formData.country,
            }}
            updateFormData={updateFormData}
          />
        ) : (
          <CreciForm
            formData={{
              ...formData,
              provider: formData.provider as
                | "corretor"
                | "Proprietario"
                | "Usuario",
              creci: formData.creci,
            }}
            updateFormData={updateFormData}
          />
        )}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button onClick={prevStep} variant="outline">
              Voltar
            </Button>
          )}
          {step < TOTAL_STEPS ? (
            <Button onClick={nextStep}>Próximo</Button>
          ) : (
            <Button onClick={() => console.log(formData)}>Enviar</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
