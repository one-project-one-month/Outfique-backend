/*
  Warnings:

  - The primary key for the `BodyType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `BodyType` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `BodyType` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `BodyType` table. All the data in the column will be lost.
  - You are about to drop the column `typeName` on the `BodyType` table. All the data in the column will be lost.
  - The primary key for the `FashionStyle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ageGroup` on the `FashionStyle` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `FashionStyle` table. All the data in the column will be lost.
  - You are about to drop the column `formalityLevel` on the `FashionStyle` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `FashionStyle` table. All the data in the column will be lost.
  - You are about to drop the column `socialRanking` on the `FashionStyle` table. All the data in the column will be lost.
  - You are about to drop the column `styleName` on the `FashionStyle` table. All the data in the column will be lost.
  - You are about to drop the column `trendScore` on the `FashionStyle` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `BodyType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `FashionStyle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `BodyType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `FashionStyle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accessoryId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bodyTypeId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fashionStyleId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `birthday` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `height` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."UserPreference" DROP CONSTRAINT "UserPreference_bodyTypeId_fkey";

-- DropIndex
DROP INDEX "public"."BodyType_gender_typeName_key";

-- DropIndex
DROP INDEX "public"."FashionStyle_styleName_key";

-- AlterTable
ALTER TABLE "BodyType" DROP CONSTRAINT "BodyType_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "gender",
DROP COLUMN "isActive",
DROP COLUMN "typeName",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "BodyType_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "BodyType_id_seq";

-- AlterTable
ALTER TABLE "FashionStyle" DROP CONSTRAINT "FashionStyle_pkey",
DROP COLUMN "ageGroup",
DROP COLUMN "createdAt",
DROP COLUMN "formalityLevel",
DROP COLUMN "isActive",
DROP COLUMN "socialRanking",
DROP COLUMN "styleName",
DROP COLUMN "trendScore",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "FashionStyle_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FashionStyle_id_seq";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "image",
ADD COLUMN     "accessoryId" TEXT NOT NULL,
ADD COLUMN     "bodyTypeId" TEXT NOT NULL,
ADD COLUMN     "fashionStyleId" TEXT NOT NULL,
ALTER COLUMN "birthday" SET NOT NULL,
ALTER COLUMN "gender" DROP DEFAULT,
ALTER COLUMN "height" SET NOT NULL;

-- CreateTable
CREATE TABLE "Accessory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Accessory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BodyTypeToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BodyTypeToUser_AB_pkey" PRIMARY KEY ("A","B")
);

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
CREATE UNIQUE INDEX "Accessory_name_key" ON "Accessory"("name");

-- CreateIndex
CREATE INDEX "_BodyTypeToUser_B_index" ON "_BodyTypeToUser"("B");

-- CreateIndex
CREATE INDEX "_AccessoryToUser_B_index" ON "_AccessoryToUser"("B");

-- CreateIndex
CREATE INDEX "_FashionStyleToUser_B_index" ON "_FashionStyleToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "BodyType_name_key" ON "BodyType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FashionStyle_name_key" ON "FashionStyle"("name");

-- AddForeignKey
ALTER TABLE "_BodyTypeToUser" ADD CONSTRAINT "_BodyTypeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "BodyType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BodyTypeToUser" ADD CONSTRAINT "_BodyTypeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccessoryToUser" ADD CONSTRAINT "_AccessoryToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Accessory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccessoryToUser" ADD CONSTRAINT "_AccessoryToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FashionStyleToUser" ADD CONSTRAINT "_FashionStyleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "FashionStyle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FashionStyleToUser" ADD CONSTRAINT "_FashionStyleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
