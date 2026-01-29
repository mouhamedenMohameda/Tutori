-- CreateTable: Add student_push_tokens table for push notifications
-- This migration is safe to run even if the table already exists

-- Create student_push_tokens table (only if it doesn't exist)
CREATE TABLE IF NOT EXISTS "student_push_tokens" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "expo_push_token" TEXT NOT NULL,
    "platform" TEXT NOT NULL DEFAULT 'unknown',
    "device_id" TEXT NOT NULL DEFAULT 'default',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_push_tokens_pkey" PRIMARY KEY ("id")
);

-- Create unique constraint (only if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'student_push_tokens_student_id_device_id_key'
    ) THEN
        ALTER TABLE "student_push_tokens" 
        ADD CONSTRAINT "student_push_tokens_student_id_device_id_key" 
        UNIQUE ("student_id", "device_id");
    END IF;
END $$;

-- Add foreign key constraint (only if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'student_push_tokens_student_id_fkey'
    ) THEN
        ALTER TABLE "student_push_tokens" 
        ADD CONSTRAINT "student_push_tokens_student_id_fkey" 
        FOREIGN KEY ("student_id") REFERENCES "students"("id") 
        ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;

-- Create indexes (only if they don't exist)
CREATE INDEX IF NOT EXISTS "student_push_tokens_student_id_idx" 
ON "student_push_tokens"("student_id");

CREATE INDEX IF NOT EXISTS "student_push_tokens_is_active_idx" 
ON "student_push_tokens"("is_active");

