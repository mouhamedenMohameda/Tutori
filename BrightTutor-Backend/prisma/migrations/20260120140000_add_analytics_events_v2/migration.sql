-- CreateTable
CREATE TABLE "analytics_events_v2" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "event_type" TEXT NOT NULL,
    "event_version" TEXT NOT NULL DEFAULT '2.0',
    "occurred_at" TIMESTAMP(3) NOT NULL,
    "received_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "country" TEXT,
    "language_pref" TEXT,
    "session_id" TEXT NOT NULL,
    "session_started_at" TIMESTAMP(3) NOT NULL,
    "request_id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "ip_hash" TEXT,
    "device_id_hash" TEXT,
    "env" TEXT NOT NULL,
    "app_version" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "envelope" JSONB NOT NULL,

    CONSTRAINT "analytics_events_v2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "analytics_events_v2_event_id_key" ON "analytics_events_v2"("event_id");

-- CreateIndex
CREATE INDEX "analytics_events_v2_user_id_occurred_at_idx" ON "analytics_events_v2"("user_id", "occurred_at");

-- CreateIndex
CREATE INDEX "analytics_events_v2_session_id_occurred_at_idx" ON "analytics_events_v2"("session_id", "occurred_at");

-- CreateIndex
CREATE INDEX "analytics_events_v2_event_type_occurred_at_idx" ON "analytics_events_v2"("event_type", "occurred_at");

-- CreateIndex
CREATE INDEX "analytics_events_v2_request_id_idx" ON "analytics_events_v2"("request_id");

-- CreateIndex
CREATE INDEX "analytics_events_v2_occurred_at_idx" ON "analytics_events_v2"("occurred_at");
