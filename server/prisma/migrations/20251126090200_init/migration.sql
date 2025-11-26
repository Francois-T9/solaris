/*
  Warnings:

  - Added the required column `paquete` to the `EnergyRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."EnergyRequest" ADD COLUMN     "paquete" TEXT NOT NULL;
