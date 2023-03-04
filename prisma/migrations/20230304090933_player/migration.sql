/*
  Warnings:

  - You are about to drop the `FootPlayer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FootPlayer";

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "goal" INTEGER NOT NULL,
    "salary" INTEGER NOT NULL,
    "devise" TEXT NOT NULL,
    "pictureURl" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
