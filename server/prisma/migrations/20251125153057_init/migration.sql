/*
  Warnings:

  - You are about to drop the column `manufacturerName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Bill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Bill" DROP CONSTRAINT "Bill_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "public"."Request" DROP CONSTRAINT "Request_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_manufacturerName_fkey";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "manufacturerName";

-- DropTable
DROP TABLE "public"."Bill";

-- DropTable
DROP TABLE "public"."Request";

-- CreateTable
CREATE TABLE "public"."SolarPanelRequest" (
    "id" SERIAL NOT NULL,
    "billName" TEXT NOT NULL,
    "billUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "SolarPanelRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ChargerRequest" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userEmail" TEXT NOT NULL,
    "manufacturerName" TEXT NOT NULL,

    CONSTRAINT "ChargerRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InfoRequest" (
    "id" SERIAL NOT NULL,
    "requestType" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "InfoRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SolarPanelRequest_userEmail_key" ON "public"."SolarPanelRequest"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "ChargerRequest_userEmail_key" ON "public"."ChargerRequest"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "ChargerRequest_manufacturerName_key" ON "public"."ChargerRequest"("manufacturerName");

-- CreateIndex
CREATE UNIQUE INDEX "InfoRequest_userEmail_key" ON "public"."InfoRequest"("userEmail");

-- AddForeignKey
ALTER TABLE "public"."SolarPanelRequest" ADD CONSTRAINT "SolarPanelRequest_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "public"."User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChargerRequest" ADD CONSTRAINT "ChargerRequest_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "public"."User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChargerRequest" ADD CONSTRAINT "ChargerRequest_manufacturerName_fkey" FOREIGN KEY ("manufacturerName") REFERENCES "public"."Manufacturer"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InfoRequest" ADD CONSTRAINT "InfoRequest_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "public"."User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
