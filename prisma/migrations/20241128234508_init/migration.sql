-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "region" TEXT NOT NULL,
    "provice" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "gender" TEXT,
    "kindBussines" TEXT,
    "explain" TEXT,
    "date" TEXT,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);
