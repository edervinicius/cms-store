import { NextResponse } from "next/server";

import { RatingService, UserService } from "@/services";
const ratingService = new RatingService();
const userService = new UserService();

export async function POST(req: Request) {
  const { userName, comment, rating, storeId, productId } = await req.json();

  if (!userName)
    return NextResponse.json(
      { message: "user name is required" },
      {
        status: 400,
      }
    );
  if (!comment)
    return NextResponse.json(
      { message: "comment is required" },
      {
        status: 400,
      }
    );
  if (!rating)
    return NextResponse.json(
      { message: "rating is required" },
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
  let user = await userService.findByName(userName);
  if (!user) {
    user = await userService.create(userName);
  }

  if (productId) {
    await ratingService.create(
      comment,
      rating,
      user.id,
      parseInt(storeId, 10),
      productId
    );
    return NextResponse.json({ message: `Rating created` });
  }

  await ratingService.create(comment, rating, user.id, parseInt(storeId, 10));

  return NextResponse.json({ message: `Rating created` });
}
