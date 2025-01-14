"use server";

import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .min(10, "Número de telefone inválido")
    .max(15, "Número de telefone muito longo"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export async function submitForm(prevState: any, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Aqui você pode adicionar a lógica para salvar os dados em um banco de dados
  // ou enviar por e-mail, por exemplo

  return { success: true, message: "Formulário enviado com sucesso!" };
}
