import { NextResponse } from "next/server";
import { StoreService } from "@/services/StoreService";
const storeService = new StoreService();

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
  await storeService.delete(parseInt(id, 10));

  return NextResponse.json({ message: `Store ${id} deleted` });
}

export async function GET(
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
  const store = await storeService.findById(parseInt(id, 10));

  return NextResponse.json(store);
}
