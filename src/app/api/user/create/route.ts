 
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, password, provider } = await req.json();

  const newUser = {
    name,
    email,
    password,
    provider,
  };

  try {
    return NextResponse.json({
      message: "Rota Post funcionando",
      data: newUser,
    });
  } catch (err) {
    return NextResponse.json({
      message: "deu errado",
      error: err,
    });
  }
}
