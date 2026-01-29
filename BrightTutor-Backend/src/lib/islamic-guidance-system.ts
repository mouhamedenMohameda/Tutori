// ISLAMIC GUIDANCE SYSTEM
// Provides appropriate Islamic guidance when needed

export interface IslamicGuidance {
  type: 'language' | 'behavior' | 'encouragement' | 'patience'
  message: string
  hadith?: string
  arabic?: string
  context: string
}

export class IslamicGuidanceSystem {
  private static instance: IslamicGuidanceSystem

  static getInstance(): IslamicGuidanceSystem {
    if (!IslamicGuidanceSystem.instance) {
      IslamicGuidanceSystem.instance = new IslamicGuidanceSystem()
    }
    return IslamicGuidanceSystem.instance
  }

  // Check if Islamic guidance is needed
  needsGuidance(message: string, context: string): boolean {
    const badLanguageIndicators = [
      'bad word', 'curse', 'swear', 'damn', 'hell', 'shit', 'fuck', 'bitch',
      'كلمة سيئة', 'شتيمة', 'سب', 'لعنة',
      'mauvais mot', 'insulte', 'juron', 'malédiction'
    ]

    const negativeBehaviorIndicators = [
      'hate', 'angry', 'stupid', 'idiot', 'dumb', 'worthless',
      'كره', 'غضب', 'غبي', 'أحمق', 'بلا قيمة',
      'haine', 'colère', 'stupide', 'idiot', 'sans valeur'
    ]

    const strugglingIndicators = [
      'can\'t do it', 'give up', 'too hard', 'impossible',
      'لا أستطيع', 'أستسلم', 'صعب جدا', 'مستحيل',
      'je ne peux pas', 'j\'abandonne', 'trop dur', 'impossible'
    ]

    const messageLower = message.toLowerCase()
    
    return badLanguageIndicators.some(indicator => messageLower.includes(indicator)) ||
           negativeBehaviorIndicators.some(indicator => messageLower.includes(indicator)) ||
           strugglingIndicators.some(indicator => messageLower.includes(indicator))
  }

  // Get appropriate Islamic guidance
  getGuidance(message: string, context: string): IslamicGuidance | null {
    if (!this.needsGuidance(message, context)) {
      return null
    }

    const messageLower = message.toLowerCase()

    // Bad language guidance
    if (this.containsBadLanguage(messageLower)) {
      return {
        type: 'language',
        message: "As Muslims, we should speak kindly and respectfully. The Prophet ﷺ said: 'من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت' - Let whoever believes in Allah speak good or stay quiet.",
        hadith: "من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت",
        arabic: "من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت",
        context: "Language guidance"
      }
    }

    // Negative behavior guidance
    if (this.containsNegativeBehavior(messageLower)) {
      return {
        type: 'behavior',
        message: "Remember, Allah loves those who are patient and kind. When we feel frustrated, we should seek Allah's help and remember that every difficulty is a test that makes us stronger.",
        hadith: "إن مع العسر يسرا",
        arabic: "إن مع العسر يسرا",
        context: "Behavior guidance"
      }
    }

    // Struggling encouragement
    if (this.containsStruggling(messageLower)) {
      return {
        type: 'encouragement',
        message: "Don't give up! The Prophet ﷺ taught us that Allah helps those who are patient and persistent. Every step forward, no matter how small, is progress. Let's break this down together.",
        hadith: "إن الله يحب إذا عمل أحدكم عملاً أن يتقنه",
        arabic: "إن الله يحب إذا عمل أحدكم عملاً أن يتقنه",
        context: "Encouragement"
      }
    }

    return null
  }

  // Check for bad language
  private containsBadLanguage(message: string): boolean {
    const badWords = [
      'bad word', 'curse', 'swear', 'damn', 'hell', 'shit', 'fuck', 'bitch',
      'كلمة سيئة', 'شتيمة', 'سب', 'لعنة',
      'mauvais mot', 'insulte', 'juron', 'malédiction'
    ]
    
    return badWords.some(word => message.includes(word))
  }

  // Check for negative behavior
  private containsNegativeBehavior(message: string): boolean {
    const negativeWords = [
      'hate', 'angry', 'stupid', 'idiot', 'dumb', 'worthless',
      'كره', 'غضب', 'غبي', 'أحمق', 'بلا قيمة',
      'haine', 'colère', 'stupide', 'idiot', 'sans valeur'
    ]
    
    return negativeWords.some(word => message.includes(word))
  }

  // Check for struggling indicators
  private containsStruggling(message: string): boolean {
    const strugglingWords = [
      'can\'t do it', 'give up', 'too hard', 'impossible',
      'لا أستطيع', 'أستسلم', 'صعب جدا', 'مستحيل',
      'je ne peux pas', 'j\'abandonne', 'trop dur', 'impossible'
    ]
    
    return strugglingWords.some(word => message.includes(word))
  }

  // Get positive Islamic encouragement
  getPositiveEncouragement(context: string): string {
    const encouragements = [
      "Masha'Allah! You're doing great. Remember, Allah helps those who try their best.",
      "Alhamdulillah for your effort! Every step forward is a blessing.",
      "Keep going! The Prophet ﷺ taught us that the best deeds are those done consistently, even if small.",
      "You're making progress! Allah loves those who are patient and persistent.",
      "Well done! Remember, seeking knowledge is a form of worship in Islam."
    ]

    // Return context-appropriate encouragement
    if (context.includes('quiz') || context.includes('test')) {
      return "Masha'Allah! You're showing great understanding. Remember, seeking knowledge is a form of worship in Islam."
    }
    
    if (context.includes('homework') || context.includes('assignment')) {
      return "Alhamdulillah for your dedication! The Prophet ﷺ taught us that the best deeds are those done consistently, even if small."
    }

    return encouragements[Math.floor(Math.random() * encouragements.length)]
  }

  // Get Islamic study motivation
  getStudyMotivation(): string {
    const motivations = [
      "Remember, seeking knowledge is a form of worship in Islam. Every time you learn, you're earning Allah's pleasure.",
      "The Prophet ﷺ said: 'Seek knowledge from the cradle to the grave.' You're following his guidance!",
      "Allah loves those who are patient and persistent. Your efforts in learning are a beautiful form of worship.",
      "Every subject you study helps you understand Allah's creation better. What a beautiful way to worship!",
      "The Prophet ﷺ taught us that the best deeds are those done consistently. Your daily learning is a great example."
    ]

    return motivations[Math.floor(Math.random() * motivations.length)]
  }

  // Check if message needs Islamic context
  needsIslamicContext(message: string): boolean {
    const islamicKeywords = [
      'allah', 'god', 'prayer', 'salah', 'ramadan', 'hajj', 'halal', 'haram',
      'الله', 'صلاة', 'رمضان', 'حج', 'حلال', 'حرام',
      'allah', 'prière', 'ramadan', 'hajj', 'halal', 'haram'
    ]

    const messageLower = message.toLowerCase()
    return islamicKeywords.some(keyword => messageLower.includes(keyword))
  }

  // Get appropriate Islamic response
  getIslamicResponse(message: string, context: string): string {
    if (this.needsIslamicContext(message)) {
      return "That's a great question about Islamic topics! While I'm here to help with your studies, for specific Islamic rulings and religious guidance, it's best to ask your local imam or religious teacher. They can provide the most accurate and appropriate guidance for your situation."
    }

    return ""
  }
} 