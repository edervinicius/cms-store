import { NextResponse } from "next/server";

import { StoreService } from "@/services";
const storeService = new StoreService();

export async function GET() {
  const stores = await storeService.findAll();

  return NextResponse.json(stores);
}

export async function POST(req: Request) {
  const { name, address, cuisineId, image, description } = await req.json();

  if (!name)
    return NextResponse.json(
      { message: "name is required" },
      {
        status: 400,
      }
    );
  if (!address)
    return NextResponse.json(
      { message: "address is required" },
      {
        status: 400,
      }
    );
  if (!cuisineId)
    return NextResponse.json(
      { message: "cuisine is required" },
      {
        status: 400,
      }
    );
  if (!image)
    return NextResponse.json(
      { message: "image is required" },
      {
        status: 400,
      }
    );
  if (!description)
    return NextResponse.json(
      { message: "description is required" },
      {
        status: 400,
      }
    );
  await storeService.create(name, image, address, description, cuisineId);

  return NextResponse.json({ message: `Store ${name} created` });
}
