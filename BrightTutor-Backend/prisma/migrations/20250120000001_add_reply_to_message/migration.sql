-- Add reply_to_message_id column to community_messages table
-- Allows students to reply to specific messages (like WhatsApp)

-- Add column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'community_messages' 
        AND column_name = 'reply_to_message_id'
    ) THEN
        ALTER TABLE "community_messages" 
        ADD COLUMN "reply_to_message_id" TEXT;
    END IF;
END $$;

-- Add index for faster lookups of replies
CREATE INDEX IF NOT EXISTS "community_messages_reply_to_message_id_idx" 
ON "community_messages"("reply_to_message_id");

