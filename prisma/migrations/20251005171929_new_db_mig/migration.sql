/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthday` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('male', 'female', 'unisex', 'prefer_not_to_say');

-- CreateEnum
CREATE TYPE "public"."PrivacyLevel" AS ENUM ('minimal', 'standard', 'enhanced');

-- CreateEnum
CREATE TYPE "public"."PriceRange" AS ENUM ('budget', 'mid_range', 'luxury');

-- CreateEnum
CREATE TYPE "public"."FormalityLevel" AS ENUM ('casual', 'semi_formal', 'formal', 'very_formal', 'ultra_formal');

-- CreateEnum
CREATE TYPE "public"."BudgetRange" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "public"."SelectionReason" AS ENUM ('liked', 'disliked', 'neutral', 'purchased');

-- CreateEnum
CREATE TYPE "public"."AgeGroup" AS ENUM ('teen', 'young_adult', 'adult', 'mature');

-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "userId",
ADD COLUMN     "age" INTEGER,
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "gender" "public"."Gender" NOT NULL DEFAULT 'prefer_not_to_say',
ADD COLUMN     "height" INTEGER,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "privacyLevel" "public"."PrivacyLevel" NOT NULL DEFAULT 'standard',
ADD COLUMN     "timezone" TEXT NOT NULL DEFAULT 'UTC',
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "public"."Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "idToken" TEXT,
    "passwordHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verificationType" TEXT NOT NULL DEFAULT 'email',

    CONSTRAINT "Verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ColorPreference" (
    "id" SERIAL NOT NULL,
    "colorName" TEXT NOT NULL,
    "hexCode" TEXT,
    "shortDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ColorPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BodyType" (
    "id" SERIAL NOT NULL,
    "gender" "public"."Gender" NOT NULL DEFAULT 'unisex',
    "typeName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "BodyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FashionStyle" (
    "id" SERIAL NOT NULL,
    "styleName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "socialRanking" INTEGER NOT NULL DEFAULT 0,
    "trendScore" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "ageGroup" "public"."AgeGroup",
    "formalityLevel" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "FashionStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OutfitCategory" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,
    "description" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "OutfitCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OutfitElements" (
    "id" SERIAL NOT NULL,
    "gender" "public"."Gender" NOT NULL DEFAULT 'unisex',
    "categoryId" INTEGER NOT NULL,
    "elementName" TEXT NOT NULL,
    "brandName" TEXT,
    "priceRange" "public"."PriceRange",
    "materialType" TEXT,
    "careInstructions" TEXT,
    "seasonSuitability" TEXT[],
    "formalityLevel" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "OutfitElements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WeatherType" (
    "id" SERIAL NOT NULL,
    "weatherName" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "WeatherType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserPreference" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "favoriteColors" INTEGER[],
    "bodyTypeId" INTEGER,
    "favoriteStyles" INTEGER[],
    "budgetRange" "public"."BudgetRange" NOT NULL DEFAULT 'medium',
    "preferredBrands" TEXT[],
    "styleConfidenceLevel" INTEGER,
    "preferredWeatherTypes" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserFavourite" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "outfitElementsId" INTEGER NOT NULL,
    "selectionReason" "public"."SelectionReason",
    "occasion" TEXT,
    "weatherConditionId" INTEGER,
    "userRating" INTEGER,
    "feedbackNotes" TEXT,
    "selectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserFavourite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OutfitInDigitalCloset" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "outfitComposition" JSONB NOT NULL DEFAULT '{}',
    "outfitName" TEXT NOT NULL,
    "dominantColors" INTEGER[],
    "styleTags" TEXT[],
    "suitableOccasions" TEXT[],
    "suitableWeather" INTEGER[],
    "styleDescription" TEXT,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "suggestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "seasonRelevance" DECIMAL(65,30) NOT NULL DEFAULT 1.0,
    "trendRelevance" DECIMAL(65,30) NOT NULL DEFAULT 0.5,

    CONSTRAINT "OutfitInDigitalCloset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ColorPreference_colorName_key" ON "public"."ColorPreference"("colorName");

-- CreateIndex
CREATE UNIQUE INDEX "BodyType_gender_typeName_key" ON "public"."BodyType"("gender", "typeName");

-- CreateIndex
CREATE UNIQUE INDEX "FashionStyle_styleName_key" ON "public"."FashionStyle"("styleName");

-- CreateIndex
CREATE UNIQUE INDEX "OutfitCategory_categoryName_key" ON "public"."OutfitCategory"("categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "OutfitElements_gender_categoryId_elementName_key" ON "public"."OutfitElements"("gender", "categoryId", "elementName");

-- CreateIndex
CREATE UNIQUE INDEX "WeatherType_weatherName_key" ON "public"."WeatherType"("weatherName");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_userId_key" ON "public"."UserPreference"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFavourite_userId_outfitElementsId_selectedAt_key" ON "public"."UserFavourite"("userId", "outfitElementsId", "selectedAt");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_isActive_idx" ON "public"."User"("isActive");

-- AddForeignKey
ALTER TABLE "public"."Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OutfitElements" ADD CONSTRAINT "OutfitElements_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."OutfitCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserPreference" ADD CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserPreference" ADD CONSTRAINT "UserPreference_bodyTypeId_fkey" FOREIGN KEY ("bodyTypeId") REFERENCES "public"."BodyType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserFavourite" ADD CONSTRAINT "UserFavourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserFavourite" ADD CONSTRAINT "UserFavourite_outfitElementsId_fkey" FOREIGN KEY ("outfitElementsId") REFERENCES "public"."OutfitElements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserFavourite" ADD CONSTRAINT "UserFavourite_weatherConditionId_fkey" FOREIGN KEY ("weatherConditionId") REFERENCES "public"."WeatherType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OutfitInDigitalCloset" ADD CONSTRAINT "OutfitInDigitalCloset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
