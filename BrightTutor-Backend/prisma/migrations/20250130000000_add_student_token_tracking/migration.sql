-- AlterTable
-- Check if column exists before adding (prevents error if column already exists)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'students' 
        AND column_name = 'total_tokens_used'
    ) THEN
        ALTER TABLE "students" ADD COLUMN "total_tokens_used" INTEGER NOT NULL DEFAULT 0;
    END IF;
END $$;
