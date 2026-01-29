// Security Event Logging
// Logs security-related events for monitoring and auditing

interface SecurityEvent {
  type: 'AUTH_SUCCESS' | 'AUTH_FAILURE' | 'AUTH_ATTEMPT' | 'INJECTION_ATTEMPT' | 'UNAUTHORIZED_ACCESS' | 'RATE_LIMIT_EXCEEDED' | 'FILE_ACCESS' | 'DATA_ACCESS'
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  message: string
  userId?: string
  ip?: string
  userAgent?: string
  details?: Record<string, any>
  timestamp: Date
}

class SecurityLogger {
  private events: SecurityEvent[] = []
  private maxEvents = 1000 // Keep last 1000 events in memory

  /**
   * Log a security event
   */
  log(event: Omit<SecurityEvent, 'timestamp'>): void {
    const fullEvent: SecurityEvent = {
      ...event,
      timestamp: new Date()
    }
    
    this.events.push(fullEvent)
    
    // Keep only last maxEvents
    if (this.events.length > this.maxEvents) {
      this.events.shift()
    }
    
    // Log to console based on severity
    const logLevel = this.getLogLevel(fullEvent.severity)
    const logMessage = `[SECURITY ${fullEvent.severity}] ${fullEvent.type}: ${fullEvent.message}`
    
    if (logLevel === 'error') {
      console.error(logMessage, fullEvent.details || '')
    } else if (logLevel === 'warn') {
      console.warn(logMessage, fullEvent.details || '')
    } else {
      console.log(logMessage, fullEvent.details || '')
    }
  }

  /**
   * Get log level based on severity
   */
  private getLogLevel(severity: SecurityEvent['severity']): 'log' | 'warn' | 'error' {
    switch (severity) {
      case 'CRITICAL':
      case 'HIGH':
        return 'error'
      case 'MEDIUM':
        return 'warn'
      default:
        return 'log'
    }
  }

  /**
   * Log authentication success
   */
  logAuthSuccess(userId: string, role: string, ip?: string): void {
    this.log({
      type: 'AUTH_SUCCESS',
      severity: 'LOW',
      message: `User ${userId} (${role}) authenticated successfully`,
      userId,
      ip
    })
  }

  /**
   * Log authentication failure
   */
  logAuthFailure(identifier: string, reason: string, ip?: string): void {
    this.log({
      type: 'AUTH_FAILURE',
      severity: 'MEDIUM',
      message: `Authentication failed for ${identifier}: ${reason}`,
      ip,
      details: { identifier, reason }
    })
  }

  /**
   * Log injection attempt
   */
  logInjectionAttempt(
    type: 'SQL' | 'NoSQL' | 'COMMAND' | 'PATH_TRAVERSAL',
    input: string,
    userId?: string,
    ip?: string
  ): void {
    this.log({
      type: 'INJECTION_ATTEMPT',
      severity: 'HIGH',
      message: `${type} injection attempt detected`,
      userId,
      ip,
      details: {
        injectionType: type,
        input: input.substring(0, 100) // Log first 100 chars only
      }
    })
  }

  /**
   * Log unauthorized access attempt
   */
  logUnauthorizedAccess(
    userId: string,
    resource: string,
    ip?: string
  ): void {
    this.log({
      type: 'UNAUTHORIZED_ACCESS',
      severity: 'HIGH',
      message: `User ${userId} attempted unauthorized access to ${resource}`,
      userId,
      ip,
      details: { resource }
    })
  }

  /**
   * Log rate limit exceeded
   */
  logRateLimitExceeded(
    endpoint: string,
    ip?: string,
    userId?: string
  ): void {
    this.log({
      type: 'RATE_LIMIT_EXCEEDED',
      severity: 'MEDIUM',
      message: `Rate limit exceeded for ${endpoint}`,
      userId,
      ip,
      details: { endpoint }
    })
  }

  /**
   * Log file access
   */
  logFileAccess(
    filename: string,
    operation: 'READ' | 'WRITE' | 'DELETE',
    userId: string,
    success: boolean
  ): void {
    this.log({
      type: 'FILE_ACCESS',
      severity: success ? 'LOW' : 'MEDIUM',
      message: `File ${operation.toLowerCase()} ${success ? 'succeeded' : 'failed'}: ${filename}`,
      userId,
      details: { filename, operation, success }
    })
  }

  /**
   * Get recent security events
   */
  getRecentEvents(limit: number = 100): SecurityEvent[] {
    return this.events.slice(-limit).reverse()
  }

  /**
   * Get events by type
   */
  getEventsByType(type: SecurityEvent['type']): SecurityEvent[] {
    return this.events.filter(e => e.type === type)
  }

  /**
   * Get events by severity
   */
  getEventsBySeverity(severity: SecurityEvent['severity']): SecurityEvent[] {
    return this.events.filter(e => e.severity === severity)
  }

  /**
   * Clear all events (use with caution)
   */
  clear(): void {
    this.events = []
  }
}

// Export singleton instance
export const securityLogger = new SecurityLogger()

// Export types
export type { SecurityEvent }

