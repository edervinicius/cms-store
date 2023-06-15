import { prisma } from "@/lib/prisma/prismaClient";
import { Store } from "@prisma/client";

export class StoreService {
  constructor() {}

  async findAll(): Promise<Store[]> {
    return prisma.store.findMany({
      include: {
        ratings: true,
        cuisine: true,
      },
    });
  }

  async findById(id: number): Promise<Store | null> {
    return prisma.store.findUnique({
      where: { id },
      include: {
        cuisine: true,
        products: true,
        ratings: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  }

  async create(
    name: string,
    image: string,
    address: string,
    description: string,
    cuisineId: number
  ): Promise<Store> {
    return prisma.store.create({
      data: { address, name, cuisineId, image, description },
    });
  }

  async update(
    id: number,
    name: string,
    image: string,
    address: string,
    cuisineId: number
  ): Promise<Store | null> {
    return prisma.store.update({
      where: { id },
      data: { address, name, cuisineId, image },
    });
  }

  async delete(id: number): Promise<Store | null> {
    return prisma.store.delete({
      where: { id },
    });
  }
}
