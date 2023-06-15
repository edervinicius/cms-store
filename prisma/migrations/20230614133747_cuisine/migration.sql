/*
  Warnings:

  - Added the required column `cuisineId` to the `store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "store" ADD COLUMN     "cuisineId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "storeCuisine" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "storeCuisine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store" ADD CONSTRAINT "store_cuisineId_fkey" FOREIGN KEY ("cuisineId") REFERENCES "storeCuisine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
