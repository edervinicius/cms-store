import { NextResponse } from "next/server";

import { ProductService } from "@/services";
const productService = new ProductService();

export async function GET() {
  const products = await productService.findAllProduct();

  return NextResponse.json(products);
}

export async function POST(req: Request) {
  console.log("POST");
  const { name, price, image, description, storeId } = await req.json();

  if (!name)
    return NextResponse.json(
      { message: "name is required" },
      {
        status: 400,
      }
    );
  if (!price)
    return NextResponse.json(
      { message: "price is required" },
      {
        status: 400,
      }
    );
  if (!storeId)
    return NextResponse.json(
      { message: "store is required" },
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
  await productService.createProduct(name, image, price, description, storeId);

  return NextResponse.json({ message: `Product ${name} created` });
}
