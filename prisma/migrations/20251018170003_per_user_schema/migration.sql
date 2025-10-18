/*
  Warnings:

  - You are about to drop the column `bodyTypeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Accessory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BodyType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FashionStyle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AccessoryToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FashionStyleToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_bodyTypeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AccessoryToUser" DROP CONSTRAINT "_AccessoryToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AccessoryToUser" DROP CONSTRAINT "_AccessoryToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_FashionStyleToUser" DROP CONSTRAINT "_FashionStyleToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_FashionStyleToUser" DROP CONSTRAINT "_FashionStyleToUser_B_fkey";

-- DropIndex
DROP INDEX "public"."User_bodyTypeId_idx";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bodyTypeId";

-- DropTable
DROP TABLE "public"."Accessory";

-- DropTable
DROP TABLE "public"."BodyType";

-- DropTable
DROP TABLE "public"."FashionStyle";

-- DropTable
DROP TABLE "public"."_AccessoryToUser";

-- DropTable
DROP TABLE "public"."_FashionStyleToUser";

-- CreateTable
CREATE TABLE "UserBodyType" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserBodyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAccessory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAccessory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFashionStyle" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserFashionStyle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserBodyType_userId_key" ON "UserBodyType"("userId");

-- AddForeignKey
ALTER TABLE "UserBodyType" ADD CONSTRAINT "UserBodyType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAccessory" ADD CONSTRAINT "UserAccessory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFashionStyle" ADD CONSTRAINT "UserFashionStyle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
