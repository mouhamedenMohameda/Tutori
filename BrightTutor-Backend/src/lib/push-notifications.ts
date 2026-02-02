/**
 * Push Notification Utilities
 * Handles sending push notifications via Expo Push Notification Service
 */

import { getDataSource } from '@/config/data-source'
import { StudentPushToken, Student } from '@/entities'
import { Not, In } from 'typeorm'

const EXPO_PUSH_API_URL = 'https://exp.host/--/api/v2/push/send'

export interface PushNotificationPayload {
  to: string // Expo push token
  sound?: 'default' | null
  title: string
  body: string
  data?: any
  badge?: number
  priority?: 'default' | 'normal' | 'high'
  channelId?: string
}

/**
 * Send a push notification via Expo Push Notification Service
 */
export async function sendExpoPushNotification(
  payload: PushNotificationPayload
): Promise<{ success: boolean; error?: string }> {
  try {
    // Ensure sound is always set to 'default' for WhatsApp-like behavior
    const notificationPayload = {
      ...payload,
      sound: payload.sound || 'default', // Always use default sound if not specified
    }

    console.log('📤 Sending Expo push notification:', {
      to: notificationPayload.to.substring(0, 20) + '...',
      title: notificationPayload.title,
      body: notificationPayload.body,
      sound: notificationPayload.sound,
      priority: notificationPayload.priority,
      channelId: notificationPayload.channelId,
    })

    const response = await fetch(EXPO_PUSH_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notificationPayload),
    })

    const result = await response.json()

    // ✅ FIX: Expo Push API returns { data: [ { status: 'ok', id: '...' } ] }
    // result.data is an ARRAY, not an object!
    console.log('📨 Expo Push API response:', JSON.stringify(result, null, 2))
    
    // Check if it's an array (normal response) or object (error response)
    if (Array.isArray(result.data)) {
      // Normal response - check first item's status
      const firstResult = result.data[0]
      if (firstResult?.status === 'ok') {
        console.log('✅ Expo push notification sent successfully, id:', firstResult.id)
        return { success: true }
      } else if (firstResult?.status === 'error') {
        const error = firstResult.message || firstResult.details?.error || 'Push failed'
        console.error('❌ Expo push notification failed:', error, firstResult)
        return { success: false, error }
      }
    }
    
    // Fallback for unexpected response format
    const error = result.data?.message || result.message || 'Unknown response format'
    console.error('❌ Unexpected Expo push response:', error, result)
    return { success: false, error }
  } catch (error: any) {
    console.error('❌ Error sending Expo push notification:', error)
    return { success: false, error: error.message || 'Network error' }
  }
}

/**
 * Send push notification to a single student
 */
export async function sendNotificationToStudent(
  studentId: string,
  title: string,
  body: string,
  data?: any
): Promise<{ success: boolean; sent: number; errors: number }> {
  try {
    const ds = await getDataSource()
    const tokens = await ds.getRepository(StudentPushToken).find({
      where: { studentId, isActive: true },
    })

    if (tokens.length === 0) {
      console.log(`⚠️ No active push tokens found for student ${studentId}`)
      return { success: false, sent: 0, errors: 0 }
    }

    let sent = 0
    let errors = 0

    // Send notification to all devices
    for (const token of tokens) {
      // Determine Android channel based on notification type
      const notificationType = data?.type || 'default'
      let channelId = 'default' // Default channel
      
      if (notificationType === 'community_message') {
        channelId = 'community-messages'
      } else if (notificationType === 'daily_reminder' || notificationType === 'inactive_reminder') {
        channelId = 'reminders'
      }

      const result = await sendExpoPushNotification({
        to: token.expoPushToken,
        sound: 'default', // Default system sound (like WhatsApp)
        title,
        body,
        data: data || {},
        priority: 'high', // High priority ensures delivery even when app is closed
        badge: 1, // Show badge count on app icon
        channelId, // Android notification channel for proper grouping and sound
      })

      if (result.success) {
        sent++
      } else {
        errors++
        // If token is invalid, mark it as inactive
        if (result.error?.includes('Invalid') || result.error?.includes('DeviceNotRegistered')) {
          await ds.getRepository(StudentPushToken).update(token.id, { isActive: false })
        }
      }
    }
    return { success: sent > 0, sent, errors }
  } catch (error: unknown) {
    console.error('❌ Error sending notification to student:', error)
    return { success: false, sent: 0, errors: 1 }
  }
}

/**
 * Send daily reminder notification to a student
 * Personalizes message with student name
 */
export async function sendDailyReminderNotification(
  studentId: string,
  studentName: string
): Promise<{ success: boolean; sent: number; errors: number }> {
  // Duolingo-style personalized messages
  // Rotate messages to keep them fresh and engaging
  const messages = [
    `Hi ${studentName}! Continue your Tutori journey today! 🚀`,
    `Hey ${studentName}! Ready to learn something new today? 📚`,
    `Hi ${studentName}! Your learning adventure continues today! ✨`,
    `Hello ${studentName}! Time to unlock new knowledge! 🎯`,
    `Hi ${studentName}! Don't forget to practice today! 💪`,
    `Hey ${studentName}! Your daily learning session awaits! 🌟`,
    `Hi ${studentName}! Keep your learning streak going! 🔥`,
  ]

  // Rotate messages based on day of week for variety
  const dayOfWeek = new Date().getDay()
  const message = messages[dayOfWeek % messages.length]

  const ds = await getDataSource()
  const tokens = await ds.getRepository(StudentPushToken).find({ where: { studentId, isActive: true } })
  if (tokens.length === 0) {
    console.log(`⚠️ No active push tokens found for student ${studentId}`)
    return { success: false, sent: 0, errors: 0 }
  }
  let sent = 0
  let errors = 0
  for (const token of tokens) {
    const result = await sendExpoPushNotification({
      to: token.expoPushToken,
      sound: 'default',
      title: 'Tutori Daily Reminder',
      body: message,
      data: { type: 'daily_reminder', studentId, timestamp: new Date().toISOString() },
      priority: 'high',
      badge: 1,
      channelId: 'reminders',
    })
    if (result.success) sent++
    else {
      errors++
      if (result.error?.includes('Invalid') || result.error?.includes('DeviceNotRegistered')) {
        await ds.getRepository(StudentPushToken).update(token.id, { isActive: false })
      }
    }
  }
  return { success: sent > 0, sent, errors }
}

/**
 * Send 10-hour inactive reminder notification (Duolingo-style)
 * Sends to students who haven't opened the app for 10+ hours
 * Message format: "[Student Name] Frr 2nte me4alk.. Yak magab4tk l7m 😄?"
 */
export async function sendInactiveReminderNotification(
  studentId: string,
  studentName: string
): Promise<{ success: boolean; sent: number; errors: number }> {
  // Duolingo-style message in Moroccan Arabic (Darija) written in Latin script
  const message = `${studentName} Frr 2nte me4alk.. Yak magab4tk l7m 😄?`

  const ds = await getDataSource()
  const tokens = await ds.getRepository(StudentPushToken).find({ where: { studentId, isActive: true } })
  if (tokens.length === 0) {
    console.log(`⚠️ No active push tokens found for student ${studentId}`)
    return { success: false, sent: 0, errors: 0 }
  }
  let sent = 0
  let errors = 0
  for (const token of tokens) {
    const result = await sendExpoPushNotification({
      to: token.expoPushToken,
      sound: 'default',
      title: 'Tutori',
      body: message,
      data: { type: 'inactive_reminder', studentId, timestamp: new Date().toISOString() },
      priority: 'high',
      badge: 1,
      channelId: 'reminders',
    })
    if (result.success) sent++
    else {
      errors++
      if (result.error?.includes('Invalid') || result.error?.includes('DeviceNotRegistered')) {
        await ds.getRepository(StudentPushToken).update(token.id, { isActive: false })
      }
    }
  }
  return { success: sent > 0, sent, errors }
}

/**
 * Send notifications to multiple students (for batch operations)
 */
export async function sendNotificationsToStudents(
  studentIds: string[],
  title: string,
  body: string,
  data?: any
): Promise<{ totalSent: number; totalErrors: number }> {
  let totalSent = 0
  let totalErrors = 0

  for (const studentId of studentIds) {
    const result = await sendNotificationToStudent(studentId, title, body, data)
    totalSent += result.sent
    totalErrors += result.errors
  }

  return { totalSent, totalErrors }
}

/**
 * Send community message notification to all students in a classroomYear (except sender)
 * Like WhatsApp group notifications - plays sound and shows message preview
 */
export async function sendCommunityMessageNotification(
  classroomYear: string,
  senderStudentId: string,
  senderName: string,
  message: string,
  messageType: string = 'TEXT'
): Promise<{ totalSent: number; totalErrors: number }> {
  try {
    console.log(
      `📬 Preparing to send community message notifications (sender: ${senderStudentId} will be excluded)`
    )
    const ds = await getDataSource()
    const studentRepo = ds.getRepository(Student)
    const students = await studentRepo.find({
      where: { class: { classroomYear }, id: Not(senderStudentId) },
      select: ['id', 'lastViewedCommunityAt'],
      relations: ['class'],
    })

    if (students.length === 0) {
      console.log(`ℹ️ No other students in ${classroomYear} to notify`)
      return { totalSent: 0, totalErrors: 0 }
    }

    // Filter out students who are actively viewing the community chat
    // If they viewed within the last 60 seconds, they're likely still in the chat
    const now = new Date()
    const activeViewThreshold = 60 * 1000 // 60 seconds in milliseconds
    const studentsToNotify = students.filter((student: { id: string; lastViewedCommunityAt: Date | null }) => {
      if (!student.lastViewedCommunityAt) {
        return true // Never viewed, send notification
      }
      const timeSinceLastView = now.getTime() - student.lastViewedCommunityAt.getTime()
      const isActivelyViewing = timeSinceLastView < activeViewThreshold
      
      if (isActivelyViewing) {
        console.log(
          `⏭️ Skipping notification for student ${student.id} - actively viewing chat (viewed ${Math.round(timeSinceLastView / 1000)}s ago)`
        )
      }
      return !isActivelyViewing // Only notify if NOT actively viewing
    })

    if (studentsToNotify.length === 0) {
      console.log(`ℹ️ All students in ${classroomYear} are actively viewing the chat - no notifications needed`)
      return { totalSent: 0, totalErrors: 0 }
    }

    const studentIdsToNotify = studentsToNotify.map((s: { id: string }) => s.id)
    const filteredStudentIds = studentIdsToNotify.filter((id: string) => id !== senderStudentId)
    
    if (filteredStudentIds.length !== studentIdsToNotify.length) {
      console.log(`⚠️ Removed sender ${senderStudentId} from notification list (safety check)`)
    }
    
    console.log(
      `📬 Will notify ${filteredStudentIds.length} out of ${students.length} students (${students.length - filteredStudentIds.length} are actively viewing or are the sender)`
    )

    if (filteredStudentIds.length === 0) {
      console.log(`ℹ️ No students to notify after filtering (sender excluded, others are actively viewing)`)
      return { totalSent: 0, totalErrors: 0 }
    }

    const tokens = await ds.getRepository(StudentPushToken).find({
      where: { studentId: In(filteredStudentIds), isActive: true },
      order: { updatedAt: 'DESC' },
    })

    if (tokens.length === 0) {
      console.log(`⚠️ No active push tokens found for students in ${classroomYear}`)
      return { totalSent: 0, totalErrors: 0 }
    }

    // Group tokens by studentId to track per-student notifications
    // Final safety check: Filter out any tokens that belong to the sender
    const tokensByStudent = new Map<string, import('@/entities').StudentPushToken[]>()
    for (const token of tokens) {
      // Final safety check: Skip sender's tokens
      if (token.studentId === senderStudentId) {
        console.log(`⚠️ Skipping token for sender ${senderStudentId} (final safety check)`)
        continue
      }
      
      if (!tokensByStudent.has(token.studentId)) {
        tokensByStudent.set(token.studentId, [])
      }
      tokensByStudent.get(token.studentId)!.push(token)
    }

    console.log(
      `📱 Found ${tokens.length} tokens for ${tokensByStudent.size} students (avg ${(tokens.length / tokensByStudent.size).toFixed(1)} devices per student)`
    )

    // Format message preview (truncate if too long)
    const messagePreview = message.length > 100 ? message.substring(0, 100) + '...' : message
    const displayName = senderName || 'Someone'
    
    // Create notification title and body (WhatsApp-style)
    // Format: "Tutori" as title, "Student Name: Message content" as body
    const title = 'Tutori'
    const body = messageType === 'IMAGE' 
      ? `${displayName}: 📷 Image` 
      : messageType === 'VOICE' 
      ? `${displayName}: 🎤 Voice message` 
      : `${displayName}: ${messagePreview}`

    let totalSent = 0
    let totalErrors = 0
    const notifiedStudents = new Set<string>() // Track which students received notifications

    // Send ONE notification per student (to their most recent device)
    // This prevents duplicate notifications if a student has multiple devices
    const studentIds = Array.from(tokensByStudent.keys())
    for (const studentId of studentIds) {
      // CRITICAL: Never send notification to the sender
      if (studentId === senderStudentId) {
        console.log(`🚫 BLOCKED: Attempted to send notification to sender ${senderStudentId} - this should never happen!`)
        continue
      }
      
      const studentTokens = tokensByStudent.get(studentId)
      if (!studentTokens || studentTokens.length === 0) {
        continue
      }
      
      // Use the most recently updated token (likely the primary/active device)
      const primaryToken = studentTokens[0]
      
      // Skip if we already notified this student (safety check)
      if (notifiedStudents.has(studentId)) {
        console.log(`⚠️ Skipping duplicate notification for student ${studentId}`)
        continue
      }

      const notificationPayload = {
        to: primaryToken.expoPushToken,
        sound: 'default' as const, // Default system sound (like WhatsApp) - must be 'default' not null
        title,
        body,
        data: {
          type: 'community_message',
          classroomYear,
          senderStudentId,
          senderName,
          message,
          messageType,
          timestamp: new Date().toISOString(),
          screen: 'Community', // Navigate to Community screen when tapped
        },
        priority: 'high' as const, // High priority ensures delivery even when app is closed
        badge: 1, // Show badge count on app icon
        channelId: 'community-messages', // Android notification channel for grouping
      }

      console.log(`📤 Sending notification to student ${studentId} (${primaryToken.platform} device):`, {
        title,
        body,
        sound: notificationPayload.sound,
        priority: notificationPayload.priority,
        deviceCount: studentTokens.length, // Log how many devices this student has
      })

      const result = await sendExpoPushNotification(notificationPayload)
      
      // Mark this student as notified
      notifiedStudents.add(studentId)

      if (result.success) {
        totalSent++
      } else {
        totalErrors++
        // If token is invalid, mark it as inactive
        if (result.error?.includes('Invalid') || result.error?.includes('DeviceNotRegistered')) {
          await ds.getRepository(StudentPushToken).update(primaryToken.id, { isActive: false })
        }
      }
    }

    console.log(
      `📬 Community message notification sent: ${totalSent} delivered, ${totalErrors} failed (${classroomYear})`
    )

    return { totalSent, totalErrors }
  } catch (error: any) {
    console.error('❌ Error sending community message notifications:', error)
    return { totalSent: 0, totalErrors: 1 }
  }
}

