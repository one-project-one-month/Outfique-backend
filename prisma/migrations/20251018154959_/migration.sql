/*
  Warnings:

  - You are about to drop the column `accessoryId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fashionStyleId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_accessoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_fashionStyleId_fkey";

-- DropIndex
DROP INDEX "public"."User_accessoryId_idx";

-- DropIndex
DROP INDEX "public"."User_fashionStyleId_idx";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "accessoryId",
DROP COLUMN "fashionStyleId";

-- CreateTable
CREATE TABLE "_AccessoryToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AccessoryToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_FashionStyleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_FashionStyleToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AccessoryToUser_B_index" ON "_AccessoryToUser"("B");

-- CreateIndex
CREATE INDEX "_FashionStyleToUser_B_index" ON "_FashionStyleToUser"("B");

-- AddForeignKey
ALTER TABLE "_AccessoryToUser" ADD CONSTRAINT "_AccessoryToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Accessory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccessoryToUser" ADD CONSTRAINT "_AccessoryToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FashionStyleToUser" ADD CONSTRAINT "_FashionStyleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "FashionStyle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FashionStyleToUser" ADD CONSTRAINT "_FashionStyleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
