import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const offset = searchParams.get("offset") || 0;
  const limit = searchParams.get("limit") || 15;
  const query = searchParams.get("query") || "";

  let where = {
    name: {
      contains: query,
      mode: "insensitive",
    },
  };

  const words = await prisma.word.findMany({
    skip: parseInt(offset),
    take: parseInt(limit),

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
  // words to add
  const words = [];

  const newWord = await prisma.word.createMany({
    data: words,
  });
  return NextResponse.json(newWord);
}
