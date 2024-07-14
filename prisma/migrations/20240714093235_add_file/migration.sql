-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "data" BYTEA NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);
