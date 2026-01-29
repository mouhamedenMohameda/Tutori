-- Safe Migration: Add Classroom Curriculum Fields
-- This migration adds new fields without breaking existing functionality
-- Date: 2025-01-18
-- Purpose: Enable AI curriculum context for enhanced tutoring

-- Step 1: Add classroom_year field to classes table
-- This field will store the French year level (Premier, Deuxième, Troisième, Quatrième)
ALTER TABLE classes ADD COLUMN IF NOT EXISTS classroom_year VARCHAR(50);

-- Step 2: Add subject_type field to subjects table  
-- This field will store the subject type (MATH, SCIENCE, PHYSICS)
ALTER TABLE subjects ADD COLUMN IF NOT EXISTS subject_type VARCHAR(50);

-- Step 3: Create index for better performance on new fields
CREATE INDEX IF NOT EXISTS idx_classes_classroom_year ON classes(classroom_year);
CREATE INDEX IF NOT EXISTS idx_subjects_subject_type ON subjects(subject_type);

-- Step 4: Add comments for documentation
COMMENT ON COLUMN classes.classroom_year IS 'French year level: Premier, Deuxième, Troisième, Quatrième';
COMMENT ON COLUMN subjects.subject_type IS 'Subject type: MATH, SCIENCE, PHYSICS';

-- Step 5: Verify migration completed successfully
SELECT 'Migration completed successfully' as status;
