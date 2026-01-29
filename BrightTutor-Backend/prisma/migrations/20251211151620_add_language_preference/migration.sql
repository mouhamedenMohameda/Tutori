-- Add language_preference field to students table
-- This allows students to toggle between French (fr) and Arabic (ar) for AI responses
-- Default is 'fr' to maintain backward compatibility

-- Add language_preference column (only if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'students' 
        AND column_name = 'language_preference'
    ) THEN
        ALTER TABLE "students" 
        ADD COLUMN "language_preference" TEXT DEFAULT 'fr';
        
        -- Update all existing students to have 'fr' as default
        UPDATE "students" 
        SET "language_preference" = 'fr' 
        WHERE "language_preference" IS NULL;
    END IF;
END $$;
