/*
  Warnings:

  - The primary key for the `OutfitInDigitalCloset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dominantColors` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - You are about to drop the column `outfitComposition` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - You are about to drop the column `outfitName` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - You are about to drop the column `seasonRelevance` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - You are about to drop the column `styleDescription` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - You are about to drop the column `styleTags` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - You are about to drop the column `suggestedAt` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - You are about to drop the column `suitableOccasions` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - You are about to drop the column `suitableWeather` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - You are about to drop the column `trendRelevance` on the `OutfitInDigitalCloset` table. All the data in the column will be lost.
  - Added the required column `image_publicId` to the `OutfitInDigitalCloset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `OutfitInDigitalCloset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `OutfitInDigitalCloset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."OutfitInDigitalCloset" DROP CONSTRAINT "OutfitInDigitalCloset_pkey",
DROP COLUMN "dominantColors",
DROP COLUMN "outfitComposition",
DROP COLUMN "outfitName",
DROP COLUMN "seasonRelevance",
DROP COLUMN "styleDescription",
DROP COLUMN "styleTags",
DROP COLUMN "suggestedAt",
DROP COLUMN "suitableOccasions",
DROP COLUMN "suitableWeather",
DROP COLUMN "trendRelevance",
ADD COLUMN     "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "brand" TEXT[],
ADD COLUMN     "categories" TEXT[],
ADD COLUMN     "colors" TEXT[],
ADD COLUMN     "fashionStyles" TEXT[],
ADD COLUMN     "image_publicId" TEXT NOT NULL,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "weatherConds" TEXT[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "OutfitInDigitalCloset_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "OutfitInDigitalCloset_id_seq";
