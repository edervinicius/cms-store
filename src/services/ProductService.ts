import { prisma } from "@/lib/prisma/prismaClient";
import { Product } from "@prisma/client";

export class ProductService {
  constructor() {}

  async findAllProduct(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
  }

  async findProductById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({
      where: { id },
    });
  }

  async createProduct(
    name: string,
    image: string,
    price: number,
    description: string,
    storeId: number
  ): Promise<Product> {
    return prisma.product.create({
      data: {
        name,
        image,
        price,
        description,
        storeId,
      },
    });
  }

  async updateProduct(
    id: number,
    name: string,
    image: string,
    price: number,
    description: string,
    storeId: number
  ): Promise<Product | null> {
    return prisma.product.update({
      where: { id },
      data: {
        name,
        image,
        price,
        description,
        storeId,
      },
    });
  }

  async deleteProduct(id: number): Promise<Product | null> {
    return prisma.product.delete({
      where: { id },
    });
  }
}
