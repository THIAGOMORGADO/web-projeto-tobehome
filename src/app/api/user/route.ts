 
import { users } from "@/app/mock/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!foundUser) {
      return NextResponse.json(
        {
          message: "Usuário não encontrado",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Rota GET funcionando",
      data: foundUser,
    });
  } catch (error: unknown) {
    return NextResponse.json({
      message: "deu errado",
      error: error,
    });
  }
}
