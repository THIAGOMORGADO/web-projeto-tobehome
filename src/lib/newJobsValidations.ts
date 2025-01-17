import * as z from "zod";

export const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  endereco: z
    .string()
    .min(5, { message: "Endereço deve ter pelo menos 5 caracteres" }),
  creci: z
    .string()
    .min(3, { message: "CRECI deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  local: z
    .string()
    .min(2, { message: "Local deve ter pelo menos 2 caracteres" }),
  locacao: z.enum(["sim", "nao"], {
    required_error: "Por favor selecione uma opção",
  }),
  estado: z
    .string()
    .min(2, { message: "Estado deve ter pelo menos 2 caracteres" }),
  cidade: z
    .string()
    .min(2, { message: "Cidade deve ter pelo menos 2 caracteres" }),
  bairro: z
    .string()
    .min(2, { message: "Bairro deve ter pelo menos 2 caracteres" }),
  motivo: z
    .string()
    .min(10, { message: "Motivo deve ter pelo menos 10 caracteres" }),
  motivo2: z
    .string()
    .min(10, { message: "Motivo deve ter pelo menos 10 caracteres" }),
  motivo3: z
    .string()
    .min(10, { message: "Motivo deve ter pelo menos 10 caracteres" }),
});

export const fieldGroups = [
  { title: "Informações Pessoais", fields: ["nome", "email", "creci"] },
  { title: "Endereço", fields: ["endereco", "estado", "cidade", "bairro"] },
  { title: "Informações Profissionais", fields: ["local", "locacao"] },
  { title: "Motivação", fields: ["motivo", "motivo2", "motivo3"] },
];
