/*
  Warnings:

  - You are about to drop the column `carId` on the `Manufacturer` table. All the data in the column will be lost.
  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Manufacturer" DROP CONSTRAINT "Manufacturer_carId_fkey";

-- AlterTable
ALTER TABLE "Manufacturer" DROP COLUMN "carId";

-- DropTable
DROP TABLE "Car";
