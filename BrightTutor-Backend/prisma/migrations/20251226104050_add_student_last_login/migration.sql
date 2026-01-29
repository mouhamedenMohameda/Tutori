-- Add last_login field to students table
-- This tracks when students last logged in for inactive reminder notifications (10-hour check)
-- Field is nullable to maintain backward compatibility with existing students

-- Add last_login column (only if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'students' 
        AND column_name = 'last_login'
    ) THEN
        ALTER TABLE "students" 
        ADD COLUMN "last_login" TIMESTAMP(3);
        
        -- No default value needed - existing students will have NULL (which is fine)
        -- New logins will automatically set this field
    END IF;
END $$;

