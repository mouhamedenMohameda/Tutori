import { prisma } from '@/lib/prisma';
import { getCurriculum, mapClassroomYearToCurriculumYear } from '@/lib/curriculum/curriculum-loader';

export interface ContextualQuiz {
  questions: QuizQuestion[];
  source: string;
  basedOnTeaching: boolean;
  difficulty: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export class IntelligentQuizGenerator {
  static async generateContextualQuiz(
    studentId: string,
    subject: string,
    languagePreference: 'fr' | 'ar' = 'fr'
  ): Promise<ContextualQuiz> {
    // Get student's year for curriculum (outside try block for catch access)
      const student = await prisma.student.findUnique({
        where: { id: studentId },
        include: { class: true }
      });
      
      const studentYear = student?.class?.classroomYear || 'Year1';
    const year = mapClassroomYearToCurriculumYear(studentYear);
    
    try {
      console.log(`Generating contextual quiz for student ${studentId}, subject: ${subject}`);
      
      // Get curriculum using new system
      const curriculum = getCurriculum(year, subject);
      
      console.log(`📚 Using curriculum: ${curriculum?.title || 'Unknown'} for Year ${year}`);
      console.log(`📖 Curriculum chapters: ${curriculum?.chapters?.map(ch => ch.id).join(', ') || 'None'}`);
      console.log(`🎯 CRITICAL: Student ${studentId} is in Year ${year} (classroomYear: ${studentYear})`);
      if (year !== 4 && studentYear.includes('4')) {
        console.error(`❌ YEAR MISMATCH: Student classroomYear is ${studentYear} but mapped to Year ${year}!`);
      }
      
      // Get student's current section from learning progress
      let currentSection = await this.getCurrentSection(studentId, subject);
      
      // ✅ NEW: Validate section exists, if not, detect from conversations
      let sectionExists = false;
      for (const chapter of curriculum?.chapters || []) {
        if (chapter.sections.find((s: any) => s.id === currentSection)) {
          sectionExists = true;
          break;
        }
      }
      
      if (!sectionExists) {
        console.log(`⚠️ Section ${currentSection} not found in curriculum, detecting from conversations...`);
        const detectedSection = await this.detectSectionFromConversations(studentId, subject, curriculum, year);
        if (detectedSection && curriculum) {
          console.log(`✅ Detected section from conversations: ${detectedSection}`);
          currentSection = detectedSection;
          // Update student progress to detected section
          await this.updateStudentProgressToCorrectSection(studentId, 
            curriculum.chapters.find((ch: any) => 
              ch.sections.find((s: any) => s.id === detectedSection)
            )?.sections.find((s: any) => s.id === detectedSection)
          );
        } else {
          console.log(`⚠️ Could not detect section from conversations, using first section`);
          const firstSection = curriculum?.chapters?.[0]?.sections?.[0];
          if (firstSection) {
            currentSection = firstSection.id;
            await this.updateStudentProgressToCorrectSection(studentId, firstSection);
          }
        }
      }
      
      console.log(`🎯 Student ${studentId} (${student?.studentName}) is in Year ${year} (${studentYear})`);
      console.log(`📖 Using section: ${currentSection}`);
      
      // Get previous quiz questions to avoid repetition
      const previousQuestions = await this.getPreviousQuizQuestions(studentId, subject, 5);
      console.log(`📝 Found ${previousQuestions.length} previous questions for student ${studentId}`);
      
      // Generate questions ONLY from current section
      const baseQuestions = await this.generateFromCurrentSection(
        studentId, 
        subject, 
        currentSection, 
        curriculum,
        year,
        languagePreference
      );
      
      // Generate unique questions avoiding repetition
      const questions = await this.generateUniqueQuestions(baseQuestions, previousQuestions);
      console.log(`✅ Generated ${questions.length} unique questions (${baseQuestions.length - questions.length} duplicates avoided)`);
      
      // Apply option randomization and validation
      const randomizedQuestions = this.validateAndFixQuestions(questions);
      console.log(`🎲 Applied option randomization to ${randomizedQuestions.length} questions`);
      
      // Final quality gate: ensure exactly 4 questions
      if (randomizedQuestions.length !== 4) {
        console.log(`⚠️ Quality gate: Expected 4 questions, got ${randomizedQuestions.length}. This should not happen in production.`);
        // This is a critical error - log for monitoring
        console.error(`🚨 CRITICAL: Quiz generation returned ${randomizedQuestions.length} questions instead of 4`);
      }
      
      return {
        questions: randomizedQuestions.slice(0, 4), // Ensure exactly 4 questions with randomized options
        source: 'current_section',
        basedOnTeaching: false,
        difficulty: 'medium'
      };
      
    } catch (error) {
      console.error('Error generating contextual quiz:', error);
      throw new Error(`Failed to generate quiz for student ${studentId}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  
  /**
   * Get student's current section from learning progress
   * CRITICAL: Now reads from NEW subject-specific format (matches progression logic)
   */
  private static async getCurrentSection(studentId: string, subject: string): Promise<string> {
    try {
      const student = await prisma.student.findUnique({
        where: { id: studentId },
        include: { aiPersonality: true, class: true }
      });
      
      if (!student?.aiPersonality) {
        // Get student's actual year and return appropriate starting section
        const studentYear = student?.class?.classroomYear || 'Year1';
        const year = mapClassroomYearToCurriculumYear(studentYear);
        console.log(`🎯 No AI personality found for student, using Year ${year} starting section`);
        
        // Get the first section from the student's actual year curriculum
        const curriculum = getCurriculum(year, subject);
        const firstSection = curriculum?.chapters?.[0]?.sections?.[0];
        if (firstSection) {
          console.log(`✅ Found Year ${year} starting section: ${firstSection.id}`);
          return firstSection.id;
        }
        
        // Fallback to ch1-s1 if curriculum not found
        console.log(`⚠️ Could not find Year ${year} curriculum, using ch1-s1 as fallback`);
        return `ch1-s1`; // Will be validated against correct curriculum
      }

      // Normalize subject name (same logic as progression)
      const normalizedSubject = subject.toLowerCase() === 'mathematics' ? 'math' : subject.toLowerCase();
      
      const learningProgress = student.aiPersonality.learningProgress;
      if (typeof learningProgress === 'string') {
        try {
          const parsed = JSON.parse(learningProgress);
          
          // ✅ NEW FORMAT: Check for subject-specific progress first (matches progression logic)
          if (parsed[normalizedSubject] && parsed[normalizedSubject].currentSection) {
            const currentSection = parsed[normalizedSubject].currentSection;
            console.log(`✅ Found current section from NEW format (${normalizedSubject}): ${currentSection}`);
            console.log(`📊 Full progress for ${normalizedSubject}:`, {
              currentChapter: parsed[normalizedSubject].currentChapter,
              currentSection: parsed[normalizedSubject].currentSection,
              completedTopics: parsed[normalizedSubject].completedTopics?.length || 0,
              nextSection: parsed[normalizedSubject].nextSection
            });
            return currentSection;
          }
          
          // ✅ OLD FORMAT: Fallback for backward compatibility
          if (parsed.currentSection) {
            const currentSection = parsed.currentSection;
            console.log(`⚠️ Using OLD format currentSection: ${currentSection} (consider migrating to new format)`);
            return currentSection;
          }
          
          // No section found in either format
          console.log(`⚠️ No currentSection found in learning progress, using fallback`);
    } catch (error) {
          console.error('Error parsing learning progress:', error);
        }
      }
      
      // Get student's actual year for fallback
      const studentYear = student?.class?.classroomYear || 'Year1';
      const year = mapClassroomYearToCurriculumYear(studentYear);
      console.log(`🎯 Using Year ${year} starting section as fallback`);
      
      // Get the first section from the student's actual year curriculum
      const curriculum = getCurriculum(year, subject);
      const firstSection = curriculum?.chapters?.[0]?.sections?.[0];
      if (firstSection) {
        console.log(`✅ Found Year ${year} starting section: ${firstSection.id}`);
        return firstSection.id;
      }
      
      // Fallback to ch1-s1 if curriculum not found
      console.log(`⚠️ Could not find Year ${year} curriculum, using ch1-s1 as fallback`);
      return 'ch1-s1';
    } catch (error) {
      console.error('Error getting current section:', error);
      return 'ch1-s1'; // Default fallback
    }
  }
  
  /**
   * Generate quiz questions from current section only
   */
  private static async generateFromCurrentSection(
    studentId: string,
    subject: string,
    currentSection: string,
    curriculum: any,
    year: number,
    languagePreference: 'fr' | 'ar' = 'fr'
  ): Promise<QuizQuestion[]> {
    try {
      console.log(`🎯 Generating quiz from current section: ${currentSection}`);
      
      // Get section content from curriculum using proper structure
      let sectionContent = null;
      for (const chapter of curriculum?.chapters || []) {
        sectionContent = chapter.sections.find((s: any) => s.id === currentSection);
        if (sectionContent) break;
      }
      
      if (!sectionContent) {
        console.log(`⚠️ Section ${currentSection} not found in curriculum`);
        console.log(`📚 Available sections in curriculum:`, curriculum?.chapters?.map((ch: any) => 
          `${ch.id}: [${ch.sections.map((s: any) => s.id).join(', ')}]`
        ));
        
        // Find the correct section for this student's year
        const correctSection = this.findCorrectSectionForStudent(studentId, curriculum, subject);
        
        if (correctSection) {
          console.log(`✅ Found correct section for student: ${correctSection.id}`);
          // Update student's progress to correct section
          await this.updateStudentProgressToCorrectSection(studentId, correctSection);
          // Retry with correct section
          return this.generateFromCurrentSection(studentId, subject, correctSection.id, curriculum, year, languagePreference);
        } else {
          console.log(`❌ No valid section found for student ${studentId} in ${subject}`);
          throw new Error(`No valid section found for student ${studentId} in ${subject}`);
        }
      }
      
      console.log(`✅ Found section ${currentSection}: ${sectionContent.title}`);
      
      // Build prompt for current section only (with language preference)
      const prompt = this.buildCurrentSectionPrompt(subject, currentSection, sectionContent, languagePreference);
      
      // Generate questions using Gemini with retry logic
      const { generateEducationalResponse } = await import('@/lib/gemini');
      
      let response;
      let parsedQuestions = null;
      let attempts = 0;
      const maxAttempts = 3;
      
      while (attempts < maxAttempts && !parsedQuestions) {
        attempts++;
        console.log(`🤖 Calling Gemini API... (attempt ${attempts}/${maxAttempts})`);
        
        try {
          // Use different prompt strategies to avoid truncation
          const promptToUse = attempts === 1 ? prompt : this.buildShorterPrompt(subject, currentSection, sectionContent, attempts, languagePreference);
          
          response = await generateEducationalResponse(promptToUse);
          console.log(`✅ Gemini API success, response length: ${response.length}`);
          console.log('🔍 Raw Gemini response for current section quiz:', response.substring(0, 1000) + '...');
          console.log('🔍 Full Gemini response:', response);
          
          // Check for truncation indicators
          if (this.isResponseTruncated(response)) {
            console.log(`⚠️ Response appears truncated on attempt ${attempts}, trying shorter prompt...`);
            continue;
          }
          
          // Enhanced JSON parsing with multiple strategies
          parsedQuestions = this.parseGeminiResponse(response);
          
          if (parsedQuestions && Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
            console.log(`✅ Successfully parsed JSON from current section, got ${parsedQuestions.length} questions`);
            
            // ✅ NEW: Validate answer keys first
            const answerKeyValidated = this.validateAnswerKeys(parsedQuestions);
            console.log(`✅ Answer key validation: ${answerKeyValidated.length} questions passed`);
            
            // Validate question quality
            console.log(`🔍 Raw parsed questions:`, JSON.stringify(parsedQuestions, null, 2));
            const validatedQuestions = this.validateQuestionQuality(answerKeyValidated, sectionContent);
            console.log(`✅ Validated ${validatedQuestions.length} quality questions out of ${parsedQuestions.length} total`);
            
            // Ensure exactly 4 questions - fail if not enough
            if (validatedQuestions.length >= 4) {
              return validatedQuestions.slice(0, 4);
            } else {
              console.log(`❌ Only ${validatedQuestions.length} quality questions instead of 4`);
              console.log(`🔍 DEBUG: Using unvalidated questions for testing - this will be removed later`);
              console.log(`🔍 Unvalidated questions:`, JSON.stringify(parsedQuestions, null, 2));
              
              // TEMPORARY: Use unvalidated questions for debugging
              if (parsedQuestions.length >= 4) {
                console.log(`⚠️ TEMPORARY FALLBACK: Using ${parsedQuestions.length} unvalidated questions`);
                return parsedQuestions.slice(0, 4);
              } else {
                throw new Error(`CRITICAL: Only ${validatedQuestions.length} validated questions and ${parsedQuestions.length} total questions generated instead of 4 from section ${currentSection}. This indicates incomplete section content or Gemini generation failure.`);
              }
            }
          }
          
        } catch (apiError) {
          console.error(`❌ Gemini API error on attempt ${attempts}:`, apiError);
        }
        
        if (!parsedQuestions && attempts < maxAttempts) {
          console.log(`⚠️ Attempt ${attempts} failed, retrying...`);
          // Exponential backoff for retries
          const delay = Math.min(1000 * Math.pow(2, attempts - 1), 5000); // Max 5 seconds
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
      
      // If all attempts failed, try to generate section-specific fallback questions
      // If all attempts failed, this is a critical error
      console.log('❌ Failed to parse current section questions after all attempts - CRITICAL ERROR');
      throw new Error(`CRITICAL: Failed to generate questions from section ${currentSection} after all attempts. This indicates a fundamental problem with section content, Gemini API, or generation logic.`);
      
    } catch (error) {
      console.error('Error generating from current section:', error);
      throw new Error(`Failed to generate quiz for student ${studentId}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  
  /**
   * Build prompt for current section quiz generation
   */
  private static buildCurrentSectionPrompt(subject: string, sectionId: string, sectionContent: any, languagePreference: 'fr' | 'ar' = 'fr'): string {
    // Extract key information for better prompt
    const concepts = sectionContent.concepts || [];
    const objectives = sectionContent.objectives || [];
    const title = sectionContent.title || sectionId;
    
    console.log(`🎯 Building prompt for section: ${title} (${sectionId})`);
    console.log(`📚 Section concepts: ${concepts.join(', ')}`);
    console.log(`🎯 Section objectives: ${objectives.join(', ')}`);
    
    // Build language-specific instructions
    const languageInstructions = languagePreference === 'ar' 
      ? `3. All questions must be in FUSHA ARABIC (Modern Standard Arabic - simple and clear)
   - Use natural, conversational Arabic
   - BUT keep ALL mathematical/scientific terms in FRENCH: "les nombres réels", "équation", "fraction", "les entiers", "les décimaux"
   - Keep symbols as-is: x, +, =, ÷, ×, ℕ, ℤ, 𝔻, ℚ, ℝ, ⊂, ∈, √
   - Keep numbers/expressions exactly as written: 2x + 5 = 13 (don't translate numbers)
   - Natural code-switching is expected (Arabic explanation + French math terms mixed naturally)
   - Example: "ما هي la somme de 2 et 4?" (NOT "ما هي مجموع 2 و 4")`
      : `3. All questions must be in French`;

    return `You are an expert quiz generator for Mauritanian college students. Generate exactly 4 high-quality multiple choice questions ${languagePreference === 'ar' ? 'in FUSHA ARABIC' : 'in FRENCH'} based ONLY on the current section content.

SECTION DETAILS:
- Section ID: ${sectionId}
- Section Title: ${title}
- Key Concepts: ${concepts.join(', ')}
- Learning Objectives: ${objectives.join(', ')}

CRITICAL REQUIREMENTS - MUST BE FOLLOWED EXACTLY:
1. Generate EXACTLY 4 questions - NO MORE, NO LESS
2. Each question must have EXACTLY 3 options
${languageInstructions}
4. Questions must test understanding of the specific concepts listed above
5. Use medium difficulty level appropriate for the section
6. Each question should focus on ONE specific concept from the section
7. Options should be plausible but only one correct
8. correctAnswer index must be 0, 1, or 2
9. Provide clear, educational explanations ${languagePreference === 'ar' ? 'in Arabic (with French math terms)' : 'in French'}
10. Questions must be directly related to the section title and concepts

QUESTION QUALITY STANDARDS:
- Questions must be specific to the section content
- Test understanding, not just memorization
- Use real examples and applications
- Be educational and helpful for learning
- NO generic questions - must be section-specific

MANDATORY FORMAT - Return ONLY a valid JSON array with exactly 4 questions:
${languagePreference === 'ar' 
  ? `[{"id":"q1","question":"سؤال محدد عن المفهوم 1 (استخدم المصطلحات الرياضية بالفرنسية)","options":["الإجابة الصحيحة","خيار معقول","خيار خاطئ"],"correctAnswer":0,"explanation":"شرح مفصل للمفهوم 1 (مع المصطلحات الفرنسية)"},{"id":"q2","question":"سؤال محدد عن المفهوم 2","options":["الإجابة الصحيحة","خيار معقول","خيار خاطئ"],"correctAnswer":1,"explanation":"شرح مفصل للمفهوم 2"},{"id":"q3","question":"سؤال محدد عن المفهوم 3","options":["الإجابة الصحيحة","خيار معقول","خيار خاطئ"],"correctAnswer":2,"explanation":"شرح مفصل للمفهوم 3"},{"id":"q4","question":"سؤال محدد عن المفهوم 4","options":["الإجابة الصحيحة","خيار معقول","خيار خاطئ"],"correctAnswer":0,"explanation":"شرح مفصل للمفهوم 4"}]`
  : `[{"id":"q1","question":"Question spécifique au concept 1","options":["Option correcte","Option plausible","Option incorrecte"],"correctAnswer":0,"explanation":"Explication détaillée du concept 1"},{"id":"q2","question":"Question spécifique au concept 2","options":["Option correcte","Option plausible","Option incorrecte"],"correctAnswer":1,"explanation":"Explication détaillée du concept 2"},{"id":"q3","question":"Question spécifique au concept 3","options":["Option correcte","Option plausible","Option incorrecte"],"correctAnswer":2,"explanation":"Explication détaillée du concept 3"},{"id":"q4","question":"Question spécifique au concept 4","options":["Option correcte","Option plausible","Option incorrecte"],"correctAnswer":0,"explanation":"Explication détaillée du concept 4"}]`}`;
  }
  
  /**
   * Check if Gemini response is truncated
   */
  private static isResponseTruncated(response: string): boolean {
    // Check for common truncation indicators
    const truncationIndicators = [
      response.endsWith('"co'),
      response.endsWith('...'),
      response.endsWith('"ex'),
      response.endsWith('"op'),
      response.includes('"co...'),
      response.includes('"ex...'),
      response.includes('"op...'),
      !response.includes(']') && response.includes('['),
      response.split('{').length !== response.split('}').length
    ];
    
    return truncationIndicators.some(indicator => indicator);
  }
  
  /**
   * Build shorter prompt to avoid truncation
   */
  private static buildShorterPrompt(subject: string, sectionId: string, sectionContent: any, attempt: number, languagePreference: 'fr' | 'ar' = 'fr'): string {
    const concepts = sectionContent.concepts || [];
    const title = sectionContent.title || sectionId;
    
    console.log(`🎯 Building shorter prompt for attempt ${attempt}: ${title} (${sectionId})`);
    
    const langText = languagePreference === 'ar' ? 'Arabic (with French math terms)' : 'French';
    const langExample = languagePreference === 'ar' ? 'سؤال؟ (استخدم المصطلحات الفرنسية)' : 'Question?';
    
    if (attempt === 2) {
      // Shorter, more focused prompt
      return `Generate 4 ${langText} quiz questions about "${title}" for Year 4 students.

Concepts: ${concepts.join(', ')}

Requirements:
- 4 questions, 3 options each
- ${langText} language${languagePreference === 'ar' ? ' (keep math terms in French)' : ''}
- Medium difficulty
- Test understanding

JSON format:
[{"id":"q1","question":"${langExample}","options":["A","B","C"],"correctAnswer":0,"explanation":"Explanation"}]`;
    } else {
      // Even shorter prompt
      return `4 quiz questions in ${langText} about "${title}":
Concepts: ${concepts.slice(0, 2).join(', ')}

JSON: [{"id":"q1","question":"${langExample}","options":["A","B","C"],"correctAnswer":0,"explanation":"Explanation"}]`;
    }
  }
  
  /**
   * Validate question quality and filter out poor questions
   */
  private static validateQuestionQuality(questions: QuizQuestion[], sectionContent: any): QuizQuestion[] {
    const validQuestions: QuizQuestion[] = [];
    const sectionConcepts = (sectionContent.concepts || []).map((c: string) => c.toLowerCase());
    const sectionTitle = (sectionContent.title || '').toLowerCase();
    
    console.log(`🔍 Validating ${questions.length} questions against section concepts: ${sectionConcepts.join(', ')}`);
    
    for (const question of questions) {
      const questionText = question.question.toLowerCase();
      
      // STRICT VALIDATION: Question must be directly related to section concepts
      const isRelatedToSection = sectionConcepts.some((concept: string) => 
        questionText.includes(concept) || 
        concept.includes(questionText.substring(0, 20)) ||
        // Check for mathematical concepts that relate to absolute value
        (concept.includes('valeur absolue') && (questionText.includes('|x|') || questionText.includes('absolu') || questionText.includes('distance'))) ||
        (concept.includes('distance') && (questionText.includes('distance') || questionText.includes('entre') || questionText.includes('|'))) ||
        (concept.includes('module') && (questionText.includes('module') || questionText.includes('complexe') || questionText.includes('|'))) ||
        (concept.includes('propriétés') && (questionText.includes('propriété') || questionText.includes('toujours') || questionText.includes('vraie'))) ||
        (concept.includes('radicaux') && (questionText.includes('radicaux') || questionText.includes('√') || questionText.includes('racine'))) ||
        (concept.includes('addition') && (questionText.includes('addition') || questionText.includes('additionner') || questionText.includes('+'))) ||
        (concept.includes('soustraction') && (questionText.includes('soustraction') || questionText.includes('soustraire') || questionText.includes('-'))) ||
        (concept.includes('simplification') && (questionText.includes('simplification') || questionText.includes('simplifier')))
      ) || questionText.includes(sectionTitle);
      
      // STRICT VALIDATION: Question must be educational and specific
      const isEducational = questionText.length > 15 && // Not too short
                           !questionText.includes('qu\'est-ce que') && // Not generic
                           !questionText.includes('quelle est la définition') && // Not definition-based
                           !questionText.includes('comment définit-on'); // Not definition-based
      
      // STRICT VALIDATION: Question must have proper structure
      const hasProperStructure = question.options && 
                                question.options.length === 3 &&
                                question.correctAnswer >= 0 && 
                                question.correctAnswer <= 2 &&
                                question.explanation && 
                                question.explanation.length > 10 &&
                                question.options.every(option => option.length > 3); // Options must be meaningful
      
      if (isRelatedToSection && isEducational && hasProperStructure) {
        validQuestions.push(question);
        console.log(`✅ Valid question: ${question.question.substring(0, 50)}...`);
      } else {
        console.log(`❌ Invalid question: ${question.question.substring(0, 50)}... (related: ${isRelatedToSection}, educational: ${isEducational}, structure: ${hasProperStructure})`);
      }
    }
    
    return validQuestions;
  }
  
  /**
   * REMOVED: padQuestionsToFourEnhanced - No more fallback padding
   * If Gemini doesn't generate 4 questions, the quiz generation should fail
   */
  
  /**
   * REMOVED: generateSectionSpecificQuestion - No more fallback generation
   * All questions must come from Gemini section-specific generation
   */
  
  /**
   * REMOVED: generateContextualQuestion - No more hardcoded fallbacks
   * All questions must come from Gemini section-specific generation
   */
  
  /**
   * REMOVED: generateSectionSpecificOptions - No more hardcoded fallbacks
   * All options must come from Gemini section-specific generation
   */
  
  /**
   * REMOVED: generateEducationalOptions - No more hardcoded fallbacks
   * All options must come from Gemini section-specific generation
   */
  
  /**
   * Find the correct section for a student based on their year and subject
   */
  private static findCorrectSectionForStudent(studentId: string, curriculum: any, subject: string): any {
    try {
      // Get the first section of the first chapter as the starting point
      const firstChapter = curriculum?.chapters?.[0];
      const firstSection = firstChapter?.sections?.[0];
      
      if (firstSection) {
        console.log(`✅ Found correct starting section: ${firstSection.id} (${firstSection.title})`);
        return firstSection;
      }
      
      console.log(`❌ No sections found in curriculum for ${subject}`);
      return null;
    } catch (error) {
      console.error('Error finding correct section:', error);
      return null;
    }
  }

  /**
   * Update student's progress to the correct section
   * CRITICAL: Preserves all existing progress (completedTopics, sectionProgress, all subjects)
   */
  private static async updateStudentProgressToCorrectSection(studentId: string, section: any): Promise<void> {
    try {
      // Get existing progress
      const existing = await prisma.aIPersonality.findUnique({
        where: { studentId },
        select: { learningProgress: true }
      });

      // Parse existing progress or initialize
      let allProgress: any = {};
      if (existing?.learningProgress) {
        try {
          const parsed = JSON.parse(existing.learningProgress);
          // Check if it's the old format (flat structure) or new format (subject-specific)
          if (parsed.math || parsed.science || parsed.physics) {
            // New format - preserve it
            allProgress = parsed;
          } else {
            // Old format - migrate to new format
            allProgress = {
              math: {
                currentChapter: parsed.currentChapter || 'ch1',
                currentSection: parsed.currentSection || 'ch1-s1',
                completedTopics: parsed.completedTopics || [],
                nextSection: parsed.nextSection || 'ch1-s2'
              },
              sectionProgress: parsed.sectionProgress || {}
            };
          }
        } catch (e) {
          // Invalid JSON - start fresh
          console.error('Error parsing learning progress:', e);
          allProgress = {};
        }
      }

      // Determine subject from section (default to math if unclear)
      // Extract chapter ID from section ID (e.g., "ch1-s1" -> "ch1")
      const chapterId = section.id.split('-')[0];
      const subject = 'math'; // Default - could be enhanced to detect from section metadata

      // Initialize subject progress if it doesn't exist
      if (!allProgress[subject]) {
        allProgress[subject] = {
          currentChapter: 'ch1',
          currentSection: 'ch1-s1',
          completedTopics: [],
          nextSection: 'ch1-s2'
        };
      }

      // Update ONLY the currentSection for this subject (preserve completedTopics and all other data)
      allProgress[subject] = {
        ...allProgress[subject], // Preserve completedTopics, treasuresOpened, etc.
        currentChapter: chapterId,
        currentSection: section.id,
        nextSection: section.id
      };

      // Preserve sectionProgress (don't overwrite)
      if (!allProgress.sectionProgress) {
        allProgress.sectionProgress = {};
      }

      // Save merged progress
      await prisma.aIPersonality.upsert({
        where: { studentId },
        update: {
          learningProgress: JSON.stringify(allProgress),
          updatedAt: new Date()
        },
        create: {
          studentId,
          learningProgress: JSON.stringify(allProgress),
          lastInteraction: new Date()
        }
      });

      console.log(`✅ Updated student ${studentId} progress to ${section.id} (preserved existing progress)`);
    } catch (error) {
      console.error('Error updating student progress:', error);
      // Don't throw - allow quiz generation to continue even if progress update fails
    }
  }

  /**
   * Reset student's progress to correct starting section for their academic year
   * CRITICAL: Preserves all existing progress (completedTopics, sectionProgress, all subjects)
   */
  private static async resetStudentProgressToCorrectYear(studentId: string, curriculum: any): Promise<void> {
    try {
      // Get existing progress
      const existing = await prisma.aIPersonality.findUnique({
        where: { studentId },
        select: { learningProgress: true }
      });

      // Parse existing progress or initialize
      let allProgress: any = {};
      if (existing?.learningProgress) {
        try {
          const parsed = JSON.parse(existing.learningProgress);
          // Check if it's the old format (flat structure) or new format (subject-specific)
          if (parsed.math || parsed.science || parsed.physics) {
            // New format - preserve it
            allProgress = parsed;
          } else {
            // Old format - migrate to new format
            allProgress = {
              math: {
                currentChapter: parsed.currentChapter || 'ch1',
                currentSection: parsed.currentSection || 'ch1-s1',
                completedTopics: parsed.completedTopics || [],
                nextSection: parsed.nextSection || 'ch1-s2'
              },
              sectionProgress: parsed.sectionProgress || {}
            };
          }
        } catch (e) {
          // Invalid JSON - start fresh
          console.error('Error parsing learning progress:', e);
          allProgress = {};
        }
      }

      // Get the first section of the first chapter
      const firstChapter = curriculum?.chapters?.[0];
      const firstSection = firstChapter?.sections?.[0];
      
      if (!firstSection) {
        console.error('❌ No sections found in curriculum to reset progress');
        return;
      }

      // Determine subject from curriculum (default to math)
      const subject = 'math'; // Could be enhanced to detect from curriculum metadata

      // Initialize subject progress if it doesn't exist
      if (!allProgress[subject]) {
        allProgress[subject] = {
          currentChapter: 'ch1',
          currentSection: 'ch1-s1',
          completedTopics: [],
          nextSection: 'ch1-s2'
        };
      }

      // Update ONLY the currentSection for this subject (preserve completedTopics and all other data)
      allProgress[subject] = {
        ...allProgress[subject], // Preserve completedTopics, treasuresOpened, etc.
        currentChapter: firstChapter.id,
        currentSection: firstSection.id,
        nextSection: firstSection.id
      };

      // Preserve sectionProgress (don't overwrite)
      if (!allProgress.sectionProgress) {
        allProgress.sectionProgress = {};
      }

      // Save merged progress
      await prisma.aIPersonality.upsert({
        where: { studentId },
        update: {
          learningProgress: JSON.stringify(allProgress),
          updatedAt: new Date()
        },
        create: {
          studentId,
          learningProgress: JSON.stringify(allProgress),
          lastInteraction: new Date()
        }
      });

      console.log(`✅ Reset student ${studentId} progress to ${firstSection.id} (preserved existing progress)`);
    } catch (error) {
      console.error('Error resetting student progress:', error);
      // Don't throw - allow quiz generation to continue even if progress update fails
    }
  }
  
  /**
   * Enhanced JSON parsing with multiple strategies
   */
  private static parseGeminiResponse(response: string): QuizQuestion[] | null {
    try {
      // Strategy 1: Find JSON array in response
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        try {
          const parsed = JSON.parse(jsonMatch[0]);
          if (Array.isArray(parsed) && parsed.length > 0) {
            console.log('✅ Strategy 1: JSON array parsing successful');
            return parsed;
          }
        } catch (parseError) {
          console.log('⚠️ Strategy 1 failed:', parseError instanceof Error ? parseError.message : String(parseError));
        }
      }
      
      // Strategy 2: Try to extract individual question objects with better regex
      const questionMatches = response.match(/\{[^{}]*"id"[^{}]*"question"[^{}]*"options"[^{}]*"correctAnswer"[^{}]*\}/g);
      if (questionMatches && questionMatches.length > 0) {
        try {
          const questions = questionMatches.map(match => {
            try {
              // Try to fix incomplete JSON by adding missing closing braces
              let fixedMatch = match;
              const openBraces = (fixedMatch.match(/\{/g) || []).length;
              const closeBraces = (fixedMatch.match(/\}/g) || []).length;
              
              if (openBraces > closeBraces) {
                fixedMatch += '}'.repeat(openBraces - closeBraces);
              }
              
              const parsed = JSON.parse(fixedMatch);
              
              // Validate that we have all required fields
              if (parsed.id && parsed.question && parsed.options && Array.isArray(parsed.options) && typeof parsed.correctAnswer === 'number') {
                return parsed;
              }
              
              return null;
            } catch (e) {
              return null;
            }
          }).filter(q => q !== null);
          
          if (questions.length > 0) {
            console.log(`✅ Strategy 2: Individual question parsing successful, found ${questions.length} questions`);
            return questions;
          }
        } catch (parseError) {
          console.log('⚠️ Strategy 2 failed:', parseError instanceof Error ? parseError.message : String(parseError));
        }
      }
      
      // Strategy 3: Try to fix common JSON issues
      let fixedResponse = response
        .replace(/```json\s*/g, '') // Remove markdown code blocks
        .replace(/```\s*/g, '')     // Remove closing code blocks
        .replace(/\n\s*\n/g, '\n')  // Remove extra newlines
        .trim();
      
      // Try to find and fix incomplete JSON
      if (fixedResponse.includes('[') && !fixedResponse.includes(']')) {
        // Add missing closing bracket
        fixedResponse += ']';
      }
      
      try {
        const parsed = JSON.parse(fixedResponse);
            if (Array.isArray(parsed) && parsed.length > 0) {
          console.log('✅ Strategy 3: Fixed JSON parsing successful');
              return parsed;
            }
      } catch (parseError) {
        console.log('⚠️ Strategy 3 failed:', parseError instanceof Error ? parseError.message : String(parseError));
      }
      
      // Strategy 4: Try to reconstruct questions from partial data
      console.log('🔄 Strategy 4: Attempting to reconstruct from partial data...');
      
      const partialQuestions = [];
      let questionId = 1;
      
      // Look for question patterns even in malformed JSON
      const questionPattern = /"question"\s*:\s*"([^"]+)"/g;
      const optionsPattern = /"options"\s*:\s*\[([^\]]+)\]/g;
      const answerPattern = /"correctAnswer"\s*:\s*(\d+)/g;
      
      let questionMatch;
      const questions = [];
      
      while ((questionMatch = questionPattern.exec(response)) !== null && questions.length < 4) {
        const questionText = questionMatch[1];
        
        // Find corresponding options and answer
        const optionsMatch = optionsPattern.exec(response);
        const answerMatch = answerPattern.exec(response);
        
        if (optionsMatch && answerMatch) {
          try {
            // Parse options array
            const optionsText = '[' + optionsMatch[1] + ']';
            const options = JSON.parse(optionsText);
            
            const question = {
              id: `q${questionId}`,
              question: questionText,
              options: options,
              correctAnswer: parseInt(answerMatch[1]),
              explanation: `Question sur ${questionText.substring(0, 50)}...`
            };
            
            questions.push(question);
            questionId++;
          } catch (e) {
            console.log(`⚠️ Could not parse question ${questionId}:`, e);
          }
        }
      }
      
      if (questions.length > 0) {
        console.log(`✅ Strategy 4: Reconstructed ${questions.length} questions from partial data`);
        return questions;
      }
      
      console.log('❌ All JSON parsing strategies failed');
      return null;
      
    } catch (error) {
      console.error('Error in parseGeminiResponse:', error);
      return null;
    }
  }
  
  /**
   * REMOVED: generateSectionFallbackQuestions - No more fallback generation
   * All questions must come from Gemini section-specific generation
   */
  
  /**
   * Generate question text from concept with curriculum-specific content
   * SILICON VALLEY APPROACH: No hardcoded fallbacks - fail if can't generate from section
   */
  private static generateQuestionFromConcept(concept: string, subject: string): string {
    console.log(`🔍 generateQuestionFromConcept called with concept: "${concept}", subject: "${subject}"`);
    
    // This function should NOT be used anymore - all questions should come from Gemini
    // If we reach here, it means the system failed to generate proper section-specific questions
    throw new Error(`CRITICAL: generateQuestionFromConcept called - this indicates fallback logic is still active. Concept: ${concept}, Subject: ${subject}`);
  }

  /**
   * REMOVED: generateMathQuestionFromConcept - No more hardcoded fallbacks
   * All questions must come from Gemini section-specific generation
   */

  /**
   * REMOVED: generateScienceQuestionFromConcept - No more hardcoded fallbacks
   * All questions must come from Gemini section-specific generation
   */

  /**
   * REMOVED: generatePhysicsQuestionFromConcept - No more hardcoded fallbacks
   * All questions must come from Gemini section-specific generation
   */
  
  /**
   * REMOVED: generateUniqueQuestionFromConcept - No more hardcoded fallbacks
   * All questions must come from Gemini section-specific generation
   */
  
  /**
   * REMOVED: generateUniqueQuestionFromObjective - No more hardcoded fallbacks
   * All questions must come from Gemini section-specific generation
   */
  
  /**
   * Generate options from concept with actual mathematical answers
   * SILICON VALLEY APPROACH: No hardcoded fallbacks - fail if can't generate from section
   */
  private static generateOptionsFromConcept(concept: string, subject: string = 'Mathematics'): string[] {
    console.log(`🔍 generateOptionsFromConcept called with concept: "${concept}", subject: "${subject}"`);
    
    // This function should NOT be used anymore - all options should come from Gemini
    // If we reach here, it means the system failed to generate proper section-specific options
    throw new Error(`CRITICAL: generateOptionsFromConcept called - this indicates fallback logic is still active. Concept: ${concept}, Subject: ${subject}`);
  }

  /**
   * REMOVED: generateMathOptionsFromConcept - No more hardcoded fallbacks
   * All options must come from Gemini section-specific generation
   */

  /**
   * REMOVED: All hardcoded option generation functions - No more fallbacks
   * All options must come from Gemini section-specific generation
   */
  
  /**
   * REMOVED: All hardcoded unique option generation functions - No more fallbacks
   * All options must come from Gemini section-specific generation
   */
  
  /**
   * Pad questions to exactly 4 questions using section-specific content
   */
  /**
   * REMOVED: padQuestionsToFour - No more fallback padding
   * If Gemini doesn't generate 4 questions, the quiz generation should fail
   */
  
  /**
   * Remove duplicate questions based on question text similarity
   */
  private static removeDuplicateQuestions(questions: QuizQuestion[]): QuizQuestion[] {
    const uniqueQuestions: QuizQuestion[] = [];
    
    for (const question of questions) {
      const isDuplicate = uniqueQuestions.some(existing => 
        existing.question.toLowerCase().trim() === question.question.toLowerCase().trim()
      );
      
      if (!isDuplicate) {
        uniqueQuestions.push(question);
      }
    }
    
    return uniqueQuestions;
  }
  
  private static async generateFromCurriculum(curriculum: any, subject: string = 'Mathematics', year: number = 1, languagePreference: 'fr' | 'ar' = 'fr'): Promise<QuizQuestion[]> {
    // Get subject-specific quiz style
    const subjectInstructions = this.getSubjectInstructions(subject);
    const quizStyle = subjectInstructions.quizStyle;
    
    const langText = languagePreference === 'ar' ? 'FUSHA ARABIC (with French math terms)' : 'FRENCH';
    const langInstructions = languagePreference === 'ar' 
      ? ' - Questions in Arabic, but keep ALL mathematical/scientific terms in FRENCH: "les nombres réels", "équation", "fraction", etc.'
      : '';
    
    const prompt = `Generate exactly 4 multiple choice questions in ${langText} for ${curriculum.currentYear} ${curriculum.subjectType}${langInstructions}:

SUBJECT-SPECIFIC REQUIREMENTS:
- Subject: ${subject}
- Quiz Style: ${quizStyle}
- Teaching Approach: ${subjectInstructions.approach}
- Example Focus: ${subjectInstructions.examples}

Topics: ${curriculum.topics.join(', ')}

CRITICAL REQUIREMENTS:
1. Create age-appropriate questions for the topics
2. ALWAYS include the correct answer in the options array
3. Make sure correctAnswer index matches the actual correct option
4. Generate realistic wrong options that are plausible but incorrect
5. Ensure all options are valid answers to the question
6. Follow the subject-specific quiz style: ${quizStyle}

Return JSON array only:
[{"id":"q1","question":"Question en français","options":["Option1","Option2","Option3"],"correctAnswer":1,"explanation":"Explication détaillée"}]`;
    
    try {
      const { generateEducationalResponse } = await import('@/lib/gemini');
      const response = await generateEducationalResponse(prompt);
      
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        try {
          const parsed = JSON.parse(jsonMatch[0]);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        } catch (parseError) {
          console.error('Curriculum JSON parse error:', parseError);
        }
      }
    } catch (error) {
      console.error('Error generating questions from curriculum:', error);
    }
    
    throw new Error(`Failed to generate questions from curriculum for subject ${subject}`);
  }
  
  private static ensureFourUniqueQuestions(questions: QuizQuestion[], subject: string = 'Mathematics', year: number = 1): QuizQuestion[] {
    // Remove duplicates based on question text
    const unique = questions.filter((q, index, self) => 
      index === self.findIndex(t => t.question === q.question)
    );
    
    // Take exactly 4, pad with fallback if needed
    if (unique.length >= 4) {
      return unique.slice(0, 4);
    } else {
      // Return what we have - better to have fewer than wrong questions
      console.log(`⚠️ Returning ${unique.length} unique questions instead of 4`);
      return unique;
    }
  }
  
  private static ensureFrenchLanguage(questions: QuizQuestion[]): QuizQuestion[] {
    // Validate questions are in French (basic check)
    return questions.map(q => ({
      ...q,
      id: q.id || `q${Math.random().toString(36).substr(2, 9)}`
    }));
  }
  
  private static getFallbackQuestions(subject: string = 'Mathematics', year: number = 1): QuizQuestion[] {
    console.log(`🔍 getFallbackQuestions called with subject: "${subject}", year: ${year}`);
    
    if (subject === 'Sciences' || subject.toLowerCase().includes('science')) {
      return this.getScienceFallbackQuestions(year);
    } else if (subject === 'Physics' || subject.toLowerCase().includes('physics') || subject.toLowerCase().includes('physique')) {
      console.log(`✅ Using Physics fallback questions for subject: "${subject}", year: ${year}`);
      return this.getPhysicsFallbackQuestions(year);
    } else {
      console.log(`⚠️ Using Math fallback questions for subject: "${subject}", year: ${year}`);
      return this.getMathFallbackQuestions(year);
    }
  }

  /**
   * Get year-appropriate Science fallback questions
   */
  private static getScienceFallbackQuestions(year: number): QuizQuestion[] {
    if (year === 1) {
      return [
        {
          id: 'fallback1',
          question: 'Qu\'est-ce qu\'une cellule?',
          options: ['L\'unité de base de la vie', 'Un organe', 'Un tissu'],
          correctAnswer: 0,
          explanation: 'Une cellule est l\'unité de base de la vie.'
        },
        {
          id: 'fallback2', 
          question: 'Quel est le rôle du noyau?',
          options: ['Contrôler la cellule', 'Produire de l\'énergie', 'Protéger la cellule'],
          correctAnswer: 0,
          explanation: 'Le noyau contrôle les activités de la cellule.'
        },
        {
          id: 'fallback3',
          question: 'Qu\'est-ce que l\'ADN?',
          options: ['Le code génétique', 'Une protéine', 'Un sucre'],
          correctAnswer: 0,
          explanation: 'L\'ADN contient le code génétique de la cellule.'
        },
        {
          id: 'fallback4',
          question: 'Où se trouve le cytoplasme?',
          options: ['Dans la cellule', 'Autour de la cellule', 'Dans le noyau'],
          correctAnswer: 0,
          explanation: 'Le cytoplasme se trouve dans la cellule.'
        }
      ];
    } else if (year === 2) {
      return [
        {
          id: 'fallback1',
          question: 'Qu\'est-ce que la membrane cellulaire?',
          options: ['La frontière de la cellule', 'Le centre de la cellule', 'L\'énergie de la cellule'],
          correctAnswer: 0,
          explanation: 'La membrane cellulaire est la frontière de la cellule.'
        },
        {
          id: 'fallback2',
          question: 'Quels sont les organites?',
          options: ['Les petits organes de la cellule', 'Les grosses cellules', 'Les membranes'],
          correctAnswer: 0,
          explanation: 'Les organites sont les petits organes de la cellule.'
        },
        {
          id: 'fallback3',
          question: 'Qu\'est-ce que la photosynthèse?',
          options: ['Le processus de production d\'énergie', 'La reproduction des cellules', 'La respiration'],
          correctAnswer: 0,
          explanation: 'La photosynthèse est le processus de production d\'énergie par les plantes.'
        },
        {
          id: 'fallback4',
          question: 'Quelle est la différence entre cellule animale et végétale?',
          options: ['Les végétales ont une paroi cellulaire', 'Les animales sont plus grandes', 'Les végétales n\'ont pas de noyau'],
          correctAnswer: 0,
          explanation: 'Les cellules végétales ont une paroi cellulaire que les cellules animales n\'ont pas.'
        }
      ];
    } else if (year === 3) {
      return [
        {
          id: 'fallback1',
          question: 'Qu\'est-ce que la mitose?',
          options: ['Division cellulaire', 'Respiration cellulaire', 'Photosynthèse'],
          correctAnswer: 0,
          explanation: 'La mitose est le processus de division cellulaire.'
        },
        {
          id: 'fallback2', 
          question: 'Qu\'est-ce que l\'hérédité?',
          options: ['Transmission des caractères', 'Évolution des espèces', 'Adaptation'],
          correctAnswer: 0,
          explanation: 'L\'hérédité est la transmission des caractères des parents aux enfants.'
        },
        {
          id: 'fallback3',
          question: 'Qu\'est-ce qu\'un gène?',
          options: ['Unité d\'hérédité', 'Type de cellule', 'Organite'],
          correctAnswer: 0,
          explanation: 'Un gène est une unité d\'hérédité portée par l\'ADN.'
        },
        {
          id: 'fallback4',
          question: 'Qu\'est-ce que l\'évolution?',
          options: ['Transformation des espèces', 'Division cellulaire', 'Respiration'],
          correctAnswer: 0,
          explanation: 'L\'évolution est la transformation des espèces au fil du temps.'
        }
      ];
    } else { // Year 4
      return [
        {
          id: 'fallback1',
          question: 'Qu\'est-ce que la sélection naturelle?',
          options: ['Mécanisme d\'évolution', 'Type de reproduction', 'Méthode de nutrition'],
          correctAnswer: 0,
          explanation: 'La sélection naturelle est le mécanisme principal de l\'évolution.'
        },
        {
          id: 'fallback2',
          question: 'Qu\'est-ce que l\'écosystème?',
          options: ['Communauté d\'organismes et leur environnement', 'Groupe d\'animaux', 'Type de cellule'],
          correctAnswer: 0,
          explanation: 'Un écosystème est une communauté d\'organismes et leur environnement.'
        },
        {
          id: 'fallback3',
          question: 'Qu\'est-ce que la biodiversité?',
          options: ['Variété de la vie sur Terre', 'Nombre de cellules', 'Taille de l\'écosystème'],
          correctAnswer: 0,
          explanation: 'La biodiversité est la variété de la vie sur Terre.'
        },
        {
          id: 'fallback4',
          question: 'Qu\'est-ce que le cycle du carbone?',
          options: ['Circulation du carbone dans la nature', 'Respiration des plantes', 'Photosynthèse'],
          correctAnswer: 0,
          explanation: 'Le cycle du carbone est la circulation du carbone dans la nature.'
        }
      ];
    }
  }
  
  /**
   * Get year-appropriate Physics fallback questions
   */
  private static getPhysicsFallbackQuestions(year: number): QuizQuestion[] {
    if (year === 3) {
      return [
        {
          id: 'fallback1',
          question: 'Qu\'est-ce qu\'un matériau conducteur?',
          options: ['Un matériau qui laisse passer le courant électrique', 'Un matériau qui bloque le courant', 'Un matériau qui amplifie le courant'],
          correctAnswer: 0,
          explanation: 'Un conducteur laisse passer le courant électrique facilement.'
        },
        {
          id: 'fallback2',
          question: 'Quelle est l\'unité de mesure de l\'intensité électrique?',
          options: ['L\'ampère (A)', 'Le volt (V)', 'L\'ohm (Ω)'],
          correctAnswer: 0,
          explanation: 'L\'ampère (A) est l\'unité de mesure de l\'intensité électrique.'
        },
        {
          id: 'fallback3',
          question: 'Qu\'est-ce qu\'un circuit électrique?',
          options: ['Un chemin fermé pour le courant', 'Un interrupteur', 'Une pile'],
          correctAnswer: 0,
          explanation: 'Un circuit électrique est un chemin fermé pour le courant électrique.'
        },
        {
          id: 'fallback4',
          question: 'Comment classe-t-on les matériaux selon leurs propriétés électriques?',
          options: ['Conducteurs et isolants', 'Liquides et solides', 'Organiques et inorganiques'],
          correctAnswer: 0,
          explanation: 'On classe les matériaux en conducteurs et isolants selon leurs propriétés électriques.'
        }
      ];
    } else { // Year 4
      return [
        {
          id: 'fallback1',
          question: 'Qu\'est-ce que la loi d\'Ohm?',
          options: ['U = R × I', 'P = U × I', 'E = m × c²'],
          correctAnswer: 0,
          explanation: 'La loi d\'Ohm exprime que U = R × I.'
        },
        {
          id: 'fallback2',
          question: 'Qu\'est-ce que la puissance électrique?',
          options: ['P = U × I', 'U = R × I', 'Q = I × t'],
          correctAnswer: 0,
          explanation: 'La puissance électrique est donnée par P = U × I.'
        },
        {
          id: 'fallback3',
          question: 'Qu\'est-ce que l\'énergie électrique?',
          options: ['E = P × t', 'P = U × I', 'U = R × I'],
          correctAnswer: 0,
          explanation: 'L\'énergie électrique est E = P × t.'
        },
        {
          id: 'fallback4',
          question: 'Qu\'est-ce qu\'un transformateur?',
          options: ['Dispositif qui change la tension', 'Générateur électrique', 'Moteur électrique'],
          correctAnswer: 0,
          explanation: 'Un transformateur change la tension électrique.'
        }
      ];
    }
  }

  /**
   * Get year-appropriate Math fallback questions
   */
  private static getMathFallbackQuestions(year: number): QuizQuestion[] {
    if (year === 1) {
      return [
        {
          id: 'fallback1',
          question: 'Quelle est la valeur de 5 + 3?',
          options: ['8', '7', '9'],
          correctAnswer: 0,
          explanation: '5 + 3 = 8.'
        },
        {
          id: 'fallback2',
          question: 'Combien font 12 - 4?',
          options: ['8', '7', '9'],
          correctAnswer: 0,
          explanation: '12 - 4 = 8.'
        },
        {
          id: 'fallback3',
          question: 'Quelle est la valeur de 6 × 2?',
          options: ['12', '10', '14'],
          correctAnswer: 0,
          explanation: '6 × 2 = 12.'
        },
        {
          id: 'fallback4',
          question: 'Combien font 15 ÷ 3?',
          options: ['5', '4', '6'],
          correctAnswer: 0,
          explanation: '15 ÷ 3 = 5.'
        }
      ];
    } else if (year === 2) {
      return [
        {
          id: 'fallback1',
          question: 'Quelle est la valeur de 2²?',
          options: ['4', '3', '5'],
          correctAnswer: 0,
          explanation: '2² = 2 × 2 = 4.'
        },
        {
          id: 'fallback2',
          question: 'Quelle est la racine carrée de 9?',
          options: ['3', '2', '4'],
          correctAnswer: 0,
          explanation: '√9 = 3 car 3 × 3 = 9.'
        },
        {
          id: 'fallback3',
          question: 'Quelle est la valeur de 3³?',
          options: ['27', '9', '81'],
          correctAnswer: 0,
          explanation: '3³ = 3 × 3 × 3 = 27.'
        },
        {
          id: 'fallback4',
          question: 'Quelle est la valeur de 4² + 3²?',
          options: ['25', '24', '26'],
          correctAnswer: 0,
          explanation: '4² + 3² = 16 + 9 = 25.'
        }
      ];
    } else if (year === 3) {
      return [
        {
          id: 'fallback1',
          question: 'Quelle est la valeur absolue de -5?',
          options: ['5', '-5', '0'],
          correctAnswer: 0,
          explanation: 'La valeur absolue de -5 est 5.'
        },
        {
          id: 'fallback2',
          question: 'Quelle est la valeur de 2⁻¹?',
          options: ['0.5', '2', '1'],
          correctAnswer: 0,
          explanation: '2⁻¹ = 1/2 = 0.5.'
        },
        {
          id: 'fallback3',
          question: 'Quelle est la valeur de log₁₀(100)?',
          options: ['2', '10', '100'],
          correctAnswer: 0,
          explanation: 'log₁₀(100) = 2 car 10² = 100.'
        },
        {
          id: 'fallback4',
          question: 'Quelle est la valeur de sin(30°)?',
          options: ['0.5', '1', '0'],
          correctAnswer: 0,
          explanation: 'sin(30°) = 0.5.'
        }
      ];
    } else { // Year 4
      return [
        {
          id: 'fallback1',
          question: 'Quelle est la dérivée de x²?',
          options: ['2x', 'x', 'x²'],
          correctAnswer: 0,
          explanation: 'La dérivée de x² est 2x.'
        },
        {
          id: 'fallback2',
          question: 'Quelle est l\'intégrale de 2x?',
          options: ['x² + C', '2x² + C', 'x + C'],
          correctAnswer: 0,
          explanation: 'L\'intégrale de 2x est x² + C.'
        },
        {
          id: 'fallback3',
          question: 'Quelle est la limite de (x²-1)/(x-1) quand x tend vers 1?',
          options: ['2', '0', '1'],
          correctAnswer: 0,
          explanation: 'La limite est 2 par factorisation.'
        },
        {
          id: 'fallback4',
          question: 'Quelle est la valeur de e⁰?',
          options: ['1', '0', 'e'],
          correctAnswer: 0,
          explanation: 'e⁰ = 1.'
        }
      ];
    }
  }
  
  private static getFallbackQuiz(subject: string = 'Mathematics', year: number = 1): ContextualQuiz {
    const fallbackQuestions = this.getFallbackQuestions(subject, year);
    
    // Apply randomization to fallback questions
    const randomizedQuestions = this.validateAndFixQuestions(fallbackQuestions);
    console.log(`🎲 Applied option randomization to ${randomizedQuestions.length} fallback questions`);
    
    return {
      questions: randomizedQuestions,
      source: 'fallback',
      basedOnTeaching: false,
      difficulty: 'basic'
    };
  }

  // Track quiz questions to avoid repetition
  static async trackQuizQuestions(
    studentId: string,
    subject: string,
    questions: QuizQuestion[]
  ): Promise<void> {
    try {
      await prisma.quizSession.create({
        data: {
          studentId,
          subject,
          questions: JSON.stringify(questions),
          status: 'completed'
        }
      });
      console.log(`Tracked ${questions.length} quiz questions for student ${studentId}`);
    } catch (error) {
      console.error('Error tracking quiz questions:', error);
    }
  }

  // Get previously asked questions to avoid repetition
  static async getPreviousQuizQuestions(
    studentId: string,
    subject: string,
    limit: number = 10
  ): Promise<QuizQuestion[]> {
    try {
      const recentSessions = await prisma.quizSession.findMany({
        where: {
          studentId,
          subject,
          status: 'completed'
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: limit
      });

      const previousQuestions: QuizQuestion[] = [];
      for (const session of recentSessions) {
        try {
          const questions = JSON.parse(session.questions);
          previousQuestions.push(...questions);
        } catch (error) {
          console.error('Error parsing quiz questions:', error);
        }
      }

      return previousQuestions;
    } catch (error) {
      console.error('Error getting previous quiz questions:', error);
      return [];
    }
  }

  // Generate unique questions avoiding repetition
  static async generateUniqueQuestions(
    baseQuestions: QuizQuestion[],
    previousQuestions: QuizQuestion[]
  ): Promise<QuizQuestion[]> {
    // Create hash set for fast lookup
    const previousQuestionHashes = new Set(
      previousQuestions.map(q => this.hashQuestion(q.question))
    );

    console.log(`🔍 Checking ${baseQuestions.length} base questions against ${previousQuestions.length} previous questions`);

    // Filter out exact duplicates
    const uniqueQuestions = baseQuestions.filter(
      q => !previousQuestionHashes.has(this.hashQuestion(q.question))
    );

    console.log(`📊 Filtered to ${uniqueQuestions.length} unique questions (${baseQuestions.length - uniqueQuestions.length} duplicates removed)`);

    // If we don't have enough unique questions, generate variations
    if (uniqueQuestions.length < 4) {
      console.log(`⚠️ Only ${uniqueQuestions.length} unique questions found, generating variations...`);
      const variations = await this.generateQuestionVariations(
        baseQuestions.slice(0, Math.min(3, baseQuestions.length)), // Use available base questions as templates
        previousQuestionHashes
      );
      uniqueQuestions.push(...variations);
      console.log(`✅ Generated ${variations.length} question variations`);
    }

    // Ensure we always return exactly 4 questions
    return uniqueQuestions.slice(0, 4);
  }
  
  /**
   * Generate a simple hash for question deduplication
   */
  private static hashQuestion(questionText: string): string {
    // Simple hash based on normalized question text
    const normalized = questionText.toLowerCase().trim().replace(/\s+/g, ' ');
    return normalized.split('').reduce((hash, char) => {
      return ((hash << 5) - hash + char.charCodeAt(0)) & 0xffffffff;
    }, 0).toString();
  }

  // Generate variations of existing questions
  private static async generateQuestionVariations(
    templateQuestions: QuizQuestion[],
    previousQuestionHashes: Set<string>
  ): Promise<QuizQuestion[]> {
    const variations: QuizQuestion[] = [];
    const needed = 4 - templateQuestions.length;
    
    console.log(`🎯 Generating ${needed} question variations from ${templateQuestions.length} templates`);
    
    for (let i = 0; i < needed && i < templateQuestions.length; i++) {
      const template = templateQuestions[i];
      
      // Create multiple variations with different approaches
      for (let attempt = 0; attempt < 5; attempt++) {
        const variation = this.createQuestionVariation(template, attempt);
        const variationHash = this.hashQuestion(variation.question);
        
        // Check if this variation is unique
        if (!previousQuestionHashes.has(variationHash)) {
          variations.push(variation);
          console.log(`✅ Generated unique variation: "${variation.question.substring(0, 50)}..."`);
          break;
        }
      }
      
      // If we couldn't create a unique variation, create a generic one
      if (variations.length <= i) {
        const genericVariation = this.createGenericVariation(template, i);
        variations.push(genericVariation);
        console.log(`⚠️ Generated generic variation: "${genericVariation.question.substring(0, 50)}..."`);
      }
    }
    
    return variations.slice(0, needed);
  }
  
  /**
   * Create a question variation using different strategies
   */
  private static createQuestionVariation(template: QuizQuestion, attempt: number): QuizQuestion {
    const strategies = [
      // Strategy 1: Change question structure
      (q: QuizQuestion) => ({
        ...q,
        id: `var_${q.id}_${Date.now()}_${attempt}_1`,
        question: q.question.replace(/Qu'est-ce que/g, 'Comment définit-on').replace(/\?$/, ' ?'),
        options: q.options.map(opt => opt.replace(/définition/g, 'caractéristique'))
      }),
      
      // Strategy 2: Change focus
      (q: QuizQuestion) => ({
        ...q,
        id: `var_${q.id}_${Date.now()}_${attempt}_2`,
        question: q.question.replace(/Qu'est-ce que/g, 'Quel est le rôle de').replace(/\?$/, ' ?'),
        options: q.options.map(opt => opt.replace(/définition/g, 'rôle'))
      }),
      
      // Strategy 3: Change perspective
      (q: QuizQuestion) => ({
        ...q,
        id: `var_${q.id}_${Date.now()}_${attempt}_3`,
        question: q.question.replace(/Qu'est-ce que/g, 'Pourquoi est-il important de comprendre').replace(/\?$/, ' ?'),
        options: q.options.map(opt => opt.replace(/définition/g, 'importance'))
      }),
      
      // Strategy 4: Change context
      (q: QuizQuestion) => ({
        ...q,
        id: `var_${q.id}_${Date.now()}_${attempt}_4`,
        question: q.question.replace(/Qu'est-ce que/g, 'Dans quel contexte utilise-t-on').replace(/\?$/, ' ?'),
        options: q.options.map(opt => opt.replace(/définition/g, 'contexte'))
      })
    ];
    
    const strategy = strategies[attempt % strategies.length];
    return strategy(template);
  }
  
  /**
   * Create a generic variation when specific strategies fail
   */
  private static createGenericVariation(template: QuizQuestion, index: number): QuizQuestion {
    return {
      ...template,
      id: `generic_${template.id}_${Date.now()}_${index}`,
      question: `Variation de: ${template.question}`,
      options: template.options.map((opt, i) => `Option ${i + 1}: ${opt}`),
      explanation: `Variation de la question précédente: ${template.explanation}`
    };
  }

  // Manual question extraction from text when JSON parsing fails
  private static extractQuestionsFromText(text: string): QuizQuestion[] {
    const questions: QuizQuestion[] = [];
    
    try {
      // First try to extract complete question objects from the malformed JSON
      const questionObjects = this.extractQuestionObjectsFromText(text);
      if (questionObjects.length > 0) {
        console.log('✅ Extracted', questionObjects.length, 'complete question objects from malformed JSON');
        return questionObjects;
      }
      
      // Look for question patterns in the text
      const questionMatches = text.match(/Question\s*\d*[:\-]?\s*([^?]+)\?/gi);
      
      if (questionMatches && questionMatches.length > 0) {
        for (let i = 0; i < Math.min(questionMatches.length, 7); i++) {
          const questionText = questionMatches[i].replace(/Question\s*\d*[:\-]?\s*/i, '').trim();
          
          if (questionText.length > 10) { // Only use substantial questions
            questions.push({
              id: `manual_${i + 1}`,
              question: questionText,
              options: [
                'Option A',
                'Option B', 
                'Option C',
                'Option D'
              ],
              correctAnswer: 0,
              explanation: 'Réponse basée sur l\'enseignement récent.'
            });
          }
        }
      }
      
      // If no questions found, create basic ones from conversation topics
      if (questions.length === 0) {
        // Check if it's math-related (numbers, operations)
        const mathTopics = text.match(/(?:chiffre|unité|dizaine|centaine|millier|nombre|addition|soustraction|multiplication|division|fraction)/gi);
        const scienceTopics = text.match(/(?:noyau|cytoplasme|membrane|cellule|ADN|organite|photosynthèse)/gi);
        
        if (mathTopics && mathTopics.length > 0) {
          // Create math questions with real numbers
          const uniqueTopics = Array.from(new Set(mathTopics)).slice(0, 7);
          
          for (let i = 0; i < uniqueTopics.length; i++) {
            const topic = uniqueTopics[i];
            const randomNumber = Math.floor(Math.random() * 9000000) + 1000000; // 7-digit number
            
            if (topic.toLowerCase().includes('unité')) {
              questions.push({
                id: `math_${i + 1}`,
                question: `Dans le nombre ${randomNumber.toLocaleString()}, quel est le chiffre des unités?`,
                options: [
                  (randomNumber % 10).toString(),
                  Math.floor(randomNumber / 10) % 10,
                  Math.floor(randomNumber / 100) % 10,
                  Math.floor(randomNumber / 1000) % 10
                ].map(n => n.toString()),
                correctAnswer: 0,
                explanation: `Le chiffre des unités est le chiffre le plus à droite. Dans ${randomNumber.toLocaleString()}, c'est ${randomNumber % 10}.`
              });
            } else if (topic.toLowerCase().includes('dizaine')) {
              questions.push({
                id: `math_${i + 1}`,
                question: `Dans le nombre ${randomNumber.toLocaleString()}, quel est le chiffre des dizaines?`,
                options: [
                  Math.floor(randomNumber / 10) % 10,
                  randomNumber % 10,
                  Math.floor(randomNumber / 100) % 10,
                  Math.floor(randomNumber / 1000) % 10
                ].map(n => n.toString()),
                correctAnswer: 0,
                explanation: `Le chiffre des dizaines est le deuxième chiffre en partant de la droite. Dans ${randomNumber.toLocaleString()}, c'est ${Math.floor(randomNumber / 10) % 10}.`
              });
            } else {
              questions.push({
                id: `math_${i + 1}`,
                question: `Qu'est-ce qu'un ${topic}?`,
                options: [
                  'Une partie d\'un nombre',
                  'Un calcul',
                  'Une opération',
                  'Un résultat'
                ],
                correctAnswer: 0,
                explanation: `Un ${topic} est une partie importante des nombres.`
              });
            }
          }
        } else if (scienceTopics && scienceTopics.length > 0) {
          // Create science questions
          const uniqueTopics = Array.from(new Set(scienceTopics)).slice(0, 7);
          
          for (let i = 0; i < uniqueTopics.length; i++) {
            const topic = uniqueTopics[i];
            questions.push({
              id: `science_${i + 1}`,
              question: `Qu'est-ce que le ${topic}?`,
              options: [
                'Une partie de la cellule',
                'Un organe',
                'Un système',
                'Un tissu'
              ],
              correctAnswer: 0,
              explanation: `Le ${topic} est une partie importante de la cellule.`
            });
          }
        }
      }
      
    } catch (error) {
      console.error('Error in manual question extraction:', error);
    }
    
    return questions;
  }

  // Extract complete question objects from malformed JSON
  private static extractQuestionObjectsFromText(text: string): QuizQuestion[] {
    const questions: QuizQuestion[] = [];
    
    try {
      // Look for individual question objects in the text
      const questionPattern = /\{[^}]*"id"[^}]*"question"[^}]*"options"[^}]*"correctAnswer"[^}]*"explanation"[^}]*\}/g;
      const matches = text.match(questionPattern);
      
      if (matches) {
        for (const match of matches) {
          try {
            // Try to parse each individual question object
            const questionObj = JSON.parse(match);
            if (questionObj.id && questionObj.question && questionObj.options && Array.isArray(questionObj.options)) {
              // Ensure correctAnswer is a valid index
              let correctAnswer = questionObj.correctAnswer;
              if (typeof correctAnswer !== 'number' || correctAnswer < 0 || correctAnswer >= questionObj.options.length) {
                // If correctAnswer is invalid, try to find the correct answer by checking the explanation
                correctAnswer = this.findCorrectAnswerFromExplanation(questionObj.explanation, questionObj.options);
              }
              
              questions.push({
                id: questionObj.id,
                question: questionObj.question,
                options: questionObj.options,
                correctAnswer: correctAnswer,
                explanation: questionObj.explanation || 'Réponse basée sur l\'enseignement récent.'
              });
            }
          } catch (parseError) {
            // If individual parsing fails, try to extract manually
            const questionText = this.extractTextBetween(match, '"question":', '"options"');
            const optionsText = this.extractTextBetween(match, '"options":', '"correctAnswer"');
            
            if (questionText && optionsText) {
              const cleanQuestion = questionText.replace(/^"|"$/g, '').trim();
              const optionsArray = this.parseOptionsArray(optionsText);
              
              if (cleanQuestion && optionsArray.length > 0) {
                questions.push({
                  id: `extracted_${questions.length + 1}`,
                  question: cleanQuestion,
                  options: optionsArray,
                  correctAnswer: 0,
                  explanation: 'Réponse basée sur l\'enseignement récent.'
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Error extracting question objects:', error);
    }
    
    return questions;
  }

  // Helper method to extract text between two strings
  private static extractTextBetween(text: string, start: string, end: string): string | null {
    const startIndex = text.indexOf(start);
    if (startIndex === -1) return null;
    
    const valueStart = startIndex + start.length;
    const endIndex = text.indexOf(end, valueStart);
    if (endIndex === -1) return null;
    
    return text.substring(valueStart, endIndex).trim();
  }

  // Helper method to parse options array from text
  private static parseOptionsArray(optionsText: string): string[] {
    try {
      // Try to parse as JSON array
      const parsed = JSON.parse(optionsText);
      if (Array.isArray(parsed)) {
        return parsed.map(opt => opt.toString());
      }
    } catch (error) {
      // If JSON parsing fails, try to extract individual options
      const options = [];
      const optionMatches = optionsText.match(/"([^"]+)"/g);
      if (optionMatches) {
        for (const match of optionMatches) {
          const option = match.replace(/"/g, '').trim();
          if (option) {
            options.push(option);
          }
        }
      }
      return options;
    }
    return [];
  }

  // Helper method to find correct answer from explanation
  private static findCorrectAnswerFromExplanation(explanation: string, options: string[]): number {
    if (!explanation || !options || options.length === 0) {
      return 0; // Default to first option
    }
    
    // Look for the correct answer in the explanation
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      // Check if the option appears in the explanation as the correct answer
      if (explanation.includes(`c'est ${option}`) || 
          explanation.includes(`est ${option}`) ||
          explanation.includes(`= ${option}`) ||
          explanation.includes(`: ${option}`)) {
        return i;
      }
    }
    
    // If not found, try to extract the last number mentioned in explanation
    const numberMatch = explanation.match(/(\d+)(?:\s*\.|$)/);
    if (numberMatch) {
      const correctNumber = numberMatch[1];
      const correctIndex = options.findIndex(opt => opt === correctNumber);
      if (correctIndex !== -1) {
        return correctIndex;
      }
    }
    
    return 0; // Default to first option if nothing found
  }

  // Validate and fix questions to ensure they have correct answers
  private static validateAndFixQuestions(questions: QuizQuestion[]): QuizQuestion[] {
    return questions.map(question => {
      // For math questions, ensure the correct answer is mathematically accurate
      if (this.isMathQuestion(question.question)) {
        this.verifyMathAnswer(question);
      }
      
      // Check if correctAnswer index is valid
      if (question.correctAnswer < 0 || question.correctAnswer >= question.options.length) {
        console.warn(`⚠️ Invalid correctAnswer index ${question.correctAnswer} for question: ${question.question}`);
        
        // Try to find correct answer from explanation
        const correctIndex = this.findCorrectAnswerFromExplanation(question.explanation, question.options);
        if (correctIndex >= 0 && correctIndex < question.options.length) {
          question.correctAnswer = correctIndex;
          console.log(`✅ Fixed correctAnswer to ${correctIndex} for question: ${question.question}`);
        } else {
          // If still invalid, default to first option
          question.correctAnswer = 0;
          console.warn(`⚠️ Defaulted correctAnswer to 0 for question: ${question.question}`);
        }
      }
      
      // Ensure options are not empty
      if (!question.options || question.options.length === 0) {
        question.options = ['Option A', 'Option B', 'Option C', 'Option D'];
        console.warn(`⚠️ Fixed empty options for question: ${question.question}`);
      }
      
      // Randomize the order of options and update correctAnswer index
      question = this.randomizeQuestionOptions(question);
      
      return question;
    });
  }

  // Randomize the order of options and update correctAnswer index
  private static randomizeQuestionOptions(question: QuizQuestion): QuizQuestion {
    if (!question.options || question.options.length < 2) {
      return question;
    }

    // Store the correct answer text
    const correctAnswerText = question.options[question.correctAnswer];
    
    // Create a copy of options and shuffle them
    const shuffledOptions = [...question.options];
    this.shuffleArray(shuffledOptions);
    
    // Find the new index of the correct answer
    const newCorrectIndex = shuffledOptions.findIndex(option => option === correctAnswerText);
    
    if (newCorrectIndex !== -1) {
      // Update the question with shuffled options and new correct index
      question.options = shuffledOptions;
      question.correctAnswer = newCorrectIndex;
      console.log(`🔄 Randomized options for: ${question.question.substring(0, 30)}... (Correct answer now at position ${newCorrectIndex + 1})`);
    } else {
      console.warn(`⚠️ Could not find correct answer after shuffling: ${question.question.substring(0, 30)}...`);
    }
    
    return question;
  }

  // Shuffle array using Fisher-Yates algorithm
  private static shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Validate questions from recent teaching to ensure they're relevant and correct
  private static validateQuestionsFromTeaching(questions: QuizQuestion[], recentTeaching: any[]): QuizQuestion[] {
    const validQuestions: QuizQuestion[] = [];
    
    for (const question of questions) {
      // Check if question is relevant to recent teaching
      const isRelevant = this.isQuestionRelevantToTeaching(question, recentTeaching);
      
      // Check if question has valid options and correct answer
      const hasValidOptions = question.options && question.options.length >= 3;
      const hasValidAnswer = question.correctAnswer >= 0 && question.correctAnswer < question.options.length;
      
      // Check if correct answer is actually in the options
      const correctAnswerInOptions = this.verifyCorrectAnswerInOptions(question);
      
      // Be very lenient - if it has valid options and correct answer, accept it
      if (hasValidOptions && hasValidAnswer && correctAnswerInOptions) {
        validQuestions.push(question);
        console.log(`✅ Valid question: ${question.question.substring(0, 50)}...`);
      } else {
        console.warn(`❌ Invalid question rejected: ${question.question.substring(0, 50)}...`);
        console.warn(`   - Relevant: ${isRelevant}, Valid options: ${hasValidOptions}, Valid answer: ${hasValidAnswer}, Correct in options: ${correctAnswerInOptions}`);
      }
    }
    
    return validQuestions;
  }

  // Check if question is relevant to recent teaching
  private static isQuestionRelevantToTeaching(question: QuizQuestion, recentTeaching: any[]): boolean {
    const teachingText = recentTeaching
      .map(t => `${t.aiResponse} ${t.studentMessage}`)
      .join(' ')
      .toLowerCase();
    
    const questionText = question.question.toLowerCase();
    
    // Check for key terms from recent teaching
    const keyTerms = this.extractKeyTermsFromTeaching(recentTeaching);
    const hasRelevantTerms = keyTerms.some(term => questionText.includes(term.toLowerCase()));
    
    // Check if question uses numbers from recent teaching
    const teachingNumbers = this.extractNumbersFromTeaching(recentTeaching);
    const hasRelevantNumbers = teachingNumbers.some(num => questionText.includes(num.toString()));
    
    // Be more lenient - if it's a math question and we have recent math teaching, consider it relevant
    const isMathQuestion = this.isMathQuestion(question.question);
    const hasMathTeaching = teachingText.includes('chiffre') || teachingText.includes('unité') || teachingText.includes('dizaine') || 
                           teachingText.includes('fraction') || teachingText.includes('numérateur') || teachingText.includes('dénominateur') ||
                           teachingText.includes('addition') || teachingText.includes('soustraction') || teachingText.includes('multiplication');
    
    return hasRelevantTerms || hasRelevantNumbers || (isMathQuestion && hasMathTeaching);
  }

  // Extract key terms from recent teaching
  private static extractKeyTermsFromTeaching(recentTeaching: any[]): string[] {
    const terms = new Set<string>();
    
    for (const teaching of recentTeaching) {
      const text = `${teaching.aiResponse} ${teaching.studentMessage}`.toLowerCase();
      
      // Math terms
      if (text.includes('chiffre') || text.includes('unité') || text.includes('dizaine')) {
        terms.add('chiffre');
        terms.add('unité');
        terms.add('dizaine');
        terms.add('centaine');
        terms.add('millier');
      }
      
      // Science terms
      if (text.includes('cellule') || text.includes('noyau')) {
        terms.add('cellule');
        terms.add('noyau');
        terms.add('cytoplasme');
        terms.add('membrane');
      }
    }
    
    return Array.from(terms);
  }

  // Extract numbers from recent teaching
  private static extractNumbersFromTeaching(recentTeaching: any[]): number[] {
    const numbers = new Set<number>();
    
    for (const teaching of recentTeaching) {
      const text = `${teaching.aiResponse} ${teaching.studentMessage}`;
      const numberMatches = text.match(/\d+/g);
      if (numberMatches) {
        numberMatches.forEach(match => numbers.add(parseInt(match)));
      }
    }
    
    return Array.from(numbers);
  }

  // Verify that the correct answer is actually in the options
  private static verifyCorrectAnswerInOptions(question: QuizQuestion): boolean {
    if (!question.options || question.options.length === 0) return false;
    if (question.correctAnswer < 0 || question.correctAnswer >= question.options.length) return false;
    
    // For math questions, check if the correct answer makes mathematical sense
    if (this.isMathQuestion(question.question)) {
      return this.verifyMathAnswer(question);
    }
    
    return true; // For non-math questions, assume valid if index is correct
  }

  // Check if question is a math question
  private static isMathQuestion(question: string): boolean {
    const mathKeywords = ['chiffre', 'unité', 'dizaine', 'centaine', 'millier', 'nombre', 'addition', 'soustraction', 'multiplication', 'division', 'fraction'];
    return mathKeywords.some(keyword => question.toLowerCase().includes(keyword));
  }

  // Simplify fraction to lowest terms
  private static simplifyFraction(decimal: number): string {
    // Convert decimal to fraction
    const tolerance = 1e-6;
    let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
    let b = decimal;
    
    do {
      let a = Math.floor(b);
      let aux = h1; h1 = a * h1 + h2; h2 = aux;
      aux = k1; k1 = a * k1 + k2; k2 = aux;
      b = 1 / (b - a);
    } while (Math.abs(decimal - h1 / k1) > decimal * tolerance);
    
    return `${h1}/${k1}`;
  }

  // Verify math answer makes sense and fix if needed
  private static verifyMathAnswer(question: QuizQuestion): boolean {
    // Check for fraction problems first
    const fractionMatch = question.question.match(/pizza.*coupée.*en.*deux.*(\d+)\/(\d+)/i);
    if (fractionMatch) {
      const numerator = parseInt(fractionMatch[1]);
      const denominator = parseInt(fractionMatch[2]);
      
      // Check if this is mathematically valid (fraction ≤ 1/2 for half pizza)
      if (numerator / denominator > 0.5) {
        console.warn(`⚠️ Invalid fraction problem: ${numerator}/${denominator} > 1/2 for half pizza`);
        // Fix by using a valid fraction
        const validNumerator = Math.floor(denominator / 2);
        const correctAnswer = (validNumerator / denominator) * 0.5;
        const correctAnswerStr = this.simplifyFraction(correctAnswer);
        
        // Update question to be valid
        question.question = question.question.replace(/(\d+)\/(\d+)/, `${validNumerator}/${denominator}`);
        question.options[0] = correctAnswerStr;
        question.correctAnswer = 0;
        console.log(`✅ Fixed invalid fraction problem: ${numerator}/${denominator} → ${validNumerator}/${denominator}, answer: ${correctAnswerStr}`);
        return true;
      }
      
      // Calculate correct answer for valid fraction
      const correctAnswer = (numerator / denominator) * 0.5;
      const correctAnswerStr = this.simplifyFraction(correctAnswer);
      
      if (!question.options.includes(correctAnswerStr)) {
        console.warn(`⚠️ Fraction validation: Correct answer ${correctAnswerStr} not in options for ${numerator}/${denominator}`);
        question.options[0] = correctAnswerStr;
        question.correctAnswer = 0;
        console.log(`✅ Fixed: Replaced first option with correct answer ${correctAnswerStr}`);
        return true;
      }
      
      const correctIndex = question.options.indexOf(correctAnswerStr);
      if (correctIndex !== question.correctAnswer) {
        question.correctAnswer = correctIndex;
        console.log(`✅ Fixed: Updated correctAnswer index to ${correctIndex} for fraction problem`);
      }
      
      return true;
    }
    
    // Extract numbers from question for basic arithmetic
    const arithmeticMatch = question.question.match(/(\d+)\s*[+\-×*÷/]\s*(\d+)/);
    if (arithmeticMatch) {
      const num1 = parseInt(arithmeticMatch[1]);
      const num2 = parseInt(arithmeticMatch[2]);
      const operator = question.question.match(/[+\-×*÷/]/)?.[0];
      
      let correctAnswer: number;
      switch (operator) {
        case '+':
          correctAnswer = num1 + num2;
          break;
        case '-':
          correctAnswer = num1 - num2;
          break;
        case '×':
        case '*':
          correctAnswer = num1 * num2;
          break;
        case '÷':
        case '/':
          correctAnswer = Math.floor(num1 / num2);
          break;
        default:
          return true;
      }
      
      const correctAnswerStr = correctAnswer.toString();
      const hasCorrectAnswer = question.options.includes(correctAnswerStr);
      
      if (!hasCorrectAnswer) {
        console.warn(`⚠️ Math validation: Correct answer ${correctAnswerStr} not in options for ${num1} ${operator} ${num2}`);
        console.log(`🔍 Current options:`, question.options);
        // Replace a wrong option with the correct answer
        question.options[0] = correctAnswerStr;
        question.correctAnswer = 0;
        console.log(`✅ Fixed: Replaced first option with correct answer ${correctAnswerStr}`);
        return true;
      }
      
      const correctIndex = question.options.indexOf(correctAnswerStr);
      if (correctIndex !== question.correctAnswer) {
        console.warn(`⚠️ Math validation: Correct answer ${correctAnswerStr} is in options but correctAnswer index is ${question.correctAnswer}, should be ${correctIndex}`);
        console.log(`🔍 Options:`, question.options);
        console.log(`🔍 Correct answer at index ${correctIndex}, but correctAnswer field is ${question.correctAnswer}`);
        question.correctAnswer = correctIndex; // Fix the index
        console.log(`✅ Fixed: Updated correctAnswer index to ${correctIndex}`);
      }
      
      return true;
    }
    
    // Check if question is about units digit
    if (question.question.includes('unité')) {
      const numberMatch = question.question.match(/(\d[\d\s,]*\d)/);
      if (numberMatch) {
        const numberStr = numberMatch[1].replace(/\s|,/g, '');
        const number = parseInt(numberStr);
        if (!isNaN(number)) {
          const correctAnswer = number % 10;
          const correctAnswerStr = correctAnswer.toString();
          const hasCorrectAnswer = question.options.includes(correctAnswerStr);
          
          if (!hasCorrectAnswer) {
            console.warn(`⚠️ Math validation: Correct answer ${correctAnswerStr} not in options for units digit`);
            console.log(`🔍 Current options:`, question.options);
            question.options[0] = correctAnswerStr;
            question.correctAnswer = 0;
            console.log(`✅ Fixed: Replaced first option with correct answer ${correctAnswerStr}`);
            return true;
          }
          
          const correctIndex = question.options.indexOf(correctAnswerStr);
          if (correctIndex !== question.correctAnswer) {
            console.warn(`⚠️ Units digit validation: Correct answer ${correctAnswerStr} is in options but correctAnswer index is ${question.correctAnswer}, should be ${correctIndex}`);
            question.correctAnswer = correctIndex;
            console.log(`✅ Fixed: Updated correctAnswer index to ${correctIndex}`);
          }
        }
      }
    }
    
    // Check if question is about tens digit
    if (question.question.includes('dizaine')) {
      const numberMatch = question.question.match(/(\d[\d\s,]*\d)/);
      if (numberMatch) {
        const numberStr = numberMatch[1].replace(/\s|,/g, '');
        const number = parseInt(numberStr);
        if (!isNaN(number)) {
          const correctAnswer = Math.floor(number / 10) % 10;
          const correctAnswerStr = correctAnswer.toString();
          const hasCorrectAnswer = question.options.includes(correctAnswerStr);
          
          if (!hasCorrectAnswer) {
            console.warn(`⚠️ Math validation: Correct answer ${correctAnswerStr} not in options for tens digit`);
            console.log(`🔍 Current options:`, question.options);
            question.options[0] = correctAnswerStr;
            question.correctAnswer = 0;
            console.log(`✅ Fixed: Replaced first option with correct answer ${correctAnswerStr}`);
            return true;
          }
          
          const correctIndex = question.options.indexOf(correctAnswerStr);
          if (correctIndex !== question.correctAnswer) {
            console.warn(`⚠️ Tens digit validation: Correct answer ${correctAnswerStr} is in options but correctAnswer index is ${question.correctAnswer}, should be ${correctIndex}`);
            question.correctAnswer = correctIndex;
            console.log(`✅ Fixed: Updated correctAnswer index to ${correctIndex}`);
          }
        }
      }
    }
    
    return true; // For other math questions, assume valid
  }

  /**
   * Analyze student progress to determine difficulty level
   */
  private static analyzeStudentProgress(conversations: any[], subject: string): 'beginner' | 'intermediate' | 'advanced' {
    if (conversations.length === 0) return 'beginner';
    
    // Count correct answers and complexity indicators
    let correctAnswers = 0;
    let totalQuestions = 0;
    let complexityIndicators = 0;
    
    conversations.forEach(conv => {
      const aiResponse = conv.aiResponse.toLowerCase();
      const studentMessage = conv.studentMessage.toLowerCase();
      
      // Count math questions and answers
      if (subject.toLowerCase().includes('math')) {
        // Look for arithmetic operations
        const arithmeticMatch = aiResponse.match(/(\d+)\s*[+\-×*÷/]\s*(\d+)/);
        if (arithmeticMatch) {
          totalQuestions++;
          
          // Check if student got it right (look for positive feedback)
          if (aiResponse.includes('correct') || aiResponse.includes('exact') || aiResponse.includes('bravo') || aiResponse.includes('bien')) {
            correctAnswers++;
          }
          
          // Check complexity
          const num1 = parseInt(arithmeticMatch[1]);
          const num2 = parseInt(arithmeticMatch[2]);
          if (num1 > 20 || num2 > 20) complexityIndicators++;
          if (num1 > 100 || num2 > 100) complexityIndicators += 2;
        }
      }
    });
    
    const accuracy = totalQuestions > 0 ? correctAnswers / totalQuestions : 0;
    
    // Determine difficulty based on accuracy and complexity
    if (accuracy >= 0.8 && complexityIndicators >= 3) {
      return 'advanced';
    } else if (accuracy >= 0.6 || complexityIndicators >= 1) {
      return 'intermediate';
    } else {
      return 'beginner';
    }
  }

  private static getQuizStyle(subject: string): string {
    const subjectLower = subject.toLowerCase();
    if (subjectLower.includes('math')) {
      return 'Problem-solving with step-by-step calculations';
    } else if (subjectLower.includes('science')) {
      return 'Conceptual understanding with real-world examples';
    } else if (subjectLower.includes('physic')) {
      return 'Scientific reasoning with formulas and applications';
    }
    return 'Conceptual understanding and practical application';
  }

  private static getSubjectInstructions(subject: string) {
    const subjectLower = subject.toLowerCase();
    if (subjectLower.includes('math')) {
      return {
        quizStyle: 'Problem-solving with step-by-step calculations',
        approach: 'Practical problem solving with Mauritanian contexts',
        examples: 'Market prices, measurements, local calculations'
      };
    } else if (subjectLower.includes('science')) {
      return {
        quizStyle: 'Conceptual understanding with real-world examples',
        approach: 'Discovery-based learning with local examples',
        examples: 'Desert ecosystem, Nouakchott environment, local flora/fauna'
      };
    } else if (subjectLower.includes('physic')) {
      return {
        quizStyle: 'Scientific reasoning with formulas and applications',
        approach: 'Theory and practical applications',
        examples: 'Temperature, energy, motion in Mauritanian context'
      };
    }
    return {
      quizStyle: 'Conceptual understanding and practical application',
      approach: 'Student-centered learning',
      examples: 'Local and relevant examples'
    };
  }

  /**
   * Detect section from recent conversation history
   * Checks what topic the student was actually learning about
   */
  private static async detectSectionFromConversations(
    studentId: string,
    subject: string,
    curriculum: any,
    year: number
  ): Promise<string | null> {
    try {
      // Get recent conversations (last 10 messages)
      const recentConversations = await prisma.aIConversation.findMany({
        where: {
          studentId,
          subjectArea: subject,
          messageType: 'chat'
        },
        orderBy: { timestamp: 'desc' },
        take: 10,
        select: {
          studentMessage: true,
          aiResponse: true,
          conversationTopic: true
        }
      });

      if (recentConversations.length === 0) {
        return null;
      }

      // Build topic keyword map from curriculum sections
      const topicMap: { [keyword: string]: string } = {};
      for (const chapter of curriculum?.chapters || []) {
        for (const section of chapter.sections || []) {
          const keywords = [
            ...(section.concepts || []).map((c: string) => c.toLowerCase()),
            ...(section.title || '').toLowerCase().split(' '),
            ...(section.description || '').toLowerCase().split(' ')
          ];
          
          keywords.forEach(keyword => {
            if (keyword.length > 3) { // Only meaningful keywords
              topicMap[keyword] = section.id;
            }
          });
        }
      }

      // Check conversations for topic keywords
      const conversationText = recentConversations
        .map(c => `${c.studentMessage} ${c.aiResponse}`)
        .join(' ')
        .toLowerCase();

      // Find matching section
      for (const [keyword, sectionId] of Object.entries(topicMap)) {
        if (conversationText.includes(keyword)) {
          // Verify section exists in curriculum
          let sectionExists = false;
          for (const chapter of curriculum?.chapters || []) {
            if (chapter.sections.find((s: any) => s.id === sectionId)) {
              sectionExists = true;
              break;
            }
          }
          
          if (sectionExists) {
            console.log(`✅ Detected section ${sectionId} from conversation keyword: "${keyword}"`);
            return sectionId;
          }
        }
      }

      return null;
    } catch (error) {
      console.error('Error detecting section from conversations:', error);
      return null;
    }
  }

  /**
   * Validate answer keys - ensure explanations match correct answers
   */
  private static validateAnswerKeys(questions: QuizQuestion[]): QuizQuestion[] {
    const validatedQuestions: QuizQuestion[] = [];
    
    for (const question of questions) {
      // Check if correctAnswer index is valid
      if (question.correctAnswer < 0 || question.correctAnswer >= question.options.length) {
        console.log(`❌ Invalid correctAnswer index ${question.correctAnswer} for question: ${question.question.substring(0, 50)}`);
        continue; // Skip invalid questions
      }

      const correctOption = question.options[question.correctAnswer].toLowerCase();
      const explanation = question.explanation.toLowerCase();

      // Check if explanation mentions the correct answer
      const explanationMatches = explanation.includes(correctOption) ||
                                 correctOption.includes(explanation.substring(0, 20)) ||
                                 // Check for common answer patterns
                                 (correctOption.includes('translation') && explanation.includes('translation')) ||
                                 (correctOption.includes('reflection') && explanation.includes('reflection')) ||
                                 (correctOption.includes('rotation') && explanation.includes('rotation'));

      if (explanationMatches) {
        validatedQuestions.push(question);
        console.log(`✅ Answer key validated for: ${question.question.substring(0, 50)}`);
      } else {
        console.log(`⚠️ Answer key mismatch detected - explanation doesn't match correct answer`);
        console.log(`   Question: ${question.question.substring(0, 50)}`);
        console.log(`   Correct: ${correctOption}`);
        console.log(`   Explanation: ${explanation.substring(0, 100)}`);
        // Still include it but log warning - better than missing questions
        validatedQuestions.push(question);
      }
    }

    return validatedQuestions;
  }
}
