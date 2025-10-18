/*
  Warnings:

  - You are about to drop the `_AccessoryToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BodyTypeToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FashionStyleToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Accessory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `BodyType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FashionStyle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."_AccessoryToUser" DROP CONSTRAINT "_AccessoryToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AccessoryToUser" DROP CONSTRAINT "_AccessoryToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_BodyTypeToUser" DROP CONSTRAINT "_BodyTypeToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_BodyTypeToUser" DROP CONSTRAINT "_BodyTypeToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_FashionStyleToUser" DROP CONSTRAINT "_FashionStyleToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_FashionStyleToUser" DROP CONSTRAINT "_FashionStyleToUser_B_fkey";

-- AlterTable
ALTER TABLE "Accessory" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "BodyType" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FashionStyle" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "color" TEXT,
ADD COLUMN     "weight" INTEGER,
ALTER COLUMN "birthday" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "accessoryId" DROP NOT NULL,
ALTER COLUMN "bodyTypeId" DROP NOT NULL,
ALTER COLUMN "fashionStyleId" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."_AccessoryToUser";

-- DropTable
DROP TABLE "public"."_BodyTypeToUser";

-- DropTable
DROP TABLE "public"."_FashionStyleToUser";

-- CreateIndex
CREATE INDEX "User_bodyTypeId_idx" ON "User"("bodyTypeId");

-- CreateIndex
CREATE INDEX "User_accessoryId_idx" ON "User"("accessoryId");

-- CreateIndex
CREATE INDEX "User_fashionStyleId_idx" ON "User"("fashionStyleId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_bodyTypeId_fkey" FOREIGN KEY ("bodyTypeId") REFERENCES "BodyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accessoryId_fkey" FOREIGN KEY ("accessoryId") REFERENCES "Accessory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_fashionStyleId_fkey" FOREIGN KEY ("fashionStyleId") REFERENCES "FashionStyle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
