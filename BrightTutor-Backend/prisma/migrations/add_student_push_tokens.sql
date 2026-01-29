-- Migration: Add student_push_tokens table
-- Run this migration to add push notification support

-- Create student_push_tokens table
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

-- Create unique constraint on student_id + device_id
CREATE UNIQUE INDEX IF NOT EXISTS "student_push_tokens_student_id_device_id_key" 
ON "student_push_tokens"("student_id", "device_id");

-- Add foreign key constraint
ALTER TABLE "student_push_tokens" 
ADD CONSTRAINT "student_push_tokens_student_id_fkey" 
FOREIGN KEY ("student_id") REFERENCES "students"("id") 
ON DELETE CASCADE ON UPDATE CASCADE;

-- Create index on student_id for faster queries
CREATE INDEX IF NOT EXISTS "student_push_tokens_student_id_idx" 
ON "student_push_tokens"("student_id");

-- Create index on is_active for filtering active tokens
CREATE INDEX IF NOT EXISTS "student_push_tokens_is_active_idx" 
ON "student_push_tokens"("is_active");

