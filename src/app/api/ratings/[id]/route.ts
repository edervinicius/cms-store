import { NextResponse } from "next/server";
import { RatingService } from "@/services";
const ratingService = new RatingService();

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
  await ratingService.delete(parseInt(id, 10));

  return NextResponse.json({ message: `Rating ${id} deleted` });
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id)
    return NextResponse.json(
      { message: "store id is required" },
      {
        status: 400,
      }
    );
  const store = await ratingService.findByStoreId(parseInt(id, 10));

  return NextResponse.json(store);
}
