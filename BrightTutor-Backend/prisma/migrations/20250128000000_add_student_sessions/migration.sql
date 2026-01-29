-- CreateTable
-- Safe migration: Uses IF NOT EXISTS to prevent errors if run multiple times
CREATE TABLE IF NOT EXISTS "student_sessions" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "session_start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "session_end" TIMESTAMP(3),
    "total_duration" INTEGER NOT NULL DEFAULT 0,
    "chat_time" INTEGER NOT NULL DEFAULT 0,
    "map_time" INTEGER NOT NULL DEFAULT 0,
    "rankings_time" INTEGER NOT NULL DEFAULT 0,
    "community_time" INTEGER NOT NULL DEFAULT 0,
    "profile_time" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX IF NOT EXISTS "student_sessions_student_id_date_idx" ON "student_sessions"("student_id", "date");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "student_sessions_date_idx" ON "student_sessions"("date");

-- AddForeignKey
-- Safe: Only add constraint if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'student_sessions_student_id_fkey'
    ) THEN
        ALTER TABLE "student_sessions" ADD CONSTRAINT "student_sessions_student_id_fkey" 
        FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;
