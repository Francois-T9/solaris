/*
  Warnings:

  - You are about to drop the `SolarPanelRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."SolarPanelRequest" DROP CONSTRAINT "SolarPanelRequest_userEmail_fkey";

-- DropTable
DROP TABLE "public"."SolarPanelRequest";

-- CreateTable
CREATE TABLE "public"."EnergyRequest" (
    "id" SERIAL NOT NULL,
    "billName" TEXT NOT NULL,
    "billUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "EnergyRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EnergyRequest_userEmail_key" ON "public"."EnergyRequest"("userEmail");

-- AddForeignKey
ALTER TABLE "public"."EnergyRequest" ADD CONSTRAINT "EnergyRequest_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "public"."User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
