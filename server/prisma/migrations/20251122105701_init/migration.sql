/*
  Warnings:

  - The primary key for the `Car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `manufacturer` on the `Car` table. All the data in the column will be lost.
  - Added the required column `id` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP CONSTRAINT "Car_pkey",
DROP COLUMN "manufacturer",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Car_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Manufacturer" (
    "name" TEXT NOT NULL,
    "carId" INTEGER,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("name")
);

-- AddForeignKey
ALTER TABLE "Manufacturer" ADD CONSTRAINT "Manufacturer_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE;
