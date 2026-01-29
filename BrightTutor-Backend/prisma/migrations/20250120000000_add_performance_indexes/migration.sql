-- Migration: Add Performance Indexes for Load Testing Optimization
-- Date: 2025-01-20
-- Purpose: Add indexes on frequently queried columns to improve performance under load

-- Indexes for Student table (most queried table)
CREATE INDEX IF NOT EXISTS "idx_students_school_id" ON "students"("school_id");
CREATE INDEX IF NOT EXISTS "idx_students_class_id" ON "students"("class_id");
CREATE INDEX IF NOT EXISTS "idx_students_username" ON "students"("username") WHERE "username" IS NOT NULL;
CREATE INDEX IF NOT EXISTS "idx_students_is_active" ON "students"("is_active");
CREATE INDEX IF NOT EXISTS "idx_students_school_active" ON "students"("school_id", "is_active");

-- Indexes for Class table
CREATE INDEX IF NOT EXISTS "idx_classes_school_id" ON "classes"("school_id");
CREATE INDEX IF NOT EXISTS "idx_classes_teacher_id" ON "classes"("teacher_id") WHERE "teacher_id" IS NOT NULL;

-- Indexes for Assignment table (frequently queried with filters)
CREATE INDEX IF NOT EXISTS "idx_assignments_school_id" ON "assignments"("school_id");
CREATE INDEX IF NOT EXISTS "idx_assignments_class_id" ON "assignments"("class_id");
CREATE INDEX IF NOT EXISTS "idx_assignments_teacher_id" ON "assignments"("teacher_id");
CREATE INDEX IF NOT EXISTS "idx_assignments_status" ON "assignments"("status");
CREATE INDEX IF NOT EXISTS "idx_assignments_due_date" ON "assignments"("due_date");
CREATE INDEX IF NOT EXISTS "idx_assignments_school_status" ON "assignments"("school_id", "status");

-- Indexes for AssignmentProgress table
CREATE INDEX IF NOT EXISTS "idx_assignment_progress_student_id" ON "assignment_progress"("student_id");
CREATE INDEX IF NOT EXISTS "idx_assignment_progress_assignment_id" ON "assignment_progress"("assignment_id");
CREATE INDEX IF NOT EXISTS "idx_assignment_progress_status" ON "assignment_progress"("status");

-- Indexes for Teacher table
CREATE INDEX IF NOT EXISTS "idx_teachers_school_id" ON "teachers"("school_id");
CREATE INDEX IF NOT EXISTS "idx_teachers_email" ON "teachers"("teacher_email");

-- Indexes for AIConversation table (frequently queried for chat history)
CREATE INDEX IF NOT EXISTS "idx_ai_conversations_student_id" ON "ai_conversations"("student_id");
CREATE INDEX IF NOT EXISTS "idx_ai_conversations_timestamp" ON "ai_conversations"("timestamp");
CREATE INDEX IF NOT EXISTS "idx_ai_conversations_student_timestamp" ON "ai_conversations"("student_id", "timestamp");

-- Indexes for MonthlyReport table
CREATE INDEX IF NOT EXISTS "idx_monthly_reports_student_id" ON "monthly_reports"("student_id");
CREATE INDEX IF NOT EXISTS "idx_monthly_reports_month_year" ON "monthly_reports"("student_id", "month", "year");

-- Indexes for StudentEngagement table
CREATE INDEX IF NOT EXISTS "idx_student_engagement_student_id" ON "student_engagement"("student_id");
CREATE INDEX IF NOT EXISTS "idx_student_engagement_date" ON "student_engagement"("date");
CREATE INDEX IF NOT EXISTS "idx_student_engagement_student_date" ON "student_engagement"("student_id", "date");

-- Indexes for QuizSession table
CREATE INDEX IF NOT EXISTS "idx_quiz_sessions_student_id" ON "quiz_sessions"("student_id");
CREATE INDEX IF NOT EXISTS "idx_quiz_sessions_start_time" ON "quiz_sessions"("start_time");

-- Indexes for StudentAIContext table
CREATE INDEX IF NOT EXISTS "idx_student_ai_contexts_school_id" ON "student_ai_contexts"("school_id");
CREATE INDEX IF NOT EXISTS "idx_student_ai_contexts_assignment_id" ON "student_ai_contexts"("assignment_id") WHERE "assignment_id" IS NOT NULL;

-- Indexes for SchoolAdmin table
CREATE INDEX IF NOT EXISTS "idx_school_admins_school_id" ON "school_admins"("school_id");
CREATE INDEX IF NOT EXISTS "idx_school_admins_email" ON "school_admins"("email");

-- Composite index for common query pattern: find students by school and class
CREATE INDEX IF NOT EXISTS "idx_students_school_class" ON "students"("school_id", "class_id") WHERE "class_id" IS NOT NULL;

-- Composite index for common query pattern: find assignments by school, class, and status
CREATE INDEX IF NOT EXISTS "idx_assignments_school_class_status" ON "assignments"("school_id", "class_id", "status");
