import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Aqui você pode adicionar a lógica para salvar os dados em um banco de dados
  // ou enviar por e-mail, por exemplo.
  console.log("Dados recebidos:", data);

  // Simula um atraso de 1 segundo para demonstrar o estado de carregamento
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Retorna uma resposta de sucesso
  return NextResponse.json({ success: true });
}
