"use server";

import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  // Simula o atraso de uma operação de banco de dados
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Aqui você normalmente salvaria os dados no banco de dados
  // e faria o upload das imagens para um serviço de armazenamento

  const name = formData.get("name");
  const description = formData.get("description");
  const price = formData.get("price");
  const images = formData.getAll("images");

  console.log("Produto criado:", { name, description, price, images });

  revalidatePath("/products");

  return { success: true, message: "Produto cadastrado com sucesso!" };
}
