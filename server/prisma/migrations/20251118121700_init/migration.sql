/*
  Warnings:

  - You are about to drop the column `invoice` on the `UserBill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserBill" DROP COLUMN "invoice",
ADD COLUMN     "billURL" TEXT;
