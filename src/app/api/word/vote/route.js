import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, definition, exampleSentences } = body;

  const newWord = await prisma.word.update({
    where: {
      id: 1,
    },
    data: {},
  });
  return NextResponse.json(newWord);
}
