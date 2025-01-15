"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface JobDetailsModalProps {
  title: string;
  department: string;
}

export function JobDetailsModal({ title, department }: JobDetailsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ver Detalhes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{department}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>Descrição da vaga:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Experiência em {department.toLowerCase()} no setor imobiliário
            </li>
            <li>Excelentes habilidades de comunicação e negociação</li>
            <li>Conhecimento do mercado imobiliário local</li>
            <li>Capacidade de trabalhar em equipe e de forma independente</li>
          </ul>
          <p>Benefícios:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Salário competitivo + comissões atrativas</li>
            <li>Plano de saúde e odontológico</li>
            <li>Oportunidades de crescimento na carreira</li>
            <li>Treinamentos e desenvolvimento profissional contínuo</li>
          </ul>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Candidatar-se</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
