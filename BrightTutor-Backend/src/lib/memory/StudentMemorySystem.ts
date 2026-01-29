import { prisma } from '@/lib/prisma';
import { SubjectInstructions } from '@/lib/instructions/SubjectInstructions';
import { parseWithCache, invalidateCachePrefix } from '@/lib/utils/json-cache';

export interface StudentMemory {
  basicInfo: {
    name: string;
    age?: number;
    gender?: string;
    grade?: string;
    classroom?: string;
  };
  learningProfile: {
    interests: string[];
    struggles: string[];
    achievements: string[];
    learningStyle?: string;
    preferredLanguage?: string;
  };
  subjectProgress: {
    [subject: string]: {
      currentTopic?: string;
      completedChunks: string[];
      masteredConcepts: string[];
      strugglingConcepts: string[];
      subjectSpecificMemory: {
        [key: string]: any;
      };
    };
  };
}

export class StudentMemorySystem {
  static async getStudentMemory(studentId: string): Promise<StudentMemory> {
    try {
      const student = await prisma.student.findUnique({
        where: { id: studentId },
        include: { 
          class: true,
          aiPersonality: true
        }
      });
      
      if (!student) {
        return this.getDefaultMemory('Unknown Student');
      }
      
      // 🔥 OPTIMIZED: Use cached JSON parsing to avoid repeated parsing
      const cacheKeyPrefix = `${studentId}:`;
      const memory: StudentMemory = {
        basicInfo: {
          name: student.studentName,
          age: student.age || undefined,
          gender: student.gender || undefined,
          grade: student.grade || undefined,
          classroom: student.class?.className
        },
        learningProfile: {
          interests: student.aiPersonality 
            ? parseWithCache<string[]>(student.aiPersonality.keyTopics, `${cacheKeyPrefix}keyTopics`, 5 * 60 * 1000) || []
            : [],
          struggles: student.aiPersonality 
            ? parseWithCache<string[]>(student.aiPersonality.strugglingAreas, `${cacheKeyPrefix}strugglingAreas`, 5 * 60 * 1000) || []
            : [],
          achievements: student.aiPersonality 
            ? parseWithCache<string[]>(student.aiPersonality.achievements, `${cacheKeyPrefix}achievements`, 5 * 60 * 1000) || []
            : [],
          learningStyle: student.aiPersonality?.communicationStyle || 'reading',
          preferredLanguage: this.detectPreferredLanguage(student.aiPersonality)
        },
        subjectProgress: await this.loadSubjectProgress(studentId)
      };
      
      console.log(`Memory loaded for ${student.studentName}:`, {
        interests: memory.learningProfile.interests.length,
        struggles: memory.learningProfile.struggles.length,
        achievements: memory.learningProfile.achievements.length
      });
      
      return memory;
      
    } catch (error) {
      console.error('Error loading student memory:', error);
      return this.getDefaultMemory('Student');
    }
  }
  
  static async updateMemory(studentId: string, newLearning: {
    newInterests?: string[];
    newStruggles?: string[];
    newAchievements?: string[];
    conversationMessage?: string;
    subject?: string;
    subjectSpecificUpdate?: {
      [key: string]: any;
    };
  }): Promise<void> {
    try {
      const currentMemory = await this.getStudentMemory(studentId);
      
      // Merge new learning with existing memory
      const updatedInterests = this.mergeArrays(
        currentMemory.learningProfile.interests,
        newLearning.newInterests || []
      );
      
      const updatedStruggles = this.mergeArrays(
        currentMemory.learningProfile.struggles,
        newLearning.newStruggles || []
      );
      
      const updatedAchievements = this.mergeArrays(
        currentMemory.learningProfile.achievements,
        newLearning.newAchievements || []
      );
      
      // Update or create AI personality basic memory fields (WITHOUT touching learningProgress)
      await prisma.aIPersonality.upsert({
        where: { studentId },
        update: {
          keyTopics: JSON.stringify(updatedInterests),
          strugglingAreas: JSON.stringify(updatedStruggles),
          achievements: JSON.stringify(updatedAchievements),
          lastInteraction: new Date(),
          updatedAt: new Date()
        },
        create: {
          studentId,
          keyTopics: JSON.stringify(updatedInterests),
          strugglingAreas: JSON.stringify(updatedStruggles),
          achievements: JSON.stringify(updatedAchievements),
          learningProgress: '{}', // initialize as empty JSON, map system will populate safely
          lastInteraction: new Date()
        }
      });

      // 🔥 OPTIMIZED: Invalidate cache after update to ensure fresh data
      invalidateCachePrefix(`${studentId}:`);

      // Store rich subjectProgress separately in StudentKnowledgeBase to avoid clobbering map progress
      // This keeps map progress (chapters/sections) in AIPersonality.learningProgress and
      // long-term subject memory in StudentKnowledgeBase.
      const subjectProgressJson = JSON.stringify(currentMemory.subjectProgress);
      await prisma.studentKnowledgeBase.upsert({
        where: { studentId },
        update: {
          effectiveMethods: updatedInterests,
          strugglingAreas: updatedStruggles,
          recentTopics: updatedAchievements,
          // Store subjectProgress as JSON in lessonPlansDigest for now (string field)
          lessonPlansDigest: subjectProgressJson,
          updatedAt: new Date()
        },
        create: {
          studentId,
          article: '',
          recentTopics: updatedAchievements,
          strugglingAreas: updatedStruggles,
          effectiveMethods: updatedInterests,
          lessonPlansDigest: subjectProgressJson,
          quizHistorySummary: '',
          version: 1
        }
      });
      
      console.log(`Memory updated for student ${studentId} (map progress preserved)`);
      
    } catch (error) {
      console.error('Error updating student memory:', error);
    }
  }
  
  private static mergeArrays(existing: string[], newItems: string[]): string[] {
    const combined = [...existing, ...newItems];
    return Array.from(new Set(combined)); // Remove duplicates
  }
  
  private static detectPreferredLanguage(aiPersonality: any): string {
    // Logic to detect preferred language from past interactions
    return 'French'; // Default for Mauritanian curriculum
  }
  
  private static getDefaultMemory(name: string): StudentMemory {
    return {
      basicInfo: { name },
      learningProfile: {
        interests: [],
        struggles: [],
        achievements: [],
      },
      subjectProgress: {}
    };
  }

  /**
   * Load subject-specific progress from database
   */
  private static async loadSubjectProgress(studentId: string): Promise<{ [subject: string]: any }> {
    try {
      const aiPersonality = await prisma.aIPersonality.findUnique({
        where: { studentId }
      });

      if (!aiPersonality?.learningProgress) {
        return {};
      }

      // 🔥 OPTIMIZED: Use cached JSON parsing
      const learningProgress = parseWithCache<{ [subject: string]: any }>(
        aiPersonality.learningProgress,
        `${studentId}:learningProgress`,
        5 * 60 * 1000 // 5 minutes cache
      );
      return learningProgress || {};
    } catch (error) {
      console.error('Error loading subject progress:', error);
      return {};
    }
  }

  /**
   * Update subject-specific memory
   */
  private static updateSubjectSpecificMemory(
    currentProgress: { [subject: string]: any },
    subject: string,
    update: { [key: string]: any }
  ): { [subject: string]: any } {
    const subjectKey = subject.toLowerCase();
    
    if (!currentProgress[subjectKey]) {
      currentProgress[subjectKey] = {
        currentTopic: '',
        completedChunks: [],
        masteredConcepts: [],
        strugglingConcepts: [],
        subjectSpecificMemory: {}
      };
    }

    // Update subject-specific memory
    currentProgress[subjectKey].subjectSpecificMemory = {
      ...currentProgress[subjectKey].subjectSpecificMemory,
      ...update
    };

    return currentProgress;
  }

  /**
   * Get subject-specific memory for a student
   */
  static async getSubjectMemory(studentId: string, subject: string): Promise<any> {
    try {
      const memory = await this.getStudentMemory(studentId);
      const subjectKey = subject.toLowerCase();
      return memory.subjectProgress[subjectKey]?.subjectSpecificMemory || {};
    } catch (error) {
      console.error('Error getting subject memory:', error);
      return {};
    }
  }

  /**
   * Update subject-specific memory for a student
   */
  static async updateSubjectMemory(
    studentId: string, 
    subject: string, 
    update: { [key: string]: any }
  ): Promise<void> {
    await this.updateMemory(studentId, {
      subject,
      subjectSpecificUpdate: update
    });
  }
}
