import { NextResponse } from "next/server";
import { ProductService } from "@/services";
const productService = new ProductService();

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id)
    return NextResponse.json(
      { message: "id is required" },
      {
        status: 400,
      }
    );
  await productService.deleteProduct(parseInt(id, 10));

  return NextResponse.json({ message: `Cuisine ${id} deleted` });
}
