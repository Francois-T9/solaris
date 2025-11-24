/*
  Warnings:

  - You are about to drop the column `userId` on the `Request` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `Request` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_userId_fkey";

-- DropIndex
DROP INDEX "Request_userId_key";

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Request_userEmail_key" ON "Request"("userEmail");

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
