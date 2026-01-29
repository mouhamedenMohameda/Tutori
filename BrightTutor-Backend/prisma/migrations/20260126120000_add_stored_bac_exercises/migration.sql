-- Add stored_bac_exercises and stored_bac_exercise_parts tables
-- Stores pre-generated BAC exercises (one per chapter) with all their parts
-- This replaces dynamic generation - exercises are generated once and reused

-- Create stored_bac_exercises table
CREATE TABLE IF NOT EXISTS "stored_bac_exercises" (
    "id" TEXT NOT NULL,
    "chapter_id" TEXT NOT NULL,
    "exercise_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL DEFAULT 'Moyen',
    "concepts" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "objectives" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "part_sequence" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "enonce_complet" TEXT,
    "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "generated_by" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stored_bac_exercises_pkey" PRIMARY KEY ("id")
);

-- Create stored_bac_exercise_parts table
CREATE TABLE IF NOT EXISTS "stored_bac_exercise_parts" (
    "id" TEXT NOT NULL,
    "exercise_id" TEXT NOT NULL,
    "part_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'calcul',
    "difficulty" TEXT NOT NULL DEFAULT 'Moyen',
    "validated" BOOLEAN NOT NULL DEFAULT true,
    "order_index" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stored_bac_exercise_parts_pkey" PRIMARY KEY ("id")
);

-- Create unique constraint for chapter + exercise (one exercise per chapter)
CREATE UNIQUE INDEX IF NOT EXISTS "stored_bac_exercises_chapter_id_exercise_id_key" 
    ON "stored_bac_exercises"("chapter_id", "exercise_id");

-- Create unique constraint for exercise + part (one part per exercise+partId)
CREATE UNIQUE INDEX IF NOT EXISTS "stored_bac_exercise_parts_exercise_id_part_id_key" 
    ON "stored_bac_exercise_parts"("exercise_id", "part_id");

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS "stored_bac_exercises_chapter_id_idx" 
    ON "stored_bac_exercises"("chapter_id");

CREATE INDEX IF NOT EXISTS "stored_bac_exercises_exercise_id_idx" 
    ON "stored_bac_exercises"("exercise_id");

CREATE INDEX IF NOT EXISTS "stored_bac_exercises_subject_idx" 
    ON "stored_bac_exercises"("subject");

CREATE INDEX IF NOT EXISTS "stored_bac_exercise_parts_exercise_id_order_index_idx" 
    ON "stored_bac_exercise_parts"("exercise_id", "order_index");

-- Add foreign key constraint
ALTER TABLE "stored_bac_exercise_parts" 
    ADD CONSTRAINT "stored_bac_exercise_parts_exercise_id_fkey" 
    FOREIGN KEY ("exercise_id") 
    REFERENCES "stored_bac_exercises"("id") 
    ON DELETE CASCADE 
    ON UPDATE CASCADE;
