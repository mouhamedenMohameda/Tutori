-- CreateTable: bac_exercises
-- Tracks student progress through BAC exercises
CREATE TABLE IF NOT EXISTS "bac_exercises" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "exercise_id" TEXT NOT NULL,
    "current_part_id" TEXT NOT NULL,
    "completed_parts" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "total_score" INTEGER NOT NULL DEFAULT 0,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_accessed_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bac_exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable: bac_part_completions
-- Tracks completion details for each part of a BAC exercise
CREATE TABLE IF NOT EXISTS "bac_part_completions" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "exercise_id" TEXT NOT NULL,
    "part_id" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "time_spent" INTEGER NOT NULL DEFAULT 0,
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bac_part_completions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex: Unique constraint for student + exercise combination
CREATE UNIQUE INDEX IF NOT EXISTS "bac_exercises_student_id_exercise_id_key" ON "bac_exercises"("student_id", "exercise_id");

-- CreateIndex: Index on student_id for bac_exercises
CREATE INDEX IF NOT EXISTS "bac_exercises_student_id_idx" ON "bac_exercises"("student_id");

-- CreateIndex: Index on exercise_id for bac_exercises
CREATE INDEX IF NOT EXISTS "bac_exercises_exercise_id_idx" ON "bac_exercises"("exercise_id");

-- CreateIndex: Unique constraint for student + exercise + part combination
CREATE UNIQUE INDEX IF NOT EXISTS "bac_part_completions_student_id_exercise_id_part_id_key" ON "bac_part_completions"("student_id", "exercise_id", "part_id");

-- CreateIndex: Index on student_id for bac_part_completions
CREATE INDEX IF NOT EXISTS "bac_part_completions_student_id_idx" ON "bac_part_completions"("student_id");

-- AddForeignKey: bac_exercises.student_id -> students.id
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'bac_exercises_student_id_fkey'
    ) THEN
        ALTER TABLE "bac_exercises" 
        ADD CONSTRAINT "bac_exercises_student_id_fkey" 
        FOREIGN KEY ("student_id") 
        REFERENCES "students"("id") 
        ON DELETE CASCADE 
        ON UPDATE CASCADE;
    END IF;
END $$;

-- AddForeignKey: bac_part_completions.student_id -> students.id
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'bac_part_completions_student_id_fkey'
    ) THEN
        ALTER TABLE "bac_part_completions" 
        ADD CONSTRAINT "bac_part_completions_student_id_fkey" 
        FOREIGN KEY ("student_id") 
        REFERENCES "students"("id") 
        ON DELETE CASCADE 
        ON UPDATE CASCADE;
    END IF;
END $$;
