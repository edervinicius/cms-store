import { prisma } from "@/lib/prisma/prismaClient";
import { Rating } from "@prisma/client";

export class RatingService {
  constructor() {}

  async findAll(storeId: number): Promise<Rating[]> {
    return prisma.rating.findMany({
      where: {
        storeId,
      },
    });
  }

  async findById(id: number): Promise<Rating | null> {
    return prisma.rating.findUnique({
      where: { id },
      include: {
        user: true,
        product: true,
      },
    });
  }

  async findByStoreId(storeId: number): Promise<Rating[] | null> {
    return prisma.rating.findMany({
      where: {
        storeId,
      },
      include: {
        user: true,
        product: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async create(
    comment: string,
    rating: number,
    userId: number,
    storeId: number,
    productId?: number
  ): Promise<Rating> {
    return prisma.rating.create({
      data: { comment, storeId, userId, rating, productId },
    });
  }

  async update(
    id: number,
    comment: string,
    rating: number,
    userId: number,
    storeId: number
  ): Promise<Rating | null> {
    return prisma.rating.update({
      where: { id },
      data: { comment, storeId, userId, rating },
    });
  }

  async delete(id: number): Promise<Rating | null> {
    return prisma.rating.delete({
      where: { id },
    });
  }
}
