/**
 * 🎯 SIMPLE TUTOR SYSTEM - Like ChatGPT but for Mauritanian College Students
 * 
 * This replaces all the complex systems with one simple, working system
 */

import { prisma } from '@/lib/prisma';
import { generateEducationalResponse, generateEducationalResponseStream } from '@/lib/gemini';
import { 
  getCurriculum,
  getSection,
  getNextSection,
  getRandomQuestion,
  getRandomExercise,
  mapClassroomYearToCurriculumYear,
  CurriculumSection 
} from './curriculum/curriculum-loader';
import { IslamicGuidanceSystem } from './islamic-guidance-system';
import {
  ensureSubjectProgress,
  normalizeSubjectKey,
  parseLearningProgress,
  serializeLearningProgress
} from '@/lib/learning-progress-utils';
import { detectPlotRequest, enhancePlotDetection } from './graph/plot-detector';
import { plotFunction, PlotConfig } from './graph/plotter';

export interface SimpleTutorContext {
  studentId: string;
  studentName: string;
  studentGrade: string; // Keep for backward compatibility, but use curriculumYear for actual logic
  curriculumYear: number; // ✅ NEW: Actual curriculum year (1-4) mapped from classroomYear
  classroomYear: string; // ✅ NEW: Original classroomYear from database (PREMIER_COLLEGE, etc.)
  selectedSubject: string;
  conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>;
  preferredLanguage: 'French' | 'English' | 'Arabic';
  languagePreference?: 'fr' | 'ar'; // AI response language: 'fr' (French) or 'ar' (Arabic with French math terms)
  currentLessonPlan?: {
    title: string;
    topics: string[];
    currentTopic: string;
  };
  studentInterests: string[];
  curriculumContent?: {
    topics: string[];
    currentTopic: string;
    nextTopic: string;
    examples: string[];
  };
  learningProgress?: {
    currentChapter: string;
    currentSection: string;
    completedTopics: string[];
    nextSection: string;
  };
  // Section-based progression tracking
  usedQuestions?: string[];
  usedExamples?: string[];
}

export class SimpleTutorSystem {
  
  /**
   * Generate a simple, natural response like ChatGPT
   */
  static async generateResponse(
    message: string,
    context: SimpleTutorContext
  ): Promise<string> {
    
    // 1. Check if this is a math answer that needs validation
    const mathValidation = await this.validateMathAnswer(message, context);
    if (mathValidation.isMathAnswer) {
      return mathValidation.response;
    }
    
    // 2. Handle section progression first
    const updatedContext = await this.handleSectionProgression(message, context);
    
    // 3. Build section-based prompt
    const prompt = this.buildSimplePrompt(message, updatedContext);
    
    // 4. Generate response using Gemini
    const response = await generateEducationalResponse(prompt);
    
    // 5. Update memory with this conversation
    await this.updateMemory(updatedContext, message, response);
    
    // 6. Track conversation context to prevent loops
    await this.trackConversationContext(updatedContext.studentId, message, response, updatedContext);
    
    return response;
  }

  /**
   * Generate response using the new section-based curriculum system
   */
  static async generateResponseWithSections(
    message: string,
    context: SimpleTutorContext
  ): Promise<string> {
    
    // ✅ ISLAMIC GUIDANCE LAYER (Pre-check - doesn't affect teaching logic)
    const guidanceSystem = IslamicGuidanceSystem.getInstance();
    const guidance = guidanceSystem.getGuidance(message, 'chat');
    
    if (guidance) {
      // If inappropriate content detected, return guidance instead
      await this.updateMemory(context, message, guidance.message);
      return guidance.message;
    }
    
    // ✅ DETECT PLOT REQUESTS - Check if user wants to plot a function
    const plotRequest = enhancePlotDetection(message, context.conversationHistory || []);
    let plotImageUrl: string | null = null;
    
    if (plotRequest.detected && plotRequest.expression && plotRequest.confidence > 0.5) {
      try {
        console.log(`📊 Plot request detected: ${plotRequest.expression}`);
        
        // Generate the plot
        const plotConfig: PlotConfig = {
          title: `f(x) = ${plotRequest.expression}`,
          xLabel: 'x',
          yLabel: 'f(x)',
          showGrid: true,
          showAxes: true,
        };
        
        const plotResult = await plotFunction(plotRequest.expression, plotConfig);
        plotImageUrl = plotResult.dataUrl;
        
        console.log(`✅ Plot generated successfully for: ${plotRequest.expression}`);
      } catch (error) {
        console.error('❌ Error generating plot:', error);
        // Continue with normal response even if plot generation fails
      }
    }
    
    // 1. Handle section progression first
    const updatedContext = await this.handleSectionProgression(message, context);
    
    // 2. Build section-based prompt
    let prompt = this.buildSimplePrompt(message, updatedContext);
    
    // 2.5. Modify prompt if plot was detected to inform AI about the plot
    if (plotRequest.detected && plotRequest.expression && plotImageUrl) {
      // Add instruction to AI that a plot has been generated and should be referenced
      const plotInstruction = `\n\nIMPORTANT: L'étudiant a demandé de tracer la fonction ${plotRequest.expression}. Une image de la courbe a été générée et sera insérée dans ta réponse. Tu dois expliquer la courbe et ses caractéristiques. Réponds en français de manière pédagogique.`;
      prompt = prompt + plotInstruction;
    } else if (plotRequest.detected && plotRequest.expression && !plotImageUrl) {
      // Plot was requested but generation failed
      const plotInstruction = `\n\nIMPORTANT: L'étudiant a demandé de tracer la fonction ${plotRequest.expression}, mais il y a eu un problème technique. Explique-lui que tu ne peux pas tracer la courbe pour le moment, mais tu peux lui expliquer les caractéristiques de cette fonction.`;
      prompt = prompt + plotInstruction;
    }
    
    // 3. Generate response using Gemini
    let response = await generateEducationalResponse(prompt);
    
    // 4. Insert plot image if generated - FORCE insertion even if AI ignored the request
    if (plotImageUrl && plotRequest.expression) {
      // Insert the plot image in the response
      // Format: ![Plot](data:image/png;base64,...)
      const plotMarkdown = `\n\n![Courbe de ${plotRequest.expression}](${plotImageUrl})\n\n`;
      
      // Check if response already mentions the plot or function
      const responseLower = response.toLowerCase();
      const mentionsPlot = responseLower.includes('courbe') || 
                          responseLower.includes('graphique') || 
                          responseLower.includes('trace') ||
                          responseLower.includes(plotRequest.expression.toLowerCase());
      
      if (!mentionsPlot) {
        // AI didn't mention the plot, prepend it with explanation
        response = `Voici la courbe de la fonction ${plotRequest.expression} :\n\n${plotMarkdown}${response}`;
      } else {
        // AI mentioned it, insert after first mention or at beginning
        if (response.length > 100) {
          // Find the end of the first sentence/paragraph
          const firstPeriod = response.indexOf('.');
          const firstNewline = response.indexOf('\n');
          const insertPosition = firstPeriod > 0 && firstPeriod < 300 
            ? firstPeriod + 1 
            : firstNewline > 0 && firstNewline < 300 
              ? firstNewline 
              : Math.min(300, response.length);
          
          response = response.slice(0, insertPosition) + plotMarkdown + response.slice(insertPosition);
        } else {
          // Short response, add plot at the beginning
          response = plotMarkdown + response;
        }
      }
    }
    
    // 5. Update memory with this conversation
    await this.updateMemory(updatedContext, message, response);
    
    // 6. Track conversation context to prevent loops
    await this.trackConversationContext(updatedContext.studentId, message, response, updatedContext);
    
    return response;
  }

  /**
   * Generate streaming response using the section-based curriculum system
   * Returns an async generator that yields text chunks
   */
  static async *generateResponseWithSectionsStream(
    message: string,
    context: SimpleTutorContext
  ): AsyncGenerator<string, void, unknown> {
    
    // ✅ ISLAMIC GUIDANCE LAYER (Pre-check - doesn't affect teaching logic)
    const guidanceSystem = IslamicGuidanceSystem.getInstance();
    const guidance = guidanceSystem.getGuidance(message, 'chat');
    
    if (guidance) {
      // If inappropriate content detected, return guidance instead
      // For streaming, yield the guidance message character by character
      const guidanceMessage = guidance.message;
      for (let i = 0; i < guidanceMessage.length; i += 10) {
        yield guidanceMessage.slice(i, i + 10);
      }
      // Save to memory after streaming completes
      await this.updateMemory(context, message, guidanceMessage);
      return;
    }
    
    // ✅ DETECT PLOT REQUESTS - Check if user wants to plot a function
    const plotRequest = enhancePlotDetection(message, context.conversationHistory || []);
    let plotImageUrl: string | null = null;
    
    if (plotRequest.detected && plotRequest.expression && plotRequest.confidence > 0.5) {
      try {
        console.log(`📊 Plot request detected (streaming): ${plotRequest.expression}`);
        
        // Generate the plot
        const plotConfig: PlotConfig = {
          title: `f(x) = ${plotRequest.expression}`,
          xLabel: 'x',
          yLabel: 'f(x)',
          showGrid: true,
          showAxes: true,
        };
        
        const plotResult = await plotFunction(plotRequest.expression, plotConfig);
        plotImageUrl = plotResult.dataUrl;
        
        console.log(`✅ Plot generated successfully (streaming) for: ${plotRequest.expression}`);
      } catch (error) {
        console.error('❌ Error generating plot (streaming):', error);
        // Continue with normal response even if plot generation fails
      }
    }
    
    // 1. Handle section progression first
    const updatedContext = await this.handleSectionProgression(message, context);
    
    // 2. Build section-based prompt
    let prompt = this.buildSimplePrompt(message, updatedContext);
    
    // 2.5. Modify prompt if plot was detected to inform AI about the plot
    if (plotRequest.detected && plotRequest.expression && plotImageUrl) {
      // Add instruction to AI that a plot has been generated and should be referenced
      const plotInstruction = `\n\nIMPORTANT: L'étudiant a demandé de tracer la fonction ${plotRequest.expression}. Une image de la courbe a été générée et sera insérée dans ta réponse. Tu dois expliquer la courbe et ses caractéristiques. Réponds en français de manière pédagogique.`;
      prompt = prompt + plotInstruction;
    } else if (plotRequest.detected && plotRequest.expression && !plotImageUrl) {
      // Plot was requested but generation failed
      const plotInstruction = `\n\nIMPORTANT: L'étudiant a demandé de tracer la fonction ${plotRequest.expression}, mais il y a eu un problème technique. Explique-lui que tu ne peux pas tracer la courbe pour le moment, mais tu peux lui expliquer les caractéristiques de cette fonction.`;
      prompt = prompt + plotInstruction;
    }
    
    // 3. Generate streaming response using Gemini
    let fullResponse = '';
    try {
      const stream = generateEducationalResponseStream(prompt);
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        yield chunk;
      }
      
      // 4. Insert plot image if generated (after streaming completes) - FORCE insertion
      if (plotImageUrl && plotRequest.expression) {
        const plotMarkdown = `\n\n![Courbe de ${plotRequest.expression}](${plotImageUrl})\n\n`;
        
        // Check if response already mentions the plot or function
        const responseLower = fullResponse.toLowerCase();
        const mentionsPlot = responseLower.includes('courbe') || 
                            responseLower.includes('graphique') || 
                            responseLower.includes('trace') ||
                            responseLower.includes(plotRequest.expression.toLowerCase());
        
        if (!mentionsPlot) {
          // AI didn't mention the plot, prepend it with explanation
          fullResponse = `Voici la courbe de la fonction ${plotRequest.expression} :\n\n${plotMarkdown}${fullResponse}`;
          // Yield the prepended content
          yield `Voici la courbe de la fonction ${plotRequest.expression} :\n\n${plotMarkdown}`;
        } else {
          // AI mentioned it, insert after first mention or at beginning
          if (fullResponse.length > 100) {
            const firstPeriod = fullResponse.indexOf('.');
            const firstNewline = fullResponse.indexOf('\n');
            const insertPosition = firstPeriod > 0 && firstPeriod < 300 
              ? firstPeriod + 1 
              : firstNewline > 0 && firstNewline < 300 
                ? firstNewline 
                : Math.min(300, fullResponse.length);
            
            fullResponse = fullResponse.slice(0, insertPosition) + plotMarkdown + fullResponse.slice(insertPosition);
            // Yield the plot markdown
            yield plotMarkdown;
          } else {
            // Short response, add plot at the beginning
            fullResponse = plotMarkdown + fullResponse;
            yield plotMarkdown;
          }
        }
      }
      
      // 5. Update memory with complete response after streaming
      await this.updateMemory(updatedContext, message, fullResponse);
      
      // 6. Track conversation context to prevent loops
      await this.trackConversationContext(updatedContext.studentId, message, fullResponse, updatedContext);
      
    } catch (error) {
      console.error('Streaming error:', error);
      // Yield error message to user
      const errorMessage = "J'ai rencontré un petit problème technique. Peux-tu réessayer ?";
      yield errorMessage;
      // Don't save error to memory
      throw error;
    }
  }
  
  /**
   * Build intelligent prompt using section-based curriculum
   */
  private static buildSimplePrompt(message: string, context: SimpleTutorContext): string {
    
    // ✅ FIXED: Use curriculumYear from context instead of parsing studentGrade
    // This ensures correct curriculum loading for both school-registered and self-registered students
    const studentYear = context.curriculumYear || 1; // Fallback to Year 1 if not set
    const subject = context.selectedSubject;
    
    // Extract FIRST NAME ONLY (not full name)
    const firstName = context.studentName.split(' ')[0];
    
    // Get current section from curriculum
    const currentChapter = context.learningProgress?.currentChapter || 'ch1';
    const currentSectionId = context.learningProgress?.currentSection || 'ch1-s1';
    
    const section = getSection(studentYear, subject, currentChapter, currentSectionId);
    
    if (!section) {
      // Fallback to basic prompt
      return this.buildBasicPrompt(message, context);
    }
    
    // Get random question and example (avoid repetition)
    const usedQuestions = context.usedQuestions || [];
    const usedExamples = context.usedExamples || [];
    
    const question = getRandomQuestion(section, usedQuestions);
    const exercise = getRandomExercise(section, usedExamples);
    
    // Update used questions/examples
    context.usedQuestions = [...usedQuestions, question];
    context.usedExamples = [...usedExamples, exercise?.question || ''];
    
    // Detect understanding
    const confirmations = ["yes", "ok", "oui", "understood", "d'accord", "je comprends", "je sais", "i understand", "i know", "got it", "clear", "perfect", "sure", "yeah", "نعم", "حسنا", "فهمت"];
    const negations = ["no", "non", "pas encore", "explain", "encore", "don't understand", "confused", "help", "difficult", "hard", "لا", "لم أفهم", "صعب"];
    
    const lowerMessage = message.toLowerCase();
    const understood = confirmations.some(word => lowerMessage.includes(word));
    const notUnderstood = negations.some(word => lowerMessage.includes(word));
    
    // Check language preference - build Arabic prompt if 'ar', otherwise French
    const languagePreference = context.languagePreference || 'fr';
    
    if (languagePreference === 'ar') {
      return this.buildArabicPrompt(message, context, section, question, exercise, understood, notUnderstood, firstName, studentYear, subject);
    }
    
    // Build section-based prompt (French mode - default)
    let prompt = `Tu es un tuteur IA pour les étudiants mauritaniens. Tu enseignes ${subject} en ${studentYear}e année.

ÉTUDIANT:
- Prénom SEULEMENT: ${firstName}
- Année: ${studentYear}
- Sujet actuel: ${subject}

SECTION ACTUELLE:
- Chapitre: ${section.title}
- Description: ${section.description}
- Concepts: ${section.concepts.join(', ')}
- Difficulté: ${section.difficulty}
- Temps estimé: ${section.estimatedTime} minutes

CONVERSATION RÉCENTE (derniers 8 messages):
${context.conversationHistory.slice(-8).map(msg => 
  `${msg.role === 'user' ? 'Étudiant' : 'IA'}: ${msg.content}`
).join('\n')}

MESSAGE DE L'ÉTUDIANT: "${message}"

RÈGLES D'ENSEIGNEMENT:
1. Enseigne UNIQUEMENT la section actuelle: "${section.title}"
2. Explique les concepts: ${section.concepts.join(', ')}
3. Utilise des exemples concrets de Mauritanie
4. Garde les réponses courtes (2-3 phrases maximum)
5. Termine toujours par une question pour tester la compréhension
6. ⚠️ TRÈS IMPORTANT: Regarde la CONVERSATION RÉCENTE ci-dessus et NE RÉPÈTE JAMAIS une question déjà posée
7. Si l'étudiant comprend, passe au concept suivant DANS L'ORDRE
8. Si l'étudiant ne comprend pas, explique différemment SANS répéter

⚠️ RÈGLES INTELLIGENTES POUR ÉVITER LA RÉPÉTITION ET LA CONFUSION:
9. Si tu as posé 2-3 questions du même type (ex: "écris en chiffres"), VARIE le type de question (ex: "lis ce nombre", "quel est le plus grand", "compare")
10. Si l'étudiant fait une petite erreur (ex: écrit "24" au lieu de "23"), donne un feedback CLAIR et SPÉCIFIQUE: "Attention, tu as écrit 24 mais je demandais 23. C'est presque ça!"
11. Si l'étudiant répond dans le bon FORMAT mais fait une petite erreur, félicite le format et corrige l'erreur gentiment
12. NE pose PAS la même question 5 fois de suite - si l'étudiant se trompe 2 fois, explique la méthode autrement puis CHANGE de type de question

RÈGLES DE CONVERSATION NATURELLE (TRÈS IMPORTANT):
13. Ne dis PAS "Salam" ou "Salut" à chaque réponse - seulement à la première fois, puis jamais
14. Utilise le prénom "${firstName}" RAREMENT (1 fois sur 3-4 messages), pas à chaque fois
15. Parle comme un ami intelligent et respectueux, pas comme un robot
16. Reste professionnel mais amical - l'étudiant est jeune
17. Ne répète JAMAIS le prénom dans la même réponse plusieurs fois

RÈGLES D'EXEMPLES MODERNES:
18. Utilise des exemples modernes et pertinents: smartphones, écoles de Nouakchott, marchés actuels, technologie
19. Évite les clichés dépassés (chameaux, nomades, désert) SAUF si c'est pertinent au sujet enseigné
20. Rends les exemples visuels, concrets et faciles à imaginer

QUESTION À POSER: "${question}"
EXERCICE À DONNER: "${exercise?.question || 'Aucun exercice disponible'}"

COMPRÉHENSION DÉTECTÉE:
- L'étudiant comprend: ${understood ? 'OUI' : 'NON'}
- L'étudiant ne comprend pas: ${notUnderstood ? 'OUI' : 'NON'}

QUESTIONS DÉJÀ POSÉES DANS CETTE CONVERSATION:
${this.extractQuestionsAsked(context.conversationHistory)}

RÉPONSE ATTENDUE:
- Si l'étudiant comprend: Félicite et passe au concept suivant (NOUVEAU concept, pas déjà vu)
- Si l'étudiant ne comprend pas: Explique différemment avec un nouvel exemple
- Si l'étudiant dit "salut" ou similaire: Continue exactement où vous vous étiez arrêté
- Si l'étudiant demande "where did we stop": Reprends EXACTEMENT la dernière question posée

⚠️ ANTI-RÉPÉTITION: Vérifie la liste "QUESTIONS DÉJÀ POSÉES" ci-dessus et ne pose JAMAIS une question similaire.

Réponds en français, de manière naturelle et encourageante.`;

    return prompt;
  }
  
  /**
   * Build Arabic prompt with French math terms (AR mode)
   */
  private static buildArabicPrompt(
    message: string,
    context: SimpleTutorContext,
    section: any,
    question: string,
    exercise: any,
    understood: boolean,
    notUnderstood: boolean,
    firstName: string,
    studentYear: number,
    subject: string
  ): string {
    return `أنت معلم ذكاء اصطناعي للطلاب الموريتانيين. تدرس ${subject} في السنة ${studentYear}.

الطالب:
- الاسم الأول فقط: ${firstName}
- السنة: ${studentYear}
- المادة الحالية: ${subject}

القسم الحالي:
- الفصل: ${section.title}
- الوصف: ${section.description}
- المفاهيم: ${section.concepts.join(', ')}
- الصعوبة: ${section.difficulty}
- الوقت المقدر: ${section.estimatedTime} دقيقة

المحادثة الأخيرة (آخر 8 رسائل):
${context.conversationHistory.slice(-8).map(msg => 
  `${msg.role === 'user' ? 'الطالب' : 'المعلم'}: ${msg.content}`
).join('\n')}

رسالة الطالب: "${message}"

قواعد التعليم:
1. اشرح فقط القسم الحالي: "${section.title}"
2. اشرح المفاهيم: ${section.concepts.join(', ')}
3. استخدم أمثلة من موريتانيا
4. اجعل الإجابات قصيرة (2-3 جمل كحد أقصى)
5. أنهِ دائماً بسؤال لاختبار الفهم
6. ⚠️ مهم جداً: انظر إلى المحادثة الأخيرة أعلاه ولا تكرر أبداً سؤالاً تم طرحه من قبل
7. إذا فهم الطالب، انتقل إلى المفهوم التالي بالترتيب
8. إذا لم يفهم الطالب، اشرح بطريقة مختلفة دون تكرار

⚠️ قواعد ذكية لتجنب التكرار والارتباك:
9. إذا طرحت 2-3 أسئلة من نفس النوع (مثل: "اكتب بالأرقام")، غيّر نوع السؤال (مثل: "اقرأ هذا العدد"، "ما هو الأكبر"، "قارن")
10. إذا أخطأ الطالب خطأً صغيراً (مثل: كتب "24" بدلاً من "23")، أعطِ ملاحظة واضحة ومحددة: "انتبه، كتبت 24 لكنني طلبت 23. هذا قريب جداً!"
11. إذا أجاب الطالب بالشكل الصحيح لكنه أخطأ خطأً صغيراً، امدح الشكل وصحح الخطأ بلطف
12. لا تطرح نفس السؤال 5 مرات متتالية - إذا أخطأ الطالب مرتين، اشرح الطريقة بطريقة أخرى ثم غيّر نوع السؤال

قواعد المحادثة الطبيعية (مهم جداً):
13. لا تقل "السلام" أو "مرحباً" في كل إجابة - فقط في المرة الأولى، ثم لا تقلها أبداً
14. استخدم الاسم الأول "${firstName}" نادراً (مرة واحدة من كل 3-4 رسائل)، وليس في كل مرة
15. تحدث كصديق ذكي ومحترم، وليس كروبوت
16. كن محترفاً لكن ودوداً - الطالب صغير
17. لا تكرر الاسم الأول في نفس الإجابة عدة مرات

قواعد الأمثلة الحديثة:
18. استخدم أمثلة حديثة وذات صلة: الهواتف الذكية، مدارس نواكشوط، الأسواق الحالية، التكنولوجيا
19. تجنب الصور النمطية القديمة (الجمال، البدو، الصحراء) إلا إذا كانت ذات صلة بالموضوع
20. اجعل الأمثلة مرئية وملموسة وسهلة التخيل

⚠️ قواعد اللغة العربية مع المصطلحات الرياضية الفرنسية (مهم جداً):
21. اشرح كل شيء بالعربية الفصحى البسيطة والواضحة
22. استخدم المصطلحات الرياضية بالفرنسية: "les nombres réels"، "équation"، "fraction"، "les entiers"، "les décimaux"
23. اترك الرموز كما هي: x، +، =، ÷، ×، ℕ، ℤ، 𝔻، ℚ، ℝ، ⊂، ∈، √
24. اترك الأرقام والتعبيرات كما هي: 2x + 5 = 13 (تماماً هكذا)
25. امزج بين العربية والفرنسية بشكل طبيعي - مثل المعلمين الموريتانيين في الفصول الدراسية
26. مثال على الإجابة الصحيحة:
   "الأعداد الحقيقية أو les nombres réels هي مجموعة تشمل كل أنواع الأعداد:
   ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ
   يعني:
   - Les nombres naturels (ℕ): 0، 1، 2، 3...
   - Les nombres entiers (ℤ): ...، -2، -1، 0، 1، 2...
   فهمت؟"

السؤال المطلوب طرحه: "${question}"
التمرين المطلوب إعطاؤه: "${exercise?.question || 'لا يوجد تمرين متاح'}"

الفهم المكتشف:
- الطالب يفهم: ${understood ? 'نعم' : 'لا'}
- الطالب لا يفهم: ${notUnderstood ? 'نعم' : 'لا'}

الأسئلة التي تم طرحها بالفعل في هذه المحادثة:
${this.extractQuestionsAsked(context.conversationHistory)}

الإجابة المتوقعة:
- إذا فهم الطالب: امدحه وانتقل إلى المفهوم التالي (مفهوم جديد، لم يُرَ من قبل)
- إذا لم يفهم الطالب: اشرح بطريقة مختلفة مع مثال جديد
- إذا قال الطالب "مرحباً" أو ما شابه: استمر تماماً حيث توقفتم
- إذا سأل الطالب "أين توقفنا": استأنف تماماً آخر سؤال تم طرحه

⚠️ منع التكرار: تحقق من قائمة "الأسئلة التي تم طرحها بالفعل" أعلاه ولا تطرح أبداً سؤالاً مشابهاً.

أجب بالعربية الفصحى البسيطة، بشكل طبيعي ومشجع.`;
  }
  
  /**
   * Fallback basic prompt when section system is not available
   * ✅ FIXED: Use curriculumYear from context instead of parsing studentGrade
   */
  private static buildBasicPrompt(message: string, context: SimpleTutorContext): string {
    const studentYear = context.curriculumYear || 1; // Fallback to Year 1 if not set
    const subject = context.selectedSubject;
    const languagePreference = context.languagePreference || 'fr';
    
    if (languagePreference === 'ar') {
      return `أنت معلم ذكاء اصطناعي للطلاب الموريتانيين. تدرس ${subject} في السنة ${studentYear}.

رسالة الطالب: "${message}"

قواعد:
1. اشرح بشكل واضح وبسيط
2. استخدم أمثلة من موريتانيا
3. اجعل الإجابات قصيرة
4. أنهِ بسؤال
5. كن مشجعاً وطبيعياً
6. ⚠️ استخدم المصطلحات الرياضية بالفرنسية: "les nombres réels"، "équation"، "fraction"
7. اترك الرموز والأرقام كما هي: x، +، =، ℕ، ℤ، 2x + 5 = 13

أجب بالعربية الفصحى البسيطة مع المصطلحات الرياضية الفرنسية.`;
    }
    
    return `Tu es un tuteur IA pour les étudiants mauritaniens. Tu enseignes ${subject} en ${studentYear}e année.

MESSAGE DE L'ÉTUDIANT: "${message}"

RÈGLES:
1. Enseigne de manière claire et simple
2. Utilise des exemples de Mauritanie
3. Garde les réponses courtes
4. Termine par une question
5. Sois encourageant et naturel

Réponds en français.`;
  }
  
  /**
   * Handle section progression when student understands
   * ✅ FIXED: Use curriculumYear from context instead of parsing studentGrade
   */
  private static async handleSectionProgression(
    message: string,
    context: SimpleTutorContext
  ): Promise<SimpleTutorContext> {
    
    // Detect understanding
    const confirmations = ["yes", "ok", "oui", "understood", "d'accord", "je comprends", "je sais", "i understand", "i know", "got it", "clear", "perfect", "sure", "yeah"];
    const lowerMessage = message.toLowerCase();
    const understood = confirmations.some(word => lowerMessage.includes(word));
    
    if (!understood) {
      return context; // No progression needed
    }
    
    // ✅ FIXED: Get current section info using curriculumYear from context
    const studentYear = context.curriculumYear || 1; // Fallback to Year 1 if not set
    const subject = context.selectedSubject;
    const currentChapter = context.learningProgress?.currentChapter || 'ch1';
    const currentSectionId = context.learningProgress?.currentSection || 'ch1-s1';
    
    // Get next section
    const nextSection = getNextSection(studentYear, subject, currentChapter, currentSectionId);
    
    if (nextSection) {
      // Update learning progress
      const updatedProgress = {
        currentChapter: nextSection.chapter,
        currentSection: nextSection.section,
        completedTopics: [
          ...(context.learningProgress?.completedTopics || []),
          currentSectionId
        ],
        nextSection: nextSection.section
      };
      
      // Reset used questions/examples for new section
      return {
        ...context,
        learningProgress: updatedProgress,
        usedQuestions: [],
        usedExamples: []
      };
    }
    
    return context;
  }
  
  /**
   * Detect language from message
   */
  private static detectLanguage(message: string): 'French' | 'English' | 'Arabic' {
    const lowerMessage = message.toLowerCase();
    
    const englishWords = ['hello', 'hi', 'yes', 'no', 'ok', 'okay', 'thanks', 'thank you', 'please', 'help', 'what', 'how', 'when', 'where', 'why'];
    const arabicWords = ['مرحبا', 'نعم', 'لا', 'شكرا', 'من فضلك', 'مساعدة', 'ماذا', 'كيف', 'متى', 'أين', 'لماذا'];
    
    if (englishWords.some(word => lowerMessage.includes(word))) {
      return 'English';
    }
    
    if (arabicWords.some(word => lowerMessage.includes(word))) {
      return 'Arabic';
    }
    
    return 'French'; // Default for Mauritanian curriculum
  }
  
  /**
   * Update student memory with conversation
   */
  private static async updateMemory(
    context: SimpleTutorContext,
    message: string,
    response: string
  ): Promise<void> {
    try {
      const studentId = context.studentId;

      // Extract interests from message
      const interests = this.extractInterests(message);

      // Load existing AI personality (to merge learningProgress safely)
      const existing = await prisma.aIPersonality.findUnique({
        where: { studentId },
        select: { learningProgress: true, keyTopics: true }
      });

      // Parse existing learningProgress into normalized root
      const root = parseLearningProgress(existing?.learningProgress ?? '{}');

      // Normalize subject key and ensure subject block exists
      const subjectKey = normalizeSubjectKey(context.selectedSubject);
      const subjectProgress = ensureSubjectProgress(root, subjectKey);

      // Merge current chat progress into subject-specific map progress WITHOUT touching other subjects
      const currentChapter = context.learningProgress?.currentChapter || subjectProgress.currentChapter || 'ch1';
      const currentSection = context.learningProgress?.currentSection || subjectProgress.currentSection || 'ch1-s1';
      const completedTopics = Array.isArray(context.learningProgress?.completedTopics)
        ? context.learningProgress!.completedTopics
        : Array.isArray(subjectProgress.completedTopics)
          ? subjectProgress.completedTopics
          : [];
      const nextSection = context.learningProgress?.nextSection || subjectProgress.nextSection || currentSection;

      root[subjectKey] = {
        ...subjectProgress,
        currentChapter,
        currentSection,
        completedTopics,
        nextSection
      };

      // Persist merged learningProgress and updated interests
      await prisma.aIPersonality.upsert({
        where: { studentId },
        update: {
          keyTopics: JSON.stringify(interests),
          learningProgress: serializeLearningProgress(root),
          lastInteraction: new Date(),
          updatedAt: new Date()
        },
        create: {
          studentId,
          keyTopics: JSON.stringify(interests),
          learningProgress: serializeLearningProgress(root),
          lastInteraction: new Date()
        }
      });
      
      // Save conversation with curriculum metadata
      await prisma.aIConversation.create({
        data: {
          studentId: context.studentId,
          messageType: 'chat',
          studentMessage: message,
          aiResponse: response,
          subjectArea: context.selectedSubject,
          conversationTopic: context.learningProgress?.currentSection 
            ? `${context.learningProgress.currentChapter} - ${context.learningProgress.currentSection}`
            : context.selectedSubject,
          timestamp: new Date()
        }
      });
      
    } catch (error) {
      console.error('Memory update error:', error);
    }
  }
  
  /**
   * Track conversation context to prevent loops
   */
  private static async trackConversationContext(
    studentId: string,
    message: string,
    response: string,
    context: SimpleTutorContext
  ): Promise<void> {
    try {
      // Create conversation state
      const conversationState = {
        lastMessage: message,
        lastResponse: response,
        timestamp: new Date().toISOString(),
        subject: context.selectedSubject
      };

      // Update conversation state in database
      await prisma.aIPersonality.upsert({
        where: { studentId },
        update: {
          conversationState: JSON.stringify(conversationState),
          lastInteraction: new Date()
        },
        create: {
          studentId,
          conversationState: JSON.stringify(conversationState),
          lastInteraction: new Date()
        }
      });

    } catch (error) {
      console.error('Error tracking conversation context:', error);
    }
  }

  /**
   * Validate math answers and provide feedback
   */
  private static async validateMathAnswer(
    message: string,
    context: SimpleTutorContext
  ): Promise<{ isMathAnswer: boolean; response: string }> {
    
    // Check if this is a math question
    if (!this.isMathQuestion(message)) {
      return { isMathAnswer: false, response: '' };
    }
    
    // Extract number and question type
    const numberMatch = message.match(/(\d+)/);
    if (!numberMatch) {
      return { isMathAnswer: false, response: '' };
    }
    
    const number = parseInt(numberMatch[1]);
    const questionType = this.detectQuestionType(context.conversationHistory);
    
    if (!questionType) {
      return { isMathAnswer: false, response: '' };
    }
    
    // Get correct answer
    const correctAnswer = this.getDigitAtPosition(number, questionType);
    const studentAnswer = parseInt(message);
    const isCorrect = studentAnswer === correctAnswer;
    
    // Generate response
    let response = '';
    if (isCorrect) {
      response = `Excellent! Le chiffre des ${questionType} de ${number} est bien ${correctAnswer}! 🎉\n\n`;
      const nextType = this.getNextQuestionType(questionType);
      if (nextType) {
        response += this.getNextQuestion(number, nextType);
      }
      } else {
      response = `Pas tout à fait. Le chiffre des ${questionType} de ${number} est ${correctAnswer}, pas ${studentAnswer}.\n\n`;
      response += `Expliquons: ${number} = ${this.explainNumber(number)}\n\n`;
      response += `Le chiffre des ${questionType} est ${correctAnswer}.\n\n`;
      response += `Essaie encore: ${this.getNextQuestion(number, questionType)}`;
    }
    
    console.log(`🧮 Math validation: Question=${questionType}, Number=${number}, Student=${studentAnswer}, Correct=${correctAnswer}, IsCorrect=${isCorrect}`);
    
    return { isMathAnswer: true, response };
  }
  
  /**
   * Check if a message is a math question
   */
  private static isMathQuestion(message: string): boolean {
    const mathKeywords = ['chiffre', 'unité', 'dizaine', 'centaine', 'millier', 'nombre', 'addition', 'soustraction', 'multiplication', 'division'];
    return mathKeywords.some(keyword => message.toLowerCase().includes(keyword));
  }
  
  /**
   * Detect question type from conversation history
   */
  private static detectQuestionType(history: Array<{ role: string; content: string }>): string | null {
    if (history.length === 0) return null;
    
    const lastResponse = history[history.length - 1].content;
    if (lastResponse.includes('unité')) return 'unité';
    if (lastResponse.includes('dizaine')) return 'dizaine';
    if (lastResponse.includes('centaine')) return 'centaine';
    if (lastResponse.includes('millier')) return 'millier';
    if (lastResponse.includes('dizaines de milliers')) return 'dizaines de milliers';
    if (lastResponse.includes('centaines de milliers')) return 'centaines de milliers';
    return null;
  }

  /**
   * Get next question type in sequence
   */
  private static getNextQuestionType(currentType: string): string | null {
    const nextTypes: { [key: string]: string } = {
      'unité': 'dizaine',
      'dizaine': 'centaine', 
      'centaine': 'millier',
      'millier': 'dizaines de milliers',
      'dizaines de milliers': 'centaines de milliers'
    };
    
    return nextTypes[currentType] || null;
  }

  /**
   * Get next question
   */
  private static getNextQuestion(number: number, questionType: string): string {
    const nextType = this.getNextQuestionType(questionType);
    if (!nextType) return '';
    
    const nextAnswer = this.getDigitAtPosition(number, nextType);
    return `Quel est le chiffre des ${nextType} ? 😊`;
  }

  /**
   * Get digit at specific position
   */
  private static getDigitAtPosition(number: number, position: string): number {
    switch (position) {
      case 'unité': return number % 10;
      case 'dizaine': return Math.floor(number / 10) % 10;
      case 'centaine': return Math.floor(number / 100) % 10;
      case 'millier': return Math.floor(number / 1000) % 10;
      case 'dizaines de milliers': return Math.floor(number / 10000) % 10;
      case 'centaines de milliers': return Math.floor(number / 100000) % 10;
      default: return 0;
    }
  }

  /**
   * Explain number structure
   */
  private static explainNumber(number: number): string {
    const units = number % 10;
    const tens = Math.floor(number / 10) % 10;
    const hundreds = Math.floor(number / 100) % 10;
    const thousands = Math.floor(number / 1000) % 10;
    
    let explanation = '';
    if (thousands > 0) explanation += `${thousands} milliers + `;
    if (hundreds > 0) explanation += `${hundreds} centaines + `;
    if (tens > 0) explanation += `${tens} dizaines + `;
    explanation += `${units} unités`;
    
    return explanation;
  }

  /**
   * Extract questions already asked from conversation history
   */
  private static extractQuestionsAsked(conversationHistory: Array<{role: string; content: string}>): string {
    const questions: string[] = [];
    
    conversationHistory.forEach((msg) => {
      if (msg.role === 'assistant') {
        // Extract questions (lines ending with ?)
        const questionMatches = msg.content.match(/[^.!?]*\?/g);
        if (questionMatches) {
          questionMatches.forEach(q => {
            const cleaned = q.trim();
            if (cleaned.length > 10) { // Only meaningful questions
              questions.push(`- ${cleaned}`);
            }
          });
        }
      }
    });
    
    return questions.length > 0 
      ? questions.slice(-5).join('\n') // Last 5 questions only
      : '- Aucune question posée encore';
  }

  /**
   * Extract student interests from message
   */
  private static extractInterests(message: string): string[] {
    const interests: string[] = [];
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('football') || lowerMessage.includes('soccer')) interests.push('football');
    if (lowerMessage.includes('music') || lowerMessage.includes('musique')) interests.push('music');
    if (lowerMessage.includes('cooking') || lowerMessage.includes('cuisine')) interests.push('cooking');
    if (lowerMessage.includes('games') || lowerMessage.includes('jeux')) interests.push('games');
    if (lowerMessage.includes('sports')) interests.push('sports');
    
    return interests;
  }

  /**
   * Create context for student
   * ✅ FIXED: Now uses classroomYear instead of grade for curriculum loading
   * ✅ Works for both school-registered and self-registered students
   */
  static async createContext(studentId: string): Promise<SimpleTutorContext | null> {
    try {
      const student = await prisma.student.findUnique({
        where: { id: studentId },
        include: {
          class: true,
          aiPersonality: true
        }
      });

      if (!student || !student.studentName) {
        console.error('❌ Student not found or missing studentName:', studentId);
        return null;
      }

      // ✅ CRITICAL FIX: Use classroomYear instead of grade
      // This ensures self-registered students get correct curriculum
      const classroomYear = student.class?.classroomYear || 'PREMIER_COLLEGE';
      const curriculumYear = mapClassroomYearToCurriculumYear(classroomYear);
      
      console.log(`📚 Creating context for student ${student.studentName}:`);
      console.log(`   - classroomYear: ${classroomYear}`);
      console.log(`   - curriculumYear: ${curriculumYear}`);
      console.log(`   - grade (legacy): ${student.grade || 'N/A'}`);
      console.log(`   - isSelfRegistered: ${(student as any).isSelfRegistered || false}`);

      // Load curriculum content (using curriculum year, not grade)
      const curriculumContent = await this.loadCurriculumContent(curriculumYear, 'Mathematics');
      
      // Load learning progress
      const learningProgress = await this.getLearningProgress(studentId);

      // Load language preference from student (default to 'fr' if not set)
      const languagePreference = ((student as any).languagePreference || 'fr') as 'fr' | 'ar';

      return {
        studentId: student.id,
        studentName: student.studentName,
        studentGrade: student.grade || 'Premier Année', // Keep for backward compatibility
        curriculumYear, // ✅ NEW: Actual curriculum year (1-4)
        classroomYear, // ✅ NEW: Original classroomYear from database
        selectedSubject: 'Mathematics',
        conversationHistory: [],
        preferredLanguage: 'French',
        languagePreference, // ✅ NEW: AI response language preference
        studentInterests: [],
        curriculumContent,
        learningProgress
      };
    } catch (error) {
      console.error('Error creating context:', error);
      return null;
    }
  }

  /**
   * Load curriculum content
   * ✅ FIXED: Now accepts curriculumYear (number) instead of grade (string)
   * ✅ Uses the new curriculum-loader system instead of file-based approach
   */
  private static async loadCurriculumContent(curriculumYear: number, subject: string): Promise<{
    topics: string[];
    currentTopic: string;
    nextTopic: string;
    examples: string[];
  } | undefined> {
    try {
      // ✅ Use the new curriculum-loader system
      const curriculum = getCurriculum(curriculumYear, subject);
      
      if (!curriculum) {
        console.log(`⚠️ Curriculum not found for Year ${curriculumYear}, Subject: ${subject}`);
        return undefined;
      }
      
      // Extract topics from curriculum chapters
      const topics: string[] = [];
      curriculum.chapters.forEach(chapter => {
        chapter.sections.forEach(section => {
          topics.push(section.title);
        });
      });
      
      const examples = this.getLocalExamples(subject);
      
      return {
        topics: topics.slice(0, 10),
        currentTopic: topics[0] || 'Introduction',
        nextTopic: topics[1] || 'Next topic',
        examples
      };
      
    } catch (error) {
      console.error('Error loading curriculum:', error);
      return undefined;
    }
  }
  
  /**
   * Extract topics from curriculum content
   */
  private static extractTopics(content: string): string[] {
    const topics: string[] = [];
    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.startsWith('### Chapitre') || line.startsWith('## ')) {
        const topic = line.replace(/^#+\s*/, '').trim();
        if (topic && !topic.includes('BASE DE CONNAISSANCES')) {
          topics.push(topic);
        }
      }
    }
    
    return topics.slice(0, 10); // Limit to first 10 topics
  }
  
  /**
   * Get local examples for subject
   */
  private static getLocalExamples(subject: string): string[] {
    const examples: string[] = [];
    
    if (subject.toLowerCase().includes('math')) {
      examples.push('les calculs du marché de Nouakchott', 'les distances entre les villes mauritaniennes', 'les mesures des champs de riz');
    } else if (subject.toLowerCase().includes('science')) {
      examples.push('la flore du désert mauritanien', 'les animaux du Sahel', 'l\'eau du fleuve Sénégal');
    } else if (subject.toLowerCase().includes('physics')) {
      examples.push('la chaleur du désert', 'l\'électricité à Nouakchott', 'les éoliennes de Nouadhibou');
    }
    
    return examples;
  }

  /**
   * Get learning progress for student
   */
  private static async getLearningProgress(
    studentId: string
  ): Promise<{
    currentChapter: string;
    currentSection: string;
    completedTopics: string[];
    nextSection: string;
  } | undefined> {
    try {
      // Get student's learning progress from database
      const student = await prisma.student.findUnique({
        where: { id: studentId },
        include: { aiPersonality: true }
      });
      
      if (!student?.aiPersonality) {
        return {
          currentChapter: 'ch1',
          currentSection: 'ch1-s1',
          completedTopics: [],
          nextSection: 'ch1-s2'
        };
      }

      // Parse learning progress from AI personality
      const learningProgress = student.aiPersonality.learningProgress;
      if (typeof learningProgress === 'string') {
        try {
          const parsed = JSON.parse(learningProgress);
      return {
            currentChapter: parsed.currentChapter || 'ch1',
            currentSection: parsed.currentSection || 'ch1-s1',
            completedTopics: parsed.completedTopics || [],
            nextSection: parsed.nextSection || 'ch1-s2'
          };
    } catch (error) {
          console.error('Error parsing learning progress:', error);
        }
      }
      
      return {
        currentChapter: 'ch1',
        currentSection: 'ch1-s1',
        completedTopics: [],
        nextSection: 'ch1-s2'
      };
      
    } catch (error) {
      console.error('Error getting learning progress:', error);
      return undefined;
    }
  }
}
