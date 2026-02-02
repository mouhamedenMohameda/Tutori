/**
 * Event Logger v2 - Enregistrement des événements v2
 * 
 * Système de logging structuré pour analytics, audit et tracking de coûts
 */

import { EventEnvelope, validateEvent, ValidationError, EventContext } from './event-schema-v2';
import { getDataSource } from '@/config/data-source';
import { v4 as uuidv4 } from 'uuid';

// ==========================================
// STORAGE OPTIONS
// ==========================================

export interface EventStorageOptions {
  // Stocker dans DB (table dédiée) ou fichier/stream
  storageType: 'database' | 'file' | 'stream';
  
  // Pour database: table name
  tableName?: string;
  
  // Pour file: path
  filePath?: string;
  
  // Batch size pour insertion groupée
  batchSize?: number;
  
  // Retry policy
  maxRetries?: number;
}

// ==========================================
// EVENT LOGGER
// ==========================================

export class EventLoggerV2 {
  private batch: EventEnvelope[] = [];
  private batchSize: number;
  private maxRetries: number;
  
  constructor(options: EventStorageOptions = { storageType: 'database', batchSize: 50, maxRetries: 3 }) {
    this.batchSize = options.batchSize || 50;
    this.maxRetries = options.maxRetries || 3;
  }
  
  /**
   * Enregistre un événement (avec validation et batching)
   */
  async log(event: EventEnvelope): Promise<{ success: boolean; errors?: ValidationError[] }> {
    // 1. Validation
    const errors = validateEvent(event);
    if (errors.length > 0) {
      console.error('❌ Event validation failed:', errors);
      return { success: false, errors };
    }
    
    // 2. Ajouter au batch
    this.batch.push(event);
    
    // 3. Flush si batch plein
    if (this.batch.length >= this.batchSize) {
      await this.flush();
    }
    
    return { success: true };
  }
  
  /**
   * Force l'écriture du batch
   */
  async flush(): Promise<void> {
    if (this.batch.length === 0) return;
    
    const eventsToFlush = [...this.batch];
    this.batch = [];
    
    try {
      // Pour l'instant: stocker dans une table JSONB PostgreSQL
      // TODO: Créer migration pour table analytics_events_v2
      await this.storeEvents(eventsToFlush);
      console.log(`✅ Flushed ${eventsToFlush.length} events to storage`);
    } catch (error) {
      console.error('❌ Error flushing events:', error);
      // Re-add to batch for retry (up to maxRetries)
      // Pour l'instant, on log juste l'erreur
    }
  }
  
  /**
   * Stocke les événements dans la base de données
   */
  private async storeEvents(events: EventEnvelope[]): Promise<void> {
    try {
      const ds = await getDataSource();
      for (const event of events) {
        const id = uuidv4();
        await ds.query(
          `INSERT INTO analytics_events_v2 (id, event_id, event_type, event_version, occurred_at, received_at, user_id, role, country, language_pref, session_id, session_started_at, request_id, source, ip_hash, device_id_hash, env, app_version, platform, payload, envelope)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
           ON CONFLICT (event_id) DO NOTHING`,
          [
            id,
            event.eventId,
            event.eventType,
            event.eventVersion || '2.0',
            new Date(event.occurredAt),
            new Date(event.receivedAt),
            event.actor.userId,
            event.actor.role,
            event.actor.country || null,
            event.actor.languagePref || null,
            event.session.sessionId,
            new Date(event.session.startedAt),
            event.context.requestId,
            event.context.source,
            event.context.ipHash || null,
            event.context.deviceIdHash || null,
            event.env,
            event.app.appVersion,
            event.app.platform,
            JSON.stringify(event.payload),
            JSON.stringify(event),
          ]
        );
      }
      console.log(`✅ Stored ${events.length} events v2.0 in database`);
    } catch (error: unknown) {
      const err = error as { message?: string; code?: string };
      if (err.code === '42P01' || err.message?.includes('does not exist')) {
        console.warn('⚠️ AnalyticsEventV2 table not found, falling back to file storage');
        await this.storeEventsToFile(events);
      } else {
        throw error;
      }
    }
  }
  
  /**
   * Fallback: Stocke les événements dans un fichier (pour migration)
   * Only works in Node.js runtime, not Edge Runtime
   */
  private async storeEventsToFile(events: EventEnvelope[]): Promise<void> {
    if (process.env.ANALYTICS_EVENTS_FILE && typeof process.cwd === 'function') {
      try {
        const fs = await import('fs/promises');
        const path = await import('path');
        const filePath = path.join(process.cwd(), process.env.ANALYTICS_EVENTS_FILE);
        
        const content = events.map(e => JSON.stringify(e)).join('\n') + '\n';
        await fs.appendFile(filePath, content, 'utf-8');
        console.log(`📄 Stored ${events.length} events to file: ${filePath}`);
      } catch (error) {
        // Edge Runtime or fs not available - skip file storage
        console.warn('⚠️ File storage not available (Edge Runtime or fs unavailable)');
      }
    } else {
      console.warn('⚠️ No ANALYTICS_EVENTS_FILE env var set, events not persisted');
    }
  }
}

// Instance singleton
let loggerInstance: EventLoggerV2 | null = null;

export function getEventLogger(): EventLoggerV2 {
  if (!loggerInstance) {
    loggerInstance = new EventLoggerV2({
      storageType: 'database',
      batchSize: 50,
      maxRetries: 3
    });
  }
  return loggerInstance;
}

// ==========================================
// HELPER: Créer context depuis request
// ==========================================

export interface RequestContext {
  userId: string;
  role: 'student' | 'teacher' | 'parent' | 'admin' | 'platform_admin';
  sessionId?: string;
  requestId?: string;
  ip?: string;
  userAgent?: string;
  country?: string;
  languagePref?: 'fr' | 'ar';
}

/**
 * Crée un EventContext depuis une requête HTTP
 */
export function createEventContextFromRequest(
  request: RequestContext,
  sessionId?: string
): EventContext {
  const { hashText } = require('./event-schema-v2');
  
  // Générer sessionId si absent
  const finalSessionId = sessionId || `sess_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  
  // Générer requestId si absent
  const finalRequestId = request.requestId || `req_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  
  return {
    userId: request.userId,
    role: request.role,
    sessionId: finalSessionId,
    sessionStartedAt: new Date(), // TODO: Récupérer depuis session store
    requestId: finalRequestId,
    country: request.country || 'MR',
    languagePref: request.languagePref || 'fr',
    ipHash: request.ip ? hashText(request.ip) : undefined,
    deviceIdHash: request.userAgent ? hashText(request.userAgent) : undefined,
    source: 'api' // TODO: Détecter depuis headers
  };
}
