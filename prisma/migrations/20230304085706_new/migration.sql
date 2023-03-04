-- CreateTable
CREATE TABLE "FootPlayer" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "goal" INTEGER NOT NULL,
    "salary" INTEGER NOT NULL,
    "devise" TEXT NOT NULL,
    "pictureURl" TEXT NOT NULL,

    CONSTRAINT "FootPlayer_pkey" PRIMARY KEY ("id")
);
