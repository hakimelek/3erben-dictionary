import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  let where = {};

  const words = await prisma.word.findMany({
    where: {
      ...where,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return NextResponse.json(words);
}

export async function POST(req) {
  const body = await req.json();
  const { name, definition, exampleSentences } = body;
  console.log(" name, definition, exampleSentences  ", req.body);
  const newWord = await prisma.word.create({
    data: {
      name,
      definition,
      exampleSentences,
    },
  });
  return NextResponse.json(newWord);
}
