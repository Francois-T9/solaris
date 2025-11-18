-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "email" TEXT NOT NULL,
    "invoice" TEXT NOT NULL,
    "question" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
