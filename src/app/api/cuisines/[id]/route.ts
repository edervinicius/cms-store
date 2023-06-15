import { NextResponse } from "next/server";
import { StoreCuisineService } from "@/services";
const storeCuisineService = new StoreCuisineService();

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
  await storeCuisineService.delete(parseInt(id, 10));

  return NextResponse.json({ message: `Cuisine ${id} deleted` });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const { name, address, cuisineId } = await req.json();

  if (!id)
    return NextResponse.json(
      { message: "id is required" },
      {
        status: 400,
      }
    );

  if (!name)
    return NextResponse.json(
      { message: "name is required" },
      {
        status: 400,
      }
    );
  await storeCuisineService.update(parseInt(id, 10), name);

  return NextResponse.json({ message: `Cuisine ${name} updated` });
}
