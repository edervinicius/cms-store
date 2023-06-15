import { NextResponse } from "next/server";

import { StoreCuisineService } from "@/services";
const storeCuisineService = new StoreCuisineService();

export async function GET() {
  const cuisines = await storeCuisineService.findAll();

  return NextResponse.json(cuisines);
}

export async function POST(req: Request) {
  const { name } = await req.json();

  if (!name)
    return NextResponse.json(
      { message: "name is required" },
      {
        status: 400,
      }
    );
  await storeCuisineService.create(name);

  return NextResponse.json({ message: `Cuisine ${name} created` });
}
