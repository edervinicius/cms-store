import { prisma } from "@/lib/prisma/prismaClient";
import { StoreCuisine } from "@prisma/client";

export class StoreCuisineService {
  constructor() {}

  async findAll(): Promise<StoreCuisine[]> {
    return prisma.storeCuisine.findMany();
  }

  async findById(id: number): Promise<StoreCuisine | null> {
    return prisma.storeCuisine.findUnique({
      where: { id },
    });
  }

  async create(name: string): Promise<StoreCuisine> {
    return prisma.storeCuisine.create({
      data: {
        name,
      },
    });
  }

  async update(id: number, name: string): Promise<StoreCuisine | null> {
    return prisma.storeCuisine.update({
      where: { id },
      data: name,
    });
  }

  async delete(id: number): Promise<StoreCuisine | null> {
    return prisma.storeCuisine.delete({
      where: { id },
    });
  }
}
