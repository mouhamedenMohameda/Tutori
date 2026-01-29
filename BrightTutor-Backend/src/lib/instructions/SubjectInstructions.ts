/**
 * Subject-Specific Instructions System
 * Provides tailored teaching approaches for Math, Science, and Physics
 * Each subject has its own methodology, conversation style, and progression
 */

export interface SubjectInstruction {
  approach: string;
  style: string;
  examples: string;
  progression: string;
  conversationStarters: string[];
  teachingMethodology: string;
  memoryFocus: string[];
  quizStyle: string;
}

export class SubjectInstructions {
  private static readonly SUBJECT_INSTRUCTIONS: Record<string, SubjectInstruction> = {
    math: {
      approach: "problem-solving",
      style: "step-by-step",
      examples: "real-world problems",
      progression: "formula → practice → mastery",
      conversationStarters: [
        "Let's solve this problem step by step...",
        "I'll show you the formula first, then we'll practice...",
        "This is a common math problem. Let me break it down...",
        "Ready to tackle this calculation? Here's how we approach it..."
      ],
      teachingMethodology: "Start with the formula or concept, provide a clear example, then guide through practice problems. Always show the step-by-step process. Use real-world examples when possible.",
      memoryFocus: ["formulas_mastered", "problem_types_solved", "calculation_methods", "common_mistakes"],
      quizStyle: "Problem-solving questions with step-by-step solutions. Focus on application of formulas and methods."
    },
    science: {
      approach: "experimental",
      style: "observation-based",
      examples: "natural phenomena",
      progression: "concept → experiment → understanding",
      conversationStarters: [
        "Let's explore this concept through an experiment...",
        "I'll show you how this works in nature...",
        "This is fascinating! Let me explain what's happening...",
        "Ready to discover something amazing? Let's investigate..."
      ],
      teachingMethodology: "Start with observation of natural phenomena, explain the scientific concept, then connect to real-world examples. Use experiments and visual aids when possible.",
      memoryFocus: ["experiments_done", "concepts_understood", "natural_phenomena", "scientific_methods"],
      quizStyle: "Conceptual questions about natural phenomena. Focus on understanding processes and cause-effect relationships."
    },
    physics: {
      approach: "formula-driven",
      style: "calculation-heavy",
      examples: "practical applications",
      progression: "theory → formula → practice",
      conversationStarters: [
        "Let's apply this formula to solve this problem...",
        "This physics concept is used in everyday life...",
        "I'll show you the theory first, then we'll calculate...",
        "Ready to see physics in action? Let's work through this..."
      ],
      teachingMethodology: "Start with the physical theory, introduce the formula, show practical applications, then guide through calculations. Always connect to real-world physics.",
      memoryFocus: ["formulas_mastered", "theories_understood", "calculations_done", "practical_applications"],
      quizStyle: "Formula-based questions with calculations. Focus on applying physics principles to solve problems."
    }
  };

  private static readonly YEAR_SUBJECTS: Record<number, string[]> = {
    1: ['math', 'science'],
    2: ['math', 'science', 'physics'],
    3: ['math', 'science', 'physics'],
    4: ['math', 'science', 'physics']
  };

  /**
   * Get subject-specific instructions for a given subject
   */
  static getInstructions(subject: string): SubjectInstruction {
    const normalizedSubject = subject.toLowerCase();
    
    if (normalizedSubject.includes('math') || normalizedSubject.includes('mathematics')) {
      return this.SUBJECT_INSTRUCTIONS.math;
    } else if (normalizedSubject.includes('science')) {
      return this.SUBJECT_INSTRUCTIONS.science;
    } else if (normalizedSubject.includes('physics')) {
      return this.SUBJECT_INSTRUCTIONS.physics;
    }
    
    // Default to math if subject not recognized
    console.warn(`Unknown subject: ${subject}, defaulting to math instructions`);
    return this.SUBJECT_INSTRUCTIONS.math;
  }

  /**
   * Get available subjects for a given year
   */
  static getAvailableSubjects(year: number): string[] {
    return this.YEAR_SUBJECTS[year] || this.YEAR_SUBJECTS[1];
  }

  /**
   * Check if a subject is available for a given year
   */
  static isSubjectAvailable(subject: string, year: number): boolean {
    const availableSubjects = this.getAvailableSubjects(year);
    const normalizedSubject = subject.toLowerCase();
    
    return availableSubjects.some(availableSubject => 
      normalizedSubject.includes(availableSubject) || availableSubject.includes(normalizedSubject)
    );
  }

  /**
   * Get a random conversation starter for a subject
   */
  static getConversationStarter(subject: string): string {
    const instructions = this.getInstructions(subject);
    const starters = instructions.conversationStarters;
    return starters[Math.floor(Math.random() * starters.length)];
  }

  /**
   * Get subject-specific teaching methodology
   */
  static getTeachingMethodology(subject: string): string {
    return this.getInstructions(subject).teachingMethodology;
  }

  /**
   * Get subject-specific memory focus areas
   */
  static getMemoryFocus(subject: string): string[] {
    return this.getInstructions(subject).memoryFocus;
  }

  /**
   * Get subject-specific quiz style
   */
  static getQuizStyle(subject: string): string {
    return this.getInstructions(subject).quizStyle;
  }

  /**
   * Generate subject-specific prompt instructions
   */
  static generatePromptInstructions(subject: string, year: number): string {
    const instructions = this.getInstructions(subject);
    const availableSubjects = this.getAvailableSubjects(year);
    
    return `
SUBJECT-SPECIFIC TEACHING INSTRUCTIONS:

Subject: ${subject.toUpperCase()}
Year: ${year}
Available Subjects for Year ${year}: ${availableSubjects.join(', ')}

Teaching Approach: ${instructions.approach}
Teaching Style: ${instructions.style}
Example Focus: ${instructions.examples}
Progression: ${instructions.progression}

Teaching Methodology:
${instructions.teachingMethodology}

Memory Focus Areas:
${instructions.memoryFocus.map(focus => `- ${focus}`).join('\n')}

Quiz Style:
${instructions.quizStyle}

CONVERSATION RULES:
- NEVER ask "Do you want to study this?" or "What would you like to learn?"
- ALWAYS start teaching directly based on curriculum
- Use proactive conversation starters
- Follow the subject-specific teaching methodology
- Track progress in subject-specific memory areas
- Generate quizzes that match the subject's quiz style
`;
  }
}
