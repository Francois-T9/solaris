/*
  Warnings:

  - You are about to drop the column `userId` on the `Bill` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `Bill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `Bill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bill" DROP CONSTRAINT "Bill_userId_fkey";

-- DropIndex
DROP INDEX "Bill_userId_key";

-- AlterTable
ALTER TABLE "Bill" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Bill_userEmail_key" ON "Bill"("userEmail");

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
