/*
  Warnings:

  - Made the column `tipo` on table `musicos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "musicos" ALTER COLUMN "tipo" SET NOT NULL;
