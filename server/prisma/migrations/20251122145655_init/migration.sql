/*
  Warnings:

  - You are about to drop the column `billId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `requestId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Bill` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Request` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_billId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_manufacturerName_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_requestId_fkey";

-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "billId",
DROP COLUMN "requestId",
ALTER COLUMN "manufacturerName" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Bill_userId_key" ON "Bill"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Request_userId_key" ON "Request"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_manufacturerName_fkey" FOREIGN KEY ("manufacturerName") REFERENCES "Manufacturer"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
