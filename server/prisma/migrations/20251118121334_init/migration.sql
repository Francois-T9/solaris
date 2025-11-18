/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "UserBill" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "invoice" TEXT,

    CONSTRAINT "UserBill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserContact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "UserContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserBill_email_key" ON "UserBill"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserContact_email_key" ON "UserContact"("email");
