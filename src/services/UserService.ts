import { prisma } from "@/lib/prisma/prismaClient";
import { User } from "@prisma/client";

export class UserService {
  constructor() {}

  async findAll(): Promise<User[]> {
    return prisma.user.findMany({
      include: {
        ratings: true,
      },
    });
  }

  async findById(id: number): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
      include: {
        ratings: true,
      },
    });
  }

  async findByName(name: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { name },
      include: {
        ratings: true,
      },
    });
  }

  async create(name: string): Promise<User> {
    return prisma.user.create({
      data: { name },
    });
  }

  async delete(id: number): Promise<User | null> {
    return prisma.user.delete({
      where: { id },
    });
  }
}
