-- Add bac_course_cache table
-- Stores AI-generated courses with ratings for BAC exercises
-- Multiple courses per exercise allowed - keeps all generated courses
-- When a course is rated better than others, inferior courses are deleted

CREATE TABLE IF NOT EXISTS "bac_course_cache" (
    "id" TEXT NOT NULL,
    "exercise_id" TEXT NOT NULL,
    "course_content" TEXT NOT NULL,
    "average_rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_ratings" INTEGER NOT NULL DEFAULT 0,
    "ratings" TEXT NOT NULL DEFAULT '[]',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bac_course_cache_pkey" PRIMARY KEY ("id")
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS "bac_course_cache_exercise_id_idx" ON "bac_course_cache"("exercise_id");
CREATE INDEX IF NOT EXISTS "bac_course_cache_exercise_id_average_rating_idx" ON "bac_course_cache"("exercise_id", "average_rating");

