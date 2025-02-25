import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json(); // Pegamos o ID da URL a ser deletada

    if (!id) {
      return NextResponse.json({ error: "ID é obrigatório" }, { status: 400 });
    }

    await prisma.serverTv.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "URL deletada com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar URL:", error);
    return NextResponse.json({ error: "Erro ao deletar URL" }, { status: 500 });
  }
}
