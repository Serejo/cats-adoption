/*
  Warnings:

  - You are about to drop the `Adoption` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "AdoptionRequest" ADD COLUMN     "catName" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "Adoption";
