-- CreateTable: Add community_messages table for group chat
-- Students in the same classroomYear can chat together (like WhatsApp groups)
-- Only keeps latest 50 messages per classroomYear (oldest deleted automatically)

-- Create community_messages table (only if it doesn't exist)
CREATE TABLE IF NOT EXISTS "community_messages" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "classroom_year" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "message_type" TEXT NOT NULL DEFAULT 'TEXT',
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "community_messages_pkey" PRIMARY KEY ("id")
);

-- Add foreign key constraint (only if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'community_messages_student_id_fkey'
    ) THEN
        ALTER TABLE "community_messages" 
        ADD CONSTRAINT "community_messages_student_id_fkey" 
        FOREIGN KEY ("student_id") REFERENCES "students"("id") 
        ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;

-- Create composite index for efficient queries (only if it doesn't exist)
CREATE INDEX IF NOT EXISTS "community_messages_classroom_year_timestamp_idx" 
ON "community_messages"("classroom_year", "timestamp");

-- Create index on student_id for faster lookups
CREATE INDEX IF NOT EXISTS "community_messages_student_id_idx" 
ON "community_messages"("student_id");

