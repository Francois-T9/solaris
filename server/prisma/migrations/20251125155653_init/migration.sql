-- DropForeignKey
ALTER TABLE "public"."ChargerRequest" DROP CONSTRAINT "ChargerRequest_manufacturerName_fkey";

-- DropIndex
DROP INDEX "public"."ChargerRequest_manufacturerName_key";

-- AlterTable
ALTER TABLE "public"."ChargerRequest" ALTER COLUMN "manufacturerName" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."ChargerRequest" ADD CONSTRAINT "ChargerRequest_manufacturerName_fkey" FOREIGN KEY ("manufacturerName") REFERENCES "public"."Manufacturer"("name") ON DELETE SET NULL ON UPDATE CASCADE;
