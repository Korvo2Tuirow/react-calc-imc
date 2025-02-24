import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const urls = await prisma.serverTv.findMany({
      select:{url: true}
    });

    return NextResponse.json(urls.map(data => data.url));
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar URLs" }, { status: 500 });
  }
}

GET().then(async(e) =>{
  await prisma.$disconnect();
  console.log("Disconectar")
}).catch(async(err) =>{
  console.log("Error: " + err);
  await prisma.$disconnect();
  process.exit(1)
})