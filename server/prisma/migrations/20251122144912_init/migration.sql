/*
  Warnings:

  - Made the column `billName` on table `Bill` required. This step will fail if there are existing NULL values in that column.
  - Made the column `billUrl` on table `Bill` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Bill" ALTER COLUMN "billName" SET NOT NULL,
ALTER COLUMN "billUrl" SET NOT NULL;
