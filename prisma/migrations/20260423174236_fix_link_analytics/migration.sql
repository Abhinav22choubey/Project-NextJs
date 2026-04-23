/*
  Warnings:

  - You are about to drop the column `linkId` on the `ProfileAnalytics` table. All the data in the column will be lost.
  - Added the required column `userId` to the `ProfileAnalytics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProfileAnalytics" DROP CONSTRAINT "ProfileAnalytics_linkId_fkey";

-- DropIndex
DROP INDEX "ProfileAnalytics_visitedAt_linkId_idx";

-- AlterTable
ALTER TABLE "ProfileAnalytics" DROP COLUMN "linkId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "ProfileAnalytics_visitedAt_userId_idx" ON "ProfileAnalytics"("visitedAt", "userId");

-- AddForeignKey
ALTER TABLE "ProfileAnalytics" ADD CONSTRAINT "ProfileAnalytics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
