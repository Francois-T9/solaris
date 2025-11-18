/*
  Warnings:

  - Added the required column `requestType` to the `UserContact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserContact" ADD COLUMN     "requestType" TEXT NOT NULL;
