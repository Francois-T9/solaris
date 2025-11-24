/*
  Warnings:

  - You are about to drop the column `billURL` on the `UserBill` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `UserBill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserBill" DROP COLUMN "billURL",
DROP COLUMN "reference",
ADD COLUMN     "billName" TEXT,
ADD COLUMN     "billUrl" TEXT;
