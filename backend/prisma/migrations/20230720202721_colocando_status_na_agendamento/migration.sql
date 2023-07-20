/*
  Warnings:

  - Added the required column `status` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agendamentos" ADD COLUMN     "status" TEXT NOT NULL;
