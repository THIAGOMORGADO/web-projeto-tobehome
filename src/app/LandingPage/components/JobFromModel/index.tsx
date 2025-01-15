"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface JobDetailsModalProps {
  title: string;
  department: string;
}

export function JobDetailsModal({ title, department }: JobDetailsModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    creci: "",
    rg: "",
    cpf: "",
    fullName: "",
    address: "",
    email: "",
    phone: "",
    socialMedia: "",
    birthDate: "",
    motherName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your server
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ver Detalhes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{department}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Detalhes da Vaga</h3>
              <div className="space-y-2">
                <h4 className="font-medium">Descrição da vaga:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    Experiência em {department.toLowerCase()} no setor
                    imobiliário
                  </li>
                  <li>Excelentes habilidades de comunicação e negociação</li>
                  <li>Conhecimento do mercado imobiliário local</li>
                  <li>
                    Capacidade de trabalhar em equipe e de forma independente
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Benefícios:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Salário competitivo + comissões atrativas</li>
                  <li>Plano de saúde e odontológico</li>
                  <li>Oportunidades de crescimento na carreira</li>
                  <li>Treinamentos e desenvolvimento profissional contínuo</li>
                </ul>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Informações Pessoais</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="birthDate">Data de Nascimento</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="motherName">Nome da Mãe</Label>
                <Input
                  id="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="rg">RG</Label>
                  <Input
                    id="rg"
                    value={formData.rg}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Informações de Contato</h3>
              <div>
                <Label htmlFor="address">Endereço Completo</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="socialMedia">Redes Sociais</Label>
                <Input
                  id="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Informações Profissionais
              </h3>
              <div>
                <Label htmlFor="creci">CRECI</Label>
                <Input
                  id="creci"
                  value={formData.creci}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Resumo da Candidatura:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Nome:</strong> {formData.fullName}
                  </li>
                  <li>
                    <strong>Email:</strong> {formData.email}
                  </li>
                  <li>
                    <strong>Telefone:</strong> {formData.phone}
                  </li>
                  <li>
                    <strong>CRECI:</strong> {formData.creci}
                  </li>
                </ul>
              </div>
            </div>
          )}
          <Separator />
          <div className="flex justify-between">
            {step > 1 && (
              <Button type="button" onClick={prevStep} variant="outline">
                <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
              </Button>
            )}
            {step < 4 ? (
              <Button type="button" onClick={nextStep} className="ml-auto">
                Próximo <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" className="ml-auto">
                Enviar Candidatura
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
