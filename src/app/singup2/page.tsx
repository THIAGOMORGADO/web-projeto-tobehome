"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { TextInput } from "../_components/Input";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp2() {
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const routes = useRouter();

  function handleNextSteps() {
    if (!street || !number || !neighborhood || !city || !state || !zipCode) {
      alert("Todos os campos de endereço são obrigatórios.");
      return;
    }

    routes.push("/signin");
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#030142]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Cadastro de Cliente
            </CardTitle>
            <CardDescription>
              Preencha os campos abaixo para cadastrar um novo cliente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <TextInput
                  label="Rua"
                  placeholder="Rua"
                  type="text"
                  id="street"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStreet(e.target.value)
                  }
                  value={street}
                />
              </div>

              <div className="space-y-2">
                <TextInput
                  label="Número"
                  placeholder="Número"
                  type="text"
                  id="number"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNumber(e.target.value)
                  }
                  value={number}
                />
              </div>

              <div className="space-y-2">
                <TextInput
                  label="Bairro"
                  placeholder="Bairro"
                  type="text"
                  id="neighborhood"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNeighborhood(e.target.value)
                  }
                  value={neighborhood}
                />
              </div>

              <div className="space-y-2">
                <TextInput
                  label="Cidade"
                  placeholder="Cidade"
                  type="text"
                  id="city"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCity(e.target.value)
                  }
                  value={city}
                />
              </div>

              <div className="space-y-2">
                <TextInput
                  label="Estado"
                  placeholder="Estado"
                  type="text"
                  id="state"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value)
                  }
                  value={state}
                />
              </div>

              <div className="space-y-2">
                <TextInput
                  label="CEP"
                  placeholder="CEP"
                  type="text"
                  id="zipCode"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setZipCode(e.target.value)
                  }
                  value={zipCode}
                />
              </div>
            </form>
          </CardContent>

          <CardFooter>
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleNextSteps}
            >
              Próximo
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
