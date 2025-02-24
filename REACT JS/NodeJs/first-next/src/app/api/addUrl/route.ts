import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { url } = await req.json(); // Pega os dados do corpo da requisição

    if (!url) {
      return NextResponse.json({ error: "URL é obrigatória" }, { status: 400 });
    }

    // Insere no banco de dados
    const newUrl = await prisma.serverTv.create({
      data: { url },
    });

    return NextResponse.json(newUrl, { status: 201 }); // Retorna o dado inserido
  } catch (error) {
    console.error("Erro ao inserir URL:", error);
    return NextResponse.json({ error: "Erro ao inserir URL" }, { status: 500 });
  }
}
