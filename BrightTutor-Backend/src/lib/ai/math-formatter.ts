/**
 * Math Formatter - Post-process AI responses to fix LaTeX formatting
 *
 * This function corrects common LaTeX formatting errors in AI-generated responses
 * It should be called on ALL AI responses before displaying them
 */

// Import sum formatter functions
import { normalizeSummationsEarly, convertSumsInUnicodeMathTokens } from './formatters/math/sum-formatter'

/**
 * Remove markdown formatting that isn't properly rendered
 * Removes **bold** markers and other markdown syntax that appears as raw text
 * IMPORTANT: This function must NOT modify content inside LaTeX blocks ($...$)
 */
export function removeMarkdownFormatting(text: string): string {
  if (!text || typeof text !== "string") return text

  // Helper to apply replacement only outside LaTeX blocks
  const replaceOutsideMath = (input: string, regex: RegExp, replacement: string): string => {
    let result = ''
    let i = 0
    
    while (i < input.length) {
      const nextDollar = input.indexOf('$', i)
      
      if (nextDollar === -1) {
        // No more LaTeX blocks, process rest of string
        result += input.slice(i).replace(regex, replacement)
        break
      }
      
      if (nextDollar > i) {
        // Process text before LaTeX block
        result += input.slice(i, nextDollar).replace(regex, replacement)
      }
      
      // Find matching closing delimiter
      const isDouble = input[nextDollar + 1] === '$'
      const delimiter = isDouble ? '$$' : '$'
      const end = input.indexOf(delimiter, nextDollar + delimiter.length)
      
      if (end === -1) {
        // No closing delimiter, process rest as text
        result += input.slice(nextDollar).replace(regex, replacement)
        break
      }
      
      // Keep LaTeX content unchanged
      result += input.slice(nextDollar, end + delimiter.length)
      i = end + delimiter.length
    }
    
    return result
  }

  let cleaned = text

  // Remove **bold** markers (most common issue) - outside LaTeX only
  cleaned = replaceOutsideMath(cleaned, /\*\*([^*]+)\*\*/g, "$1")
  
  // Remove *italic* markers - outside LaTeX only
  cleaned = replaceOutsideMath(cleaned, /\*([^*]+)\*/g, "$1")
  
  // Remove __bold__ markers (alternative syntax) - outside LaTeX only
  cleaned = replaceOutsideMath(cleaned, /__([^_]+)__/g, "$1")
  
  // Remove _italic_ markers (alternative syntax) - outside LaTeX only
  // CRITICAL: This pattern was matching across LaTeX blocks and stripping underscores!
  cleaned = replaceOutsideMath(cleaned, /_([^_]+)_/g, "$1")
  
  // Remove markdown headers (# ## ###)
  cleaned = cleaned.replace(/^#{1,6}\s+/gm, "")
  
  // Remove markdown links [text](url) -> text
  cleaned = cleaned.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
  
  // Remove markdown code blocks ```code``` -> code
  cleaned = cleaned.replace(/```[\s\S]*?```/g, (match) => {
    return match.replace(/```/g, "").trim()
  })
  
  // Remove inline code `code` -> code
  cleaned = cleaned.replace(/`([^`]+)`/g, "$1")

  return cleaned
}

/* =========================================================================================
 * Unicode math helpers (integrals, indices, exponents)
 * ========================================================================================= */

const SUBSCRIPT_DIGITS: Record<string, string> = {
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
}

const SUPERSCRIPT_DIGITS: Record<string, string> = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ⁿ": "n",
  "ⁱ": "i",
  "ᵏ": "k",
  "ᵐ": "m",
  "ᵗ": "t",
}

// minimal greek mapping for bounds / exponents
const GREEK_MAP: Record<string, string> = {
  "α": "\\alpha",
  "β": "\\beta",
  "γ": "\\gamma",
  "δ": "\\delta",
  "ε": "\\epsilon",
  "θ": "\\theta",
  "λ": "\\lambda",
  "μ": "\\mu",
  "π": "\\pi",
  "ρ": "\\rho",
  "σ": "\\sigma",
  "τ": "\\tau",
  "φ": "\\phi",
  "ω": "\\omega",
}

function mapSubDigits(s: string): string {
  return s
    .split("")
    .map((ch) => SUBSCRIPT_DIGITS[ch] ?? ch)
    .join("")
}
function mapSupDigits(s: string): string {
  return s
    .split("")
    .map((ch) => SUPERSCRIPT_DIGITS[ch] ?? ch)
    .join("")
}

function normalizeGreekInExponent(s: string): string {
  return s.replace(/[αβγδεθλμπρστφω]/g, (g) => GREEK_MAP[g] ?? g)
}

/**
 * Convert:
 *  - ∫₀¹ -> \int_0^1
 *  - ∫0¹ / ∫ 0¹ -> \int_0^1   (NEW)
 *  - ∫₀^α / ∫0^α -> \int_0^\alpha (NEW)
 *  - ]₀¹ / ]0¹ -> ]_0^1       (NEW)
 *  - 1² -> 1^2
 *  - · -> \cdot
 */
function convertUnicodeMathTokens(input: string): string {
  let out = input

  // normalize unicode minus to ASCII minus
  out = out.replace(/\u2212/g, "-")
  
  // normalize en-dash and em-dash to minus in math contexts
  // Match patterns like "m² + (3 – i)m" or "z – (m+1)" where – is used as subtraction
  out = out.replace(/([0-9a-zA-Z\)\]\}])\s*[–—]\s*([0-9a-zA-Z\(\[\{])/g, '$1 - $2')
  out = out.replace(/([0-9a-zA-Z\)\]\}])\s*[–—]\s*\(/g, '$1 - (')

  // middle dot to \cdot (safe for KaTeX)
  out = out.replace(/[·⋅]/g, "\\cdot ")

  // bracket evaluation: ]₀¹ / ]₁² etc.
  out = out.replace(/\]([₀₁₂₃₄₅₆₇₈₉]+)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)?/g, (_m, sub, sup) => {
    const subN = mapSubDigits(sub)
    const supN = sup ? mapSupDigits(sup) : ""
    return supN ? `]_${subN}^${supN}` : `]_${subN}`
  })

  // --- NEW: bracket evaluation with normal lower digits + superscript upper digits: ]0¹ -> ]_0^1
  out = out.replace(/\]\s*([0-9]+)\s*([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_m, low, sup) => {
    const supN = mapSupDigits(sup)
    return `]_${low}^${supN}`
  })

  // integral bounds written as ∫₀¹ or ∫₁² (unicode sub+sup digits)
  out = out.replace(/∫([₀₁₂₃₄₅₆₇₈₉]+)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)?/g, (_m, sub, sup) => {
    const subN = mapSubDigits(sub)
    const supN = sup ? mapSupDigits(sup) : ""
    return supN ? `\\int_${subN}^${supN}` : `\\int_${subN}`
  })

  // integral like ∫₀^α (unicode sub digits + caret exponent)
  out = out.replace(/∫([₀₁₂₃₄₅₆₇₈₉]+)\^([^\s]+)/g, (_m, sub, exp) => {
    const subN = mapSubDigits(sub)
    const expN = normalizeGreekInExponent(exp)
    return `\\int_${subN}^${expN}`
  })

  // --- NEW: integral bounds where LOWER is normal digits and UPPER is unicode superscripts: ∫0¹ or ∫ 0¹
  out = out.replace(/∫\s*([0-9]+)\s*([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_m, low, sup) => {
    const supN = mapSupDigits(sup)
    return `\\int_${low}^${supN}`
  })

  // --- NEW: integral like ∫0^α (lower normal digits)
  out = out.replace(/∫\s*([0-9]+)\^([^\s]+)/g, (_m, low, exp) => {
    const expN = normalizeGreekInExponent(exp)
    return `\\int_${low}^${expN}`
  })

  // superscript digits: 1², x², (x+1)², 0ⁿ, etc. -> ^2, ^n
  // Now includes ⁿ, ᵏ, ᵐ, ᵗ for better sequence handling
  out = out.replace(/([0-9A-Za-z\)\]])([⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱᵏᵐᵗ]+)/g, (_m, base, sup) => {
    const supN = mapSupDigits(sup)
    return `${base}^${supN.length > 1 ? `{${supN}}` : supN}`
  })

  // --- SAFETY: fix broken integrals like "\inta^b" or "\int a^b" -> "\int_{a}^b"
  // Do NOT touch already-correct "\int_..."
  out = out.replace(/\\int(?!_)\s*([0-9A-Za-z]|\\[A-Za-z]+)\s*\^/g, (_m, low) => {
    return `\\int_{${low}}^`
  })

  // general unicode subscripts: M₁ -> M_1, z₂ -> z_2
  // EXCLUDE complex numbers (z, z_A, etc.) - handled by nombre-complexes-formatter.ts
  out = out.replace(/([A-Za-z0-9])([₀₁₂₃₄₅₆₇₈₉]+)/g, (_m, base, sub) => {
    // Skip if it's a complex number variable (z, z_A, etc.)
    if (/^z$/i.test(base)) {
      return _m
    }
    const subN = mapSubDigits(sub)
    return `${base}_${subN}`
  })

  // Convert sums using sum-formatter.ts
  out = convertSumsInUnicodeMathTokens(out)

  return out
}

// normalizeSummationsEarly is now imported from sum-formatter.ts

/**
 * In plain text (outside $...$), wrap a full integral expression into $...$.
 * We stop at the differential (dx, dt, du...) to avoid grabbing the whole paragraph.
 */
function wrapPlainTextIntegrals(input: string): string {
  // after conversion: \int_0^1 ... dx
  // we wrap from "\int_" up to "d<var>"
  const re = /\\int_[^$\n]*?\bd\s*[a-zA-Z]\b/g
  return input.replace(re, (m) => `$${m}$`)
}

// wrapPlainTextSums is now handled by normalizeSummationsEarly in sum-formatter.ts

/**
 * Apply a regex replacement only outside LaTeX math blocks ($...$ / $$...$$)
 */
function replaceOutsideMathBlocks(
  input: string,
  regex: RegExp,
  replacer: string | ((...args: any[]) => string)
): string {
  let out = ""
  let i = 0

  while (i < input.length) {
    const nextDollar = input.indexOf("$", i)
    if (nextDollar === -1) {
      out += input.slice(i).replace(regex, replacer as any)
      break
    }

    if (nextDollar > i) {
      out += input.slice(i, nextDollar).replace(regex, replacer as any)
    }

    const isDouble = input[nextDollar + 1] === "$"
    const delimiter = isDouble ? "$$" : "$"
    const end = input.indexOf(delimiter, nextDollar + delimiter.length)
    if (end === -1) {
      out += input.slice(nextDollar).replace(regex, replacer as any)
      break
    }

    out += input.slice(nextDollar, end + delimiter.length)
    i = end + delimiter.length
  }

  return out
}

/**
 * Collapse sequences of single-token math lines into a single line.
 * This fixes cases where each token is split onto its own line.
 */
function collapseMathTokenLines(input: string): string {
  const lines = input.split('\n')
  const out: string[] = []
  let buffer: Array<{ raw: string; trimmed: string }> = []

  const isTokenLine = (line: string): boolean => {
    const trimmed = line.trim()
    if (!trimmed) return false
    if (trimmed.length > 4) return false
    return /^[0-9A-Za-z+\-*/=()^_{}]+$/.test(trimmed)
  }

  const hasMathOps = (text: string): boolean => /[+\-*/=^]/.test(text)

  const flush = () => {
    if (buffer.length === 0) return
    const merged = buffer.map((b) => b.trimmed).join(' ').replace(/\s+/g, ' ')
    if (buffer.length >= 3 && hasMathOps(merged)) {
      out.push(merged)
    } else {
      out.push(...buffer.map((b) => b.raw))
    }
    buffer = []
  }

  for (const line of lines) {
    if (isTokenLine(line)) {
      buffer.push({ raw: line, trimmed: line.trim() })
    } else {
      flush()
      out.push(line)
    }
  }

  flush()
  return out.join('\n')
}

/**
 * Fix all mathematical expressions in AI response text
 */
export function fixMathFormatting(text: string): string {
  if (!text || typeof text !== "string") return text

  // First, remove markdown formatting (like **bold**)
  let fixed = removeMarkdownFormatting(text)
  const originalText = fixed
  
  // Normalize unicode minus early (helps newline merging)
  fixed = fixed.replace(/\u2212/g, "-")

  // Normalize broken math tokens across newlines
  // EXCLUDE complex numbers - handled by nombre-complexes-formatter.ts
  fixed = fixed.replace(/(?:^|\n)\s*_+\s*(?=\n)/g, '\n')
  fixed = fixed.replace(/([(\[])\s*\n+\s*([A-Za-z0-9])/g, (match, before, after) => {
    // Skip if it's a complex number expression
    if (after.includes('z') && (after.startsWith('z_') || after.startsWith('z['))) {
      return match
    }
    return `${before}${after}`
  })
  fixed = fixed.replace(/([A-Za-z0-9])\s*\n+\s*([)\]])/g, (match, before, after) => {
    // Skip if it's a complex number expression
    if (before.includes('z') && (before.includes('z_') || before.includes('z['))) {
      return match
    }
    return `${before}${after}`
  })
  fixed = fixed.replace(/([A-Za-z0-9])\s*\n+\s*([+\-*/=^])/g, (match, before, op) => {
    // Skip if it's a complex number expression
    if (before.includes('z') && (before.includes('z_') || before.includes('z²') || before.includes('z³'))) {
      return match
    }
    return `${before} ${op}`
  })
  fixed = fixed.replace(/([+\-*/=^])\s*\n+\s*([A-Za-z0-9(\[])/g, (match, op, after) => {
    // Skip if it's a complex number expression
    if (after.includes('z') && (after.startsWith('z_') || after.startsWith('z['))) {
      return match
    }
    return `${op} ${after}`
  })
  fixed = fixed.replace(/([A-Za-z0-9])\s*\n+\s*_/g, (match, before) => {
    // Skip if it's a complex number expression
    if (before.includes('z') && before.includes('z_')) {
      return match
    }
    return `${before}_`
  })
  fixed = fixed.replace(/_\s*\n+\s*([A-Za-z0-9])/g, (match, after) => {
    // Skip if it's a complex number expression
    if (after.includes('z') && after.startsWith('z')) {
      return match
    }
    return `_${after}`
  })
  fixed = fixed.replace(/([A-Za-z])\s*\n+\s*([0-9])/g, (match, before, after) => {
    // Skip if it's a complex number expression (z followed by number)
    if (before === 'z' || before === 'Z') {
      return match
    }
    return `${before}${after}`
  })
  fixed = fixed.replace(/\b([A-Z])\s+([0-9]{1,2})\b/g, (match, letter, num) => {
    // Skip if it's a complex number expression (Z followed by number)
    if (letter === 'Z' || letter === 'z') {
      return match
    }
    return `${letter}${num}`
  })

  // Normalize split subscripts like "zM", "z M" or "z \n M" -> z_M
  // EXCLUDE complex numbers - handled by nombre-complexes-formatter.ts
  // Skip all z_ patterns for complex numbers

  // De-duplicate repeated function calls like P(1) P(1)
  fixed = fixed.replace(/(\b[A-Za-z]+'*\([^)\n]*\))\s+\1\b/g, "$1")

  // Collapse tokenized math lines into a single line when safe
  fixed = collapseMathTokenLines(fixed)

  // Wrap congruence patterns into math blocks with \pmod
  fixed = replaceOutsideMathBlocks(
    fixed,
    /([A-Za-z0-9^_{}()+\-*/ ]+?)\s*≡\s*([A-Za-z0-9^_{}()+\-*/ ]+?)\s*\[\s*([0-9]+)\s*\]/g,
    (_m, left, right, mod) => {
      return `$${left.trim()} \\equiv ${right.trim()} \\pmod{${mod.trim()}}$`
    }
  )

  // Convert standalone equivalence and logical-and symbols
  fixed = fixed.replace(/≡/g, "\\equiv ")
  fixed = fixed.replace(/∧/g, "\\wedge ")

  // 🔥 Normalize unicode integrals / bracket indices / superscripts / dot BEFORE segmentation
  // NOTE: Vector formatting is now handled by geometrie-spatiale-formatter.ts
  fixed = convertUnicodeMathTokens(fixed)

  // Remove newlines inside inline $...$ blocks (KaTeX inline parser can't handle them)
  fixed = fixed.replace(/\$(?!\$)([\s\S]*?)\$/g, (match, body) => {
    const compact = body.replace(/\s*\n+\s*/g, ' ')
    return `$${compact}$`
  })
  
  // Step 1: Fix malformed LaTeX INSIDE existing math blocks

  fixed = fixed.replace(/\$([^$]*?)ec\{([^}]+)\}([^$]*?)\$/g, (match, before, content, after) => {
    console.log(`✅ Fixed incorrect LaTeX command: "ec{${content}}" -> "\\vec{${content}}"`)
    return `$${before}\\vec{${content}}${after}$`
  })

  fixed = fixed.replace(/\$([^$]*?)\\ec\{([^}]+)\}([^$]*?)\$/g, (match, before, content, after) => {
    console.log(`✅ Fixed incorrect LaTeX command: "\\ec{${content}}" -> "\\vec{${content}}"`)
    return `$${before}\\vec{${content}}${after}$`
  })

  // Fix double \v\v\vec and single \v\vec (should be just \vec)
  fixed = fixed.replace(/\$([^$]*?)\\v\\v\\vec\{([^}]+)\}([^$]*?)\$/g, (match, before, content, after) => {
    console.log(`✅ Fixed incorrect LaTeX command: "\\v\\v\\vec{${content}}" -> "\\vec{${content}}"`)
    return `$${before}\\vec{${content}}${after}$`
  })

  fixed = fixed.replace(/\$([^$]*?)\\v\\vec\{([^}]+)\}([^$]*?)\$/g, (match, before, content, after) => {
    console.log(`✅ Fixed incorrect LaTeX command: "\\v\\vec{${content}}" -> "\\vec{${content}}"`)
    return `$${before}\\vec{${content}}${after}$`
  })

  fixed = fixed.replace(
    /\$([^$]*?)(\\?overrightarrow)\s*\{?([A-Z][A-Z0-9]+)\}?(?![A-Z0-9])([^$]*?)\$/g,
    (match, before, cmd, vecName, after) => {
      console.log(`✅ Fixed overrightarrow in math block: "${cmd}${vecName}" -> "\\overrightarrow{${vecName}}"`)
      return `$${before}\\overrightarrow{${vecName}}${after}$`
    }
  )

  fixed = fixed.replace(/\$([^$]*?)(\s)cdot(\s)([^$]*?)\$/g, (match, before, space1, _cdot, space2, after) => {
    console.log(`✅ Fixed missing backslash before cdot in math block`)
    return `$${before}${space1}\\cdot${space2}${after}$`
  })

  fixed = fixed.replace(/\$(\s*)cdot(\s)([^$]*?)\$/g, (match, space1, space2, after) => {
    console.log(`✅ Fixed missing backslash before cdot at start of math block`)
    return `$${space1}\\cdot${space2}${after}$`
  })

  // Step 1.5: KaTeX safety — collapse double backslashes inside math blocks
  fixed = fixed.replace(/(\$\$)([\s\S]*?)(\$\$)/g, (full, open, inner, close) => {
    const normalized = inner
      .replace(
        /\\{2,}(vec|overrightarrow|cdot|times|frac|sqrt|sum|int|lim|log|ln|sin|cos|tan|cot|sec|csc|left|right|begin|end)\b/g,
        `\\$1`
      )
      .replace(/\\{3,}/g, `\\`)
    return `${open}${normalized}${close}`
  })

  fixed = fixed.replace(/(\$)([^$]*?)(\$)/g, (full, open, inner, close) => {
    const normalized = inner
      .replace(
        /\\{2,}(vec|overrightarrow|cdot|times|frac|sqrt|sum|int|lim|log|ln|sin|cos|tan|cot|sec|csc|left|right|begin|end)\b/g,
        `\\$1`
      )
      .replace(/\\{3,}/g, `\\`)
    return `${open}${normalized}${close}`
  })

  // NOTE: Vector formatting is now handled by geometrie-spatiale-formatter.ts
  // Step 2: Split text into segments (text vs math blocks)
  const segments: Array<{ type: "text" | "math"; content: string }> = []
  const mathBlockRegex = /\$\$?[^$]+\$\$?/g
  let lastIndex = 0

  mathBlockRegex.lastIndex = 0

  let regexMatch: RegExpExecArray | null
  while ((regexMatch = mathBlockRegex.exec(fixed)) !== null) {
    const m = regexMatch
    if (m.index > lastIndex) {
      segments.push({ type: "text", content: fixed.substring(lastIndex, m.index) })
    }
    segments.push({ type: "math", content: m[0] })
    lastIndex = m.index + m[0].length
  }

  if (lastIndex < fixed.length) {
    segments.push({ type: "text", content: fixed.substring(lastIndex) })
  }
  if (segments.length === 0) {
    segments.push({ type: "text", content: fixed })
  }

  // Step 3: Process text segments only (skip math blocks)
  const processedSegments = segments.map((segment) => {
    if (segment.type === "math") return segment.content

    let processed = segment.content

    // 🔥 Wrap full integrals in plain text so KaTeX renders the whole expression
    processed = wrapPlainTextIntegrals(processed)
    // 🔥 Sums are handled by normalizeSummationsEarly in formatMathInText

    return processed
  })

  fixed = processedSegments.join("")

  fixed = fixed.replace(/\$\$\$+/g, "$$")

  return fixed
}

/**
 * Automatically detect and convert mathematical expressions to LaTeX
 * This converts plain text math like "f(x) = x^2" to LaTeX "$f(x) = x^2$"
 */
function autoConvertMathToLatex(text: string): string {
  if (!text || typeof text !== "string") return text

  const mergeMathLineBreaks = (input: string): string => {
    let merged = input
    // Drop standalone underscore lines (subscript artifacts)
    merged = merged.replace(/(?:^|\n)\s*_+\s*(?=\n)/g, '\n')
    
    // FIX: Join equations like "f(x) = x\nadmet" → "f(x) = x admet"
    // Match: function = value followed by newline and French word
    merged = merged.replace(/(\b[a-zA-Z]+'?\([^)]+\)\s*=\s*[a-zA-Z0-9]+)\s*\n+\s*(admet|est|a |où|car|donc|et |ou |si |pour|sur|dans|avec)/gi, '$1 $2')
    
    // FIX: Join "I = ]interval[\ntext" → "I = ]interval[ text"
    merged = merged.replace(/(\b[A-Z]\s*=\s*[\[\]][^;\[\]]+;[^;\[\]]+[\[\]])\s*\n+\s*([a-zA-Z])/g, '$1 $2')
    
    // FIX: Join "lim\n_{x→...}" → "lim_{x→...}"  
    merged = merged.replace(/\blim\s*\n+\s*(_?\{?)/gi, 'lim$1')
    
    // FIX: Join broken interval closing "]-1/2;+∞[\ntext" → "]-1/2;+∞[ text"
    merged = merged.replace(/([\[\]][^;\n]+;[^;\n]+[\[\]])\s*\n+\s*([,\.]?\s*[a-zA-Z])/g, '$1 $2')
    
    // Join lines that clearly continue a math expression
    merged = merged.replace(/([0-9A-Za-z\)\]])\s*\n+\s*([+\-*/=])/g, '$1 $2')
    merged = merged.replace(/([+\-*/=])\s*\n+\s*([0-9A-Za-z\(\[])/g, '$1 $2')
    merged = merged.replace(/([(\[])\s*\n+\s*([0-9A-Za-z])/g, '$1$2')
    merged = merged.replace(/([0-9A-Za-z])\s*\n+\s*([)\]])/g, '$1$2')
    merged = merged.replace(/([0-9A-Za-z])\s*\n+\s*([(\[])/g, '$1$2')
    merged = merged.replace(/([)\]])\s*\n+\s*([0-9A-Za-z])/g, '$1$2')
    merged = merged.replace(/([0-9A-Za-z])\s*\n+\s*_/g, '$1_')
    merged = merged.replace(/_\s*\n+\s*([0-9A-Za-z])/g, '_$1')
    merged = merged.replace(/([A-Za-z])\s*\n+\s*([0-9])/g, '$1$2')
    merged = merged.replace(/\b([A-Z])\s+([0-9]{1,2})\b/g, '$1$2')
    // De-duplicate repeated function calls split across lines
    merged = merged.replace(/(\b[A-Za-z]+'*\([^)\n]*\))\s+\1\b/g, '$1')
    return merged
  }

  const applyOutsideLatex = (input: string, transform: (chunk: string) => string): string => {
    let out = ''
    let i = 0

    while (i < input.length) {
      const nextDollar = input.indexOf('$', i)
      if (nextDollar === -1) {
        out += transform(input.slice(i))
        break
      }

      if (nextDollar > i) {
        out += transform(input.slice(i, nextDollar))
      }

      const isDouble = input[nextDollar + 1] === '$'
      const delimiter = isDouble ? '$$' : '$'
      const end = input.indexOf(delimiter, nextDollar + delimiter.length)
      if (end === -1) {
        out += transform(input.slice(nextDollar))
        break
      }

      out += input.slice(nextDollar, end + delimiter.length)
      i = end + delimiter.length
    }

    return out
  }

  const replaceOutsideLatex = (
    input: string,
    regex: RegExp,
    replacer: string | ((...args: any[]) => string)
  ): string => {
    return applyOutsideLatex(input, (chunk) => chunk.replace(regex, replacer as any))
  }

  const normalizedText = mergeMathLineBreaks(convertUnicodeMathTokens(text))
  
  // ============================================================================
  // EARLY PROTECTION: Convert underscore-subscript notation to LaTeX FIRST
  // This prevents Markdown from misinterpreting _ as italic/subscript
  // IMPORTANT: Only process content OUTSIDE existing $...$ blocks
  // ============================================================================
  const protectSubscripts = (input: string): string => {
    // Helper to apply replacement only outside LaTeX blocks
    const replaceOutsideDollar = (text: string, regex: RegExp, replacer: (match: string, ...args: string[]) => string): string => {
      let result = ''
      let i = 0
      
      while (i < text.length) {
        const nextDollar = text.indexOf('$', i)
        
        if (nextDollar === -1) {
          // No more LaTeX blocks, process rest of string
          result += text.slice(i).replace(regex, replacer as any)
          break
        }
        
        if (nextDollar > i) {
          // Process text before LaTeX block
          result += text.slice(i, nextDollar).replace(regex, replacer as any)
        }
        
        // Find matching closing delimiter
        const isDouble = text[nextDollar + 1] === '$'
        const delimiter = isDouble ? '$$' : '$'
        const end = text.indexOf(delimiter, nextDollar + delimiter.length)
        
        if (end === -1) {
          // No closing delimiter, keep rest unchanged
          result += text.slice(nextDollar)
          break
        }
        
        // Keep LaTeX content unchanged
        result += text.slice(nextDollar, end + delimiter.length)
        i = end + delimiter.length
      }
      
      return result
    }
    
    let result = input
    
    // Unicode subscript map for conversion
    const subMap: Record<string, string> = { 
      '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', 
      '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' 
    }
    const cleanSub = (s: string) => {
      let clean = s
      for (const [uni, num] of Object.entries(subMap)) {
        clean = clean.replace(new RegExp(uni, 'g'), num)
      }
      return clean
    }
    
    // Pattern 1: z_{M₁} = expression (with curly braces and equals) - OUTSIDE LaTeX only
    result = replaceOutsideDollar(result, /\b([a-zA-Z])_\{([^}]+)\}\s*=\s*([^\n•]+?)(?=\s*$|\s*\n|•)/g, 
      (match: string, varName: string, sub: string, expr: string) => {
        let exprClean = expr.trim()
        exprClean = exprClean.replace(/\(([^)]+)\)\/([0-9]+)/g, '\\frac{$1}{$2}')
        return '$' + varName + '_{' + cleanSub(sub) + '} = ' + exprClean + '$'
      })
    
    // Pattern 2: z_{M₁} standalone (with curly braces, no equals) - OUTSIDE LaTeX only
    result = replaceOutsideDollar(result, /\b([a-zA-Z])_\{([^}]+)\}(?!\s*=)/g, 
      (match: string, varName: string, sub: string) => {
        return '$' + varName + '_{' + cleanSub(sub) + '}$'
      })
    
    // Pattern 3: z_M = m (simple underscore with equals) - OUTSIDE LaTeX only
    result = replaceOutsideDollar(result, /\b([a-zA-Z])_([A-Za-z0-9]+)\s*=\s*([^\n•,]+?)(?=\s*$|\s*\n|•|,)/g, 
      (match: string, varName: string, sub: string, expr: string) => {
        return '$' + varName + '_{' + sub + '} = ' + expr.trim() + '$'
      })
    
    // Pattern 4: z_M standalone (simple underscore, no equals) - OUTSIDE LaTeX only
    result = replaceOutsideDollar(result, /\b([a-zA-Z])_([A-Za-z0-9]+)(?!\s*=)/g, 
      (match: string, varName: string, sub: string) => {
        return '$' + varName + '_{' + sub + '}$'
      })
    
    return result
  }
  
  // Apply early subscript protection
  const textWithSubscripts = protectSubscripts(normalizedText)
  
  // Helper function to convert matrix notation [[...], [...], [...]] to LaTeX
  const convertMatrixToLatex = (text: string): string => {
    // Pattern: [[1, -1, -2], [2, 0, 4], [3, 3, 1]]
    // Match nested brackets: [[...], [...], [...]]
    // This function finds all matrices and converts them to LaTeX format
    
    let result = text
    const matrices: Array<{ start: number; end: number; rows: string[] }> = []
    
    // Find all matrix patterns
    let searchIndex = 0
    while (true) {
      const startIndex = result.indexOf('[[', searchIndex)
      if (startIndex === -1) break
      
      let currentIndex = startIndex + 2
      const rows: string[] = []
      let validMatrix = false
      
      // Find first row
      const firstRowEnd = result.indexOf(']', currentIndex)
      if (firstRowEnd === -1 || firstRowEnd === currentIndex) {
        searchIndex = startIndex + 1
        continue
      }
      
      const firstRow = result.substring(currentIndex, firstRowEnd).trim()
      if (firstRow.length > 0 && firstRow.includes(',')) {
        rows.push(firstRow)
        currentIndex = firstRowEnd + 1
        
        // Look for additional rows
        while (currentIndex < result.length) {
          // Skip whitespace and comma
          while (currentIndex < result.length && /\s|,/.test(result[currentIndex])) {
            currentIndex++
          }
          
          if (currentIndex >= result.length) break
          
          if (result[currentIndex] === '[') {
            // Found another row
            const rowStart = currentIndex + 1
            const rowEnd = result.indexOf(']', rowStart)
            if (rowEnd === -1) break
            
            const rowContent = result.substring(rowStart, rowEnd).trim()
            if (rowContent.length > 0) {
              rows.push(rowContent)
              currentIndex = rowEnd + 1
            } else {
              break
            }
          } else if (result[currentIndex] === ']' && rows.length >= 2) {
            // Found closing bracket - valid matrix!
            const endIndex = currentIndex + 1
            matrices.push({ start: startIndex, end: endIndex, rows: [...rows] })
            searchIndex = endIndex
            validMatrix = true
            break
          } else {
            break
          }
        }
      }
      
      if (!validMatrix) {
        searchIndex = startIndex + 1
      }
    }
    
    // Replace matrices from end to start to preserve indices
    for (let i = matrices.length - 1; i >= 0; i--) {
      const matrix = matrices[i]
      const latexRows = matrix.rows.map(row => {
        const elements = row.split(',').map(el => el.trim())
        return elements.join(' & ')
      })
      
      const latexMatrix = `\\begin{pmatrix}\n${latexRows.join(' \\\\\n')}\n\\end{pmatrix}`
      const replacement = `$$${latexMatrix}$$`
      
      result = result.substring(0, matrix.start) + replacement + result.substring(matrix.end)
    }
    
    return result
  }
  
  // Apply matrix conversion first (before other math conversions)
  // Use textWithSubscripts which has protected underscore notation
  let textWithMatrices = convertMatrixToLatex(textWithSubscripts)
  
  // Helper function to detect and convert common math patterns
  const convertCommonMathPatterns = (text: string): string => {
    let result = text
    
    const superscriptMap: Record<string, string> = {
      '²': '2', '³': '3', '¹': '1', '⁰': '0', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
      '⁻': '-', '⁺': '+'
    }
    const subscriptMap: Record<string, string> = {
      '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
    }
    
    // IMPORTANT: Process full equations FIRST before individual symbols
    // Pattern 1: Full equations like "A² - 3A + 2I₃ = O" (must come first!)
    // Detect equations that contain Unicode math symbols (², ³, ₃, etc.)
    // This pattern is more flexible and matches equations even if some terms don't have Unicode
    result = replaceOutsideLatex(result, /([A-Z][²³¹⁰⁴⁵⁶⁷⁸⁹⁻⁺_]*|[0-9]+[A-Z])\s*([+\-])\s*([0-9]*[A-Z][²³¹⁰⁴⁵⁶⁷⁸⁹⁻⁺_]*|[0-9]+[A-Z])\s*([+\-])\s*([0-9]*[A-Z][²³¹⁰⁴⁵⁶⁷⁸⁹⁻⁺_]*|[0-9]+[A-Z])\s*=\s*([A-Z])\b/g, (match: string) => {
      // Convert Unicode to LaTeX - handle all Unicode subscripts and superscripts
      let latex = match
        // Superscripts
        .replace(/²/g, '^{2}')
        .replace(/³/g, '^{3}')
        .replace(/¹/g, '^{1}')
        .replace(/⁰/g, '^{0}')
        .replace(/⁴/g, '^{4}')
        .replace(/⁵/g, '^{5}')
        .replace(/⁶/g, '^{6}')
        .replace(/⁷/g, '^{7}')
        .replace(/⁸/g, '^{8}')
        .replace(/⁹/g, '^{9}')
        .replace(/⁻/g, '^{-')
        .replace(/⁺/g, '^{+')
        // Subscripts
        .replace(/₃/g, '_{3}')
        .replace(/₀/g, '_{0}')
        .replace(/₁/g, '_{1}')
        .replace(/₂/g, '_{2}')
        .replace(/₄/g, '_{4}')
        .replace(/₅/g, '_{5}')
        .replace(/₆/g, '_{6}')
        .replace(/₇/g, '_{7}')
        .replace(/₈/g, '_{8}')
        .replace(/₉/g, '_{9}')
        .replace(/×/g, ' \\times ')
        .replace(/\s+/g, ' ')
        .replace(/\s*([+\-])\s*/g, ' $1 ')
      return `$${latex}$`
    })
    
    // Pattern 1b: Also catch simpler equations like "A² = B" or "2I₃ = O"
    result = replaceOutsideLatex(result, /\b([0-9]*[A-Z][²³¹⁰⁴⁵⁶⁷⁸⁹⁻⁺_]*)\s*=\s*([A-Z])\b/g, (match: string) => {
      if (match.includes('$')) return match
      let latex = match
        .replace(/²/g, '^{2}')
        .replace(/³/g, '^{3}')
        .replace(/¹/g, '^{1}')
        .replace(/₃/g, '_{3}')
        .replace(/₀/g, '_{0}')
        .replace(/₁/g, '_{1}')
        .replace(/₂/g, '_{2}')
        .replace(/₄/g, '_{4}')
        .replace(/₅/g, '_{5}')
        .replace(/₆/g, '_{6}')
        .replace(/₇/g, '_{7}')
        .replace(/₈/g, '_{8}')
        .replace(/₉/g, '_{9}')
        .replace(/\s+/g, ' ')
      return `$${latex}$`
    })
    
    // Pattern 2: Variables with subscripts: I_3, A_1, etc. (but not in LaTeX already)
    result = replaceOutsideLatex(result, /\b([A-Z])\s*_([0-9]+)\b/g, (match: string, letter: string, num: string) => {
      return `$${letter}_{${num}}$`
    })
    
    // Pattern 3: Variables with superscripts: A^2, etc.
    result = replaceOutsideLatex(result, /\b([A-Z])\s*\^([0-9]+)\b/g, (match: string, letter: string, exp: string) => {
      return `$${letter}^{${exp}}$`
    })
    
    // Pattern 4: Subscripts with Unicode: I₃, A₁, etc. (before superscripts to avoid conflicts)
    result = replaceOutsideLatex(result, /\b([A-Z])([₀₁₂₃₄₅₆₇₈₉]+)\b/g, (match: string, letter: string, sub: string) => {
      if (match.includes('$')) return match
      const subNum = sub.split('').map(s => subscriptMap[s] || s).join('')
      return `$${letter}_{${subNum}}$`
    })
    
    // Pattern 5: Unicode superscripts: A², I³, etc. (after subscripts)
    result = replaceOutsideLatex(result, /\b([A-Z])([²³¹⁰⁴⁵⁶⁷⁸⁹⁻⁺]+)\b/g, (match: string, letter: string, sup: string) => {
      if (match.includes('$')) return match
      const supNum = sup.split('').map(s => superscriptMap[s] || s).join('')
      return `$${letter}^{${supNum}}$`
    })
    
    return result
  }
  
  // Apply common math patterns conversion
  textWithMatrices = convertCommonMathPatterns(textWithMatrices)
  
  // Helper function to convert math expression to LaTeX
  const convertMathToLatex = (expr: string): string => {
    let latex = expr.trim()
    
    // Normalize en-dash and em-dash to minus
    latex = latex.replace(/[–—]/g, '-')
    
    // Convert exponents (must come first, before other conversions)
    // Handle both ^2 and Unicode ²
    latex = latex.replace(/([a-zA-Z0-9\)\]])\^([0-9]+|[a-zA-Z]+)/g, '$1^{$2}')
    // Convert Unicode superscripts that might have been missed
    latex = latex.replace(/([a-zA-Z0-9\)\]])([²³⁴⁵⁶⁷⁸⁹⁰¹])/g, (match, base, sup) => {
      const supN = mapSupDigits(sup)
      return `${base}^{${supN}}`
    })
    
    // Convert fractions
    latex = latex.replace(/\(([^)]+)\)\s*\/\s*\(([^)]+)\)/g, '\\frac{$1}{$2}')
    
    // Clean up multiplication signs
    latex = latex.replace(/\*/g, ' \\cdot ')
    
    // Clean up spaces around operators (but preserve spacing for readability)
    latex = latex.replace(/\s*([+\-=])\s*/g, ' $1 ')
    
    // Remove extra spaces but keep necessary ones
    latex = latex.replace(/\s+/g, ' ')
    
    return latex.trim()
  }
  
  // Helper to check if expression looks like math
  const isMathExpression = (expr: string): boolean => {
    if (expr.length < 3) return false
    // Must contain math operators or variables
    if (!/[+\-*\/=<>≤≥≠^()0-9a-zA-Z]/.test(expr)) return false
    // Check for too many French words
    const frenchWords = ['le', 'la', 'les', 'de', 'du', 'des', 'en', 'sur', 'par', 'pour', 'avec', 'sans', 'dans', 'dont', 'que', 'qui', 'quoi', 'où', 'quand', 'comment', 'pourquoi', 'combien', 'quel', 'quelle', 'quels', 'quelles', 'ce', 'cette', 'ces', 'se', 'te', 'me', 'nous', 'vous', 'ils', 'elles', 'il', 'elle', 'on', 'un', 'une', 'et', 'ou', 'mais', 'donc', 'car', 'si', 'alors', 'or', 'ni', 'soit', 'soient', 'est', 'sont', 'être', 'avoir', 'faire', 'définie', 'définir', 'montrer', 'calculer', 'étudier', 'résoudre', 'déduire']
    const words = expr.toLowerCase().split(/\s+/)
    const frenchWordCount = words.filter((w: string) => frenchWords.includes(w)).length
    return !(frenchWordCount > words.length * 0.2 && words.length > 3)
  }
  
  // Process line by line for better control
  const lines = textWithMatrices.split('\n')
  const processedLines = lines.map(line => {
    // Skip if already has LaTeX
    if (line.includes('$')) return line
    
    let resultLine = line
    
    // Pattern 0: Standalone function calls like "P(z)" or "P(1)" - convert to LaTeX
    // EXCLUDE complex numbers (P(z), P(1), etc.) - handled by nombre-complexes-formatter.ts
    // IMPORTANT: Use negative lookahead to NOT match if followed by = (let equation patterns handle that)
    // STRICT: Only convert in clear math context, skip French words
    resultLine = resultLine.replace(/\b([A-Z])\s*\(([0-9a-zA-Z]+)\)(?!\s*=)/g, (match: string, func: string, arg: string) => {
      // Skip if already in LaTeX
      if (match.includes('$')) return match
      
      // EXCLUDE complex numbers: P(z), P(1), Q(z), etc. - handled by nombre-complexes-formatter.ts
      if (arg === 'z' || arg.startsWith('z_') || arg.startsWith('z[') || /^z[0-9]/.test(arg)) {
        return match
      }
      
      // Skip common French words that start with capital letter
      const skipWords = ['T', 'E', 'P', 'R', 'Q', 'A', 'V', 'O', 'U', 'I', 'N', 'S', 'D', 'L', 'C', 'M']
      if (skipWords.includes(func) && arg.length === 1 && /^[aeiouy]$/i.test(arg)) {
        // Likely French text like "T(e)" in "prêt(e)"
        return match
      }
      
      // STRICT: Only convert if in clear math context
      const matchPos = resultLine.indexOf(match)
      if (matchPos === -1) return match
      const before = resultLine.substring(Math.max(0, matchPos - 20), matchPos)
      const after = resultLine.substring(matchPos + match.length, Math.min(resultLine.length, matchPos + match.length + 20))
      
      // Must be in math context: after =, after math operators, after \sum, \int, etc.
      const clearMathContext = /^\s*=\s*|^\s*\+|^\s*\-|^\s*\*|^\s*\/|^\s*\^|^\s*\\sum|^\s*\\int|^\s*Σ|^\s*∑|^\s*\$/.test(after) || /[=+\-*\/^]\s*$|\$\s*$|\\sum|\s*\\int|Σ|\s*∑/.test(before)
      // Must NOT be in French text context
      const frenchTextContext = /\b(es|tu|pr|êt|qu|av|ou|et|ma|sa|ta|ca|va|il|el|ne|si|le|la|les|de|du|des|en|sur|par|pour|avec|sans|dans|dont|que|qui|quoi|où|quand|comment|pourquoi|combien|quel|quelle|quels|quelles|ce|cette|ces|se|me|nous|vous|ils|elles|elle|on|un|une|est|sont|être|avoir|faire|définie|définir|montrer|calculer|étudier|résoudre|déduire|prêt|prête|comprends|comprend|demande|demandes|souviens|souviens-tu|dis-moi|dis|me|te|nous|vous)\b/i.test(before + after)
      
      // Only convert if it's a common math function name (P, Q, R, S, T, etc.) in clear math context
      const isCommonMathFunction = /^[A-Z]$/.test(func) && /^[a-zA-Z0-9+\-*\/^()]+$/.test(arg)
      
      if (isCommonMathFunction && clearMathContext && !frenchTextContext) {
        return '$' + func + '(' + arg + ')$'
      }
      return match
    })
    
    // Pattern 1: "P(z) = 2z^2 - ..." (polynomials) - More aggressive
    // EXCLUDE complex numbers (P(z), etc.) - handled by nombre-complexes-formatter.ts
    // Match P(z) = followed by a long math expression
    const polyMatch = line.match(/\b([A-Z])\s*\(([a-zA-Z]+)\)\s*=\s*([^=\n]+)/)
    if (polyMatch) {
      const func = polyMatch[1]
      const varName = polyMatch[2]
      // Skip if it's a complex number expression
      if (varName === 'z' || varName.startsWith('z_') || varName.startsWith('z[')) {
        // Skip this pattern for complex numbers - handled by nombre-complexes-formatter.ts
      } else {
        let expr = polyMatch[3]
        
        // Extract expression until punctuation or end of line
        // Allow longer expressions with multiple terms
        const exprMatch = expr.match(/^([^.,!?;:\n]+?)(?:\s*$|[.,!?;:]|$)/)
        if (exprMatch) {
          expr = exprMatch[1].trim()
          
          // Check if it's a math expression (has operators, variables, numbers)
          const hasMathContent = /[+\-*\/^()0-9a-zA-Z²³⁴⁵⁶⁷⁸⁹⁰¹]/.test(expr)
          const hasMultipleTerms = /[+\-]\s*[0-9a-zA-Z()]/.test(expr)
          // Single number/variable is also valid for equations like P(z) = 0 or f(x) = x
          const isSimpleValue = /^[0-9]+$/.test(expr) || /^[a-zA-Z]$/.test(expr)
          
          if (hasMathContent && (expr.length >= 5 || hasMultipleTerms || isSimpleValue)) {
            // Additional check: if it contains math operators and variables, it's likely math
            if (isMathExpression(expr) || hasMultipleTerms || isSimpleValue) {
              const exprLatex = convertMathToLatex(expr)
              // Replace the entire match, preserving any text before/after
              const fullMatch = func + '(' + varName + ') = ' + expr
              resultLine = resultLine.replace(fullMatch, '$' + func + '(' + varName + ') = ' + exprLatex + '$')
            }
          }
        }
      }
    }
    
    // Pattern 2: Complete equations "2z^2 - 2(1-i+m)z + ... = 0"
    // Very aggressive: detect any equation pattern, even with text before/after
    if (!resultLine.includes('$')) {
      // Look for equation patterns: number/variable^power +/- ... = something
      // This pattern is more flexible and catches complex equations
      const equationPatterns = [
        // Pattern: "2z^2 - 2(1-i+m)z + (m+1)(m-i) = 0"
        /([0-9]*[a-zA-Z]+\^?[0-9]*\s*[+\-]\s*[0-9]*\(?[^=]+\)?\s*[+\-]\s*[0-9]*\(?[^=]+\)?)\s*=\s*([0-9]+|[a-zA-Z]+|\([^)]+\))/,
        // Pattern: any expression with = that has math operators
        /([0-9a-zA-Z()+\-*\/^_{}]+\s*[+\-]\s*[0-9a-zA-Z()+\-*\/^_{}]+(?:\s*[+\-]\s*[0-9a-zA-Z()+\-*\/^_{}]+)*)\s*=\s*([0-9]+|[a-zA-Z]+|\([^)]+\))/,
      ]
      
      for (const pattern of equationPatterns) {
        const eqMatch = resultLine.match(pattern)
        if (eqMatch) {
          const leftSide = eqMatch[1].trim()
          const rightSide = eqMatch[2].trim()
          
          // Stop at punctuation if present
          const leftClean = leftSide.split(/[.,!?;:]/)[0].trim()
          const rightClean = rightSide.split(/[.,!?;:]/)[0].trim()
          
          // Check if it looks like math (including Unicode superscripts)
          const hasMathOps = /[+\-*\/^()–—]/.test(leftClean)
          const hasVarsOrNums = /[0-9a-zA-Z²³⁴⁵⁶⁷⁸⁹⁰¹]/.test(leftClean)
          const isLongEnough = leftClean.length >= 5
          
          if (hasMathOps && hasVarsOrNums && isLongEnough) {
            // Additional validation: check if it's not just text
            if (isMathExpression(leftClean) || /[+\-]\s*[0-9a-zA-Z()]/.test(leftClean)) {
              const leftLatex = convertMathToLatex(leftClean)
              const rightLatex = convertMathToLatex(rightClean)
              const fullEq = eqMatch[0]
              resultLine = resultLine.replace(fullEq, '$' + leftLatex + ' = ' + rightLatex + '$')
              break // Found a match, stop looking
            }
          }
        }
      }
      
      // Fallback: simple = detection for any remaining equations
      if (!resultLine.includes('$')) {
        const equalsIndex = resultLine.indexOf('=')
        if (equalsIndex > 0 && equalsIndex < resultLine.length - 1) {
          const beforeEquals = resultLine.substring(0, equalsIndex).trim()
          const afterEquals = resultLine.substring(equalsIndex + 1).trim()
          
          // Stop at punctuation
          const leftClean = beforeEquals.split(/[.,!?;:]/)[0].trim()
          const rightClean = afterEquals.split(/[.,!?;:]/)[0].trim()
          
          // More lenient check for math expressions
          const hasMathOps = /[+\-*\/^()]/.test(leftClean)
          const hasVarsOrNums = /[0-9a-zA-Z]/.test(leftClean)
          const hasMultipleTerms = /[+\-]\s*[0-9a-zA-Z()]/.test(leftClean)
          const isLongEnough = leftClean.length >= 5
          
          if (hasMathOps && hasVarsOrNums && (isLongEnough || hasMultipleTerms)) {
            if (isMathExpression(leftClean) || hasMultipleTerms) {
              const leftLatex = convertMathToLatex(leftClean)
              const rightLatex = convertMathToLatex(rightClean)
              const fullEq = leftClean + ' = ' + rightClean
              resultLine = resultLine.replace(fullEq, '$' + leftLatex + ' = ' + rightLatex + '$')
            }
          }
        }
      }
    }
    
    return resultLine
  })
  
  let result = processedLines.join('\n')
  
  // Additional pass: detect any remaining math expressions in the text
  // Look for expressions that weren't caught by line-by-line processing
  // This handles cases where math is embedded in text
  result = result.split(/(\n)/).map((part) => {
    // Process non-newline parts
    if (part === '\n' || part.includes('$')) return part
    
    let processed = part
    
    // Pattern 1: P(z) = ... (polynomials in text)
    // EXCLUDE complex numbers (P(z), etc.) - handled by nombre-complexes-formatter.ts
    processed = processed.replace(/\b([A-Z])\s*\(([a-zA-Z]+)\)\s*=\s*([^=\n.,!?;:]+)/g, (match, func, varName, expr) => {
      if (match.includes('$')) return match
      // Skip if it's a complex number expression
      if (varName === 'z' || varName.startsWith('z_') || varName.startsWith('z[')) {
        return match
      }
      expr = expr.trim()
      if (expr.length >= 5 && (isMathExpression(expr) || /[+\-]\s*[0-9a-zA-Z()]/.test(expr))) {
        const exprLatex = convertMathToLatex(expr)
        return '$' + func + '(' + varName + ') = ' + exprLatex + '$'
      }
      return match
    })
    
    // Pattern 2: Any expression with = that looks like math
    if (!processed.includes('$')) {
      const mathEqRegex = /([0-9a-zA-Z()+\-*\/^_{}]+\s*[+\-]\s*[0-9a-zA-Z()+\-*\/^_{}]+(?:\s*[+\-]\s*[0-9a-zA-Z()+\-*\/^_{}]+)*)\s*=\s*([0-9]+|[a-zA-Z]+|\([^)]+\))/g
      processed = processed.replace(mathEqRegex, (match, left, right) => {
        if (match.includes('$')) return match
        const leftClean = left.trim().split(/[.,!?;:]/)[0].trim()
        const rightClean = right.trim().split(/[.,!?;:]/)[0].trim()
        
        // More lenient check
        const hasMathOps = /[+\-*\/^()]/.test(leftClean)
        const hasVarsOrNums = /[0-9a-zA-Z]/.test(leftClean)
        const hasMultipleTerms = /[+\-]\s*[0-9a-zA-Z()]/.test(leftClean)
        
        if (hasMathOps && hasVarsOrNums && (leftClean.length >= 5 || hasMultipleTerms)) {
          if (isMathExpression(leftClean) || hasMultipleTerms) {
            const leftLatex = convertMathToLatex(leftClean)
            const rightLatex = convertMathToLatex(rightClean)
            return '$' + leftLatex + ' = ' + rightLatex + '$'
          }
        }
        return match
      })
    }
    
    return processed
  }).join('')
  
  // NOTE: Sequences/suites formatting (u₀, u₁, uₙ, etc.) is now handled by suites-formatter.ts
  
  // ============================================================================
  // UNIVERSAL EQUATION PATTERNS - These must run FIRST to capture complete equations
  // ============================================================================
  // NOTE: Function formatting (f(x) = ..., f'(x) = ..., etc.) is now handled by fonctions-formatter.ts
  
  // Pattern UNIV-2: Variable = expression (z2 = iz1 - i, M2 = R(M1), y² = 2x-1, etc.)
  // EXCLUDE complex numbers (z = ..., z_A = ..., etc.) - handled by nombre-complexes-formatter.ts
  // Handles variable (with optional subscript/superscript) = expression
  // RESTRICTED: Only capture math-like expressions (numbers, letters, operators, parentheses)
  // Stop at French words or non-math content
  result = replaceOutsideLatex(result, /\b([a-zA-Z])([0-9₀₁₂₃₄₅₆₇₈₉²³¹⁰]*)\s*=\s*([0-9a-zA-Z₀₁₂₃₄₅₆₇₈₉²³¹⁰()+\-*\/^√i\s]+?)(?=\s*$|\s*\n|,|\.|\s+et\s+|\s+où\s+|\s+puis\s+|\s+avec\s+|\s+car\s+|\s+donc\s+|\s+en\s+|\s+que\s+|\s+de\s+|\s+le\s+|\s+la\s+|\s+les\s+|\*\*)/gi, (match, varName, sub, expr) => {
    if (match.includes('$')) return match
    // Skip if it's a complex number variable (z, z_A, z_1, etc.)
    if (/^z$/i.test(varName) || varName.toLowerCase() === 'z') {
      return match
    }
    // Skip common French words at start
    if (['a', 'c', 'n', 'y'].includes(varName.toLowerCase()) && !sub && /^[a-zA-Z\s]+$/.test(expr)) return match
    // Skip if expression is just French text (more than 2 consecutive letters without math)
    if (/^[a-zA-Z]{3,}$/.test(expr.trim())) return match
    let exprLatex = expr.trim()
    // Convert subscripts
    const subMap: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' }
    const supMap: Record<string, string> = { '²': '2', '³': '3', '¹': '1', '⁰': '0' }
    let subLatex = sub.split('').map((s: string) => subMap[s] ? '_{' + subMap[s] + '}' : supMap[s] ? '^{' + supMap[s] + '}' : s).join('')
    // Convert expression elements
    exprLatex = exprLatex.replace(/\bln\s*\(/g, '\\ln(')
    exprLatex = exprLatex.replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}')
    exprLatex = exprLatex.replace(/([a-zA-Z])([0-9₀₁₂₃₄₅₆₇₈₉])/g, (m: string, l: string, d: string) => {
      const digitMap: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' }
      return l + '_{' + (digitMap[d] || d) + '}'
    })
    exprLatex = exprLatex.replace(/([a-zA-Z0-9\)\]]+)\^([0-9]+)/g, '$1^{$2}')
    return '$' + varName + subLatex + ' = ' + exprLatex + '$'
  })
  
  // Pattern UNIV-3a: Underscore subscript notation z_{M₁} = expression (with equals)
  // EXCLUDE complex numbers (z_{M1} = ..., z_A = ..., etc.) - handled by nombre-complexes-formatter.ts
  result = replaceOutsideLatex(result, /\b([a-zA-Z])_\{([^}]+)\}\s*=\s*([^\n•]+?)(?=\s*$|\s*\n|•)/g, (match, varName, sub, expr) => {
    if (match.includes('$')) return match
    // Skip if it's a complex number variable (z, z_A, z_M1, etc.)
    if (/^z$/i.test(varName)) {
      return match
    }
    let exprLatex = expr.trim()
    // Convert Unicode subscripts
    const subMap: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' }
    let subClean = sub
    for (const [uni, num] of Object.entries(subMap)) {
      subClean = subClean.replace(new RegExp(uni, 'g'), num)
    }
    exprLatex = exprLatex.replace(/\(([^)]+)\)\/([0-9]+)/g, '\\frac{$1}{$2}')
    return '$' + varName + '_{' + subClean + '} = ' + exprLatex + '$'
  })
  
  // Pattern UNIV-3b: Underscore subscript notation z_{M₁} standalone
  // EXCLUDE complex numbers (z_{M1}, z_A, etc.) - handled by nombre-complexes-formatter.ts
  result = replaceOutsideLatex(result, /\b([a-zA-Z])_\{([^}]+)\}(?!\s*=)/g, (match, varName, sub) => {
    if (match.includes('$')) return match
    // Skip if it's a complex number variable (z, z_A, z_M1, etc.)
    if (/^z$/i.test(varName)) {
      return match
    }
    // Convert Unicode subscripts
    const subMap: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' }
    let subClean = sub
    for (const [uni, num] of Object.entries(subMap)) {
      subClean = subClean.replace(new RegExp(uni, 'g'), num)
    }
    return '$' + varName + '_{' + subClean + '}$'
  })
  
  // Pattern UNIV-3c: Simple underscore subscript z_M = m
  // EXCLUDE complex numbers (z_M = m, z_A = ..., etc.) - handled by nombre-complexes-formatter.ts
  result = replaceOutsideLatex(result, /\b([a-zA-Z])_([A-Za-z0-9]+)\s*=\s*([^\n•,]+?)(?=\s*$|\s*\n|•|,)/g, (match, varName, sub, expr) => {
    if (match.includes('$')) return match
    // Skip if it's a complex number variable (z, z_A, z_M1, etc.)
    if (/^z$/i.test(varName)) {
      return match
    }
    return '$' + varName + '_{' + sub + '} = ' + expr.trim() + '$'
  })
  
  // Pattern UNIV-3d: Simple underscore subscript z_M standalone
  // EXCLUDE complex numbers (z_M, z_A, etc.) - handled by nombre-complexes-formatter.ts
  result = replaceOutsideLatex(result, /\b([a-zA-Z])_([A-Za-z0-9]+)(?!\s*=)/g, (match, varName, sub) => {
    if (match.includes('$')) return match
    // Skip if it's a complex number variable (z, z_A, z_M1, etc.)
    if (/^z$/i.test(varName)) {
      return match
    }
    return '$' + varName + '_{' + sub + '}$'
  })
  
  // Pattern UNIV-4: Unicode subscript variable M₁, M₂ standalone
  result = replaceOutsideLatex(result, /\b([A-Z])([₀₁₂₃₄₅₆₇₈₉]+)\b/g, (match, varName, sub) => {
    if (match.includes('$')) return match
    const subMap: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' }
    let subClean = sub.split('').map((s: string) => subMap[s] || s).join('')
    return '$' + varName + '_{' + subClean + '}$'
  })
  
  // Pattern UNIV-5: Simple variable with subscript zM, z1, z2 (no underscore, no braces)
  result = replaceOutsideLatex(result, /\b([zZ])([A-Z][0-9]?|[0-9])\b(?!\s*=)/g, (match, z, sub) => {
    if (match.includes('$')) return match
    return '$' + z + '_{' + sub + '}$'
  })
  
  // ============================================================================
  // END UNIVERSAL EQUATION PATTERNS
  // ============================================================================
  
  // NOTE: f(x) = [numerator] / [denominator] patterns are now handled by fonctions-formatter.ts
  
  // Pattern 0-INT: I = ]a;b[ interval assignment format
  // Handles fractions like -1/2 and infinity like +∞
  result = replaceOutsideLatex(result, /\b([A-Z])\s*=\s*(\]|\[)\s*(-?[0-9a-zA-Z\/⁺⁻]+)\s*;\s*([+-]?[0-9a-zA-Z∞⁺⁻\/]+)\s*(\[|\])/g, (match, varName, left, a, b, right) => {
    if (match.includes('$')) return match
    // Convert infinity and superscripts
    let aLatex = a.trim().replace(/\+∞/g, '+\\infty').replace(/-∞/g, '-\\infty').replace(/∞/g, '\\infty')
    aLatex = aLatex.replace(/⁺/g, '^+').replace(/⁻/g, '^-')
    let bLatex = b.trim().replace(/\+∞/g, '+\\infty').replace(/-∞/g, '-\\infty').replace(/∞/g, '\\infty')
    bLatex = bLatex.replace(/⁺/g, '^+').replace(/⁻/g, '^-')
    return '$' + varName + ' = ' + left + aLatex + ';' + bLatex + right + '$'
  })
  
  // Pattern 0-EQ: y = equation format (tangent equations, etc.)
  result = replaceOutsideLatex(result, /\by\s*=\s*([+-]?\s*\(?[0-9a-zA-Z\/√]+\)?[a-zA-Z]?\s*[+-][^*\n]+?)(?=\s*$|\s*\n|\*\*|Avec|\s+[A-Z])/g, (match, expr) => {
    if (match.includes('$')) return match
    let exprLatex = expr.trim()
    // Convert square root
    exprLatex = exprLatex.replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}')
    // Convert fractions like (1/e)
    exprLatex = exprLatex.replace(/\(([0-9]+)\/([a-zA-Z0-9]+)\)/g, '\\frac{$1}{$2}')
    // Convert simple fractions
    exprLatex = exprLatex.replace(/([0-9]+)\/([a-zA-Z0-9]+)/g, '\\frac{$1}{$2}')
    return '$y = ' + exprLatex + '$'
  })
  
  // Pattern 0-SQRT: Convert standalone square root √ to \sqrt{}
  result = replaceOutsideLatex(result, /√([a-zA-Z0-9]+)/g, (match, arg) => {
    if (match.includes('$')) return match
    return '$\\sqrt{' + arg + '}$'
  })
  
  // Pattern 0-POINT: Point coordinates A(x; y) or A(x , y)
  result = replaceOutsideLatex(result, /\b([A-Z])\s*\(\s*([^;,\)]+)\s*[;,]\s*([^)]+)\s*\)/g, (match, point, x, y) => {
    if (match.includes('$')) return match
    // Convert square root and fractions in coordinates
    let xLatex = x.trim().replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}')
    let yLatex = y.trim().replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}')
    xLatex = xLatex.replace(/([0-9]+)\/\(([^)]+)\)/g, '\\frac{$1}{$2}')
    yLatex = yLatex.replace(/([0-9]+)\/\(([^)]+)\)/g, '\\frac{$1}{$2}')
    return '$' + point + '(' + xLatex + '; ' + yLatex + ')$'
  })
  
  // NOTE: f(x) = expression patterns are now handled by fonctions-formatter.ts
  
  // Pattern 1: Fractions: (x^2 - 1)/(x + 2), a/b, etc.
  // Convert fractions to LaTeX format
  result = replaceOutsideLatex(result, /\(([^)]+)\)\s*\/\s*\(([^)]+)\)/g, (match, num, den) => {
    // Skip if already in LaTeX
    if (match.includes('$')) return match
    // Convert any exponents in numerator/denominator first
    let numLatex = num.replace(/([a-zA-Z0-9\)]+)\^([0-9]+|[a-zA-Z]+)/g, '$1^{$2}')
    let denLatex = den.replace(/([a-zA-Z0-9\)]+)\^([0-9]+|[a-zA-Z]+)/g, '$1^{$2}')
    return '$\\frac{' + numLatex + '}{' + denLatex + '}$'
  })
  
  // Pattern 1b: Also handle fractions like (x+2)^2 in denominator: /(x+2)^2
  result = replaceOutsideLatex(result, /\/(\s*\(([^)]+)\)\^([0-9]+))/g, (match, full, expr, exp) => {
    if (match.includes('$')) return match
    return '/$\\left(' + expr + '\\right)^{' + exp + '}$'
  })
  
  // Pattern 2: Exponents: x^2, a^3, (x+1)^2, etc.
  result = replaceOutsideLatex(result, /([a-zA-Z0-9\)]+)\^([0-9]+|[a-zA-Z]+)/g, (match, base, exp) => {
    // Skip if already in LaTeX
    if (match.includes('$')) return match
    return '$' + base + '^{' + exp + '}$'
  })
  
  // NOTE: f(x), f'(x) standalone patterns are now handled by fonctions-formatter.ts
  
  // Pattern 5: Limits: lim_{x→+∞}, lim_{x→-∞}, etc.
  const infinitySymbol = String.fromCharCode(8734) // ∞
  const arrowSymbol = String.fromCharCode(8594) // →
  result = replaceOutsideLatex(result, new RegExp('\\blim\\s*_?\\{?\\s*([a-zA-Z])\\s*[' + arrowSymbol + '→]\\s*([+-]?' + infinitySymbol + '|infini|infinity)\\s*\\}?', 'gi'), (match, variable, infinity) => {
    const infinityLatex = infinity.includes('+') || infinity === 'infini' || infinity === 'infinity'
      ? '+\\infty'
      : infinity.includes('-')
        ? '-\\infty'
        : '\\infty'
    return '$\\lim_{' + variable + ' \\to ' + infinityLatex + '}$'
  })
  
  // Pattern 6: Integrals: ∫, ∫_0^1, etc.
  const integralSymbol = String.fromCharCode(8747) // ∫
  result = replaceOutsideLatex(result, new RegExp(integralSymbol + '\\s*_?([0-9a-zA-Z]+)?\\^?([0-9a-zA-Z]+)?', 'g'), (match, lower, upper) => {
    if (lower && upper) {
      return '$\\int_{' + lower + '}^{' + upper + '}$'
    } else if (lower) {
      return '$\\int_{' + lower + '}$'
    } else {
      return '$\\int$'
    }
  })
  
  // Pattern 7: Natural logarithm function: ln(x), ln x
  // Convert ln(...) to $\ln(...)$
  result = replaceOutsideLatex(result, /\bln\s*\(([^)]+)\)/g, (match, arg) => {
    if (match.includes('$')) return match
    return '$\\ln(' + arg + ')$'
  })
  // Convert ln x (followed by single variable) to $\ln x$
  result = replaceOutsideLatex(result, /\bln\s+([a-zA-Z])\b/g, (match, variable) => {
    if (match.includes('$')) return match
    return '$\\ln ' + variable + '$'
  })
  
  // Pattern 8: Square bracket fractions: [a]/[b] -> $\frac{a}{b}$
  result = replaceOutsideLatex(result, /\[([^\]]+)\]\s*\/\s*\[([^\]]+)\]/g, (match, num, den) => {
    if (match.includes('$')) return match
    // Convert any ln inside to \ln
    let numLatex = num.replace(/\bln\s*\(/g, '\\ln(')
    let denLatex = den.replace(/\bln\s*\(/g, '\\ln(')
    // Convert exponents
    numLatex = numLatex.replace(/([a-zA-Z0-9\)\]]+)\^([0-9]+|[a-zA-Z]+)/g, '$1^{$2}')
    denLatex = denLatex.replace(/([a-zA-Z0-9\)\]]+)\^([0-9]+|[a-zA-Z]+)/g, '$1^{$2}')
    // Convert infinity symbols
    numLatex = numLatex.replace(/\+∞/g, '+\\infty').replace(/-∞/g, '-\\infty').replace(/∞/g, '\\infty')
    denLatex = denLatex.replace(/\+∞/g, '+\\infty').replace(/-∞/g, '-\\infty').replace(/∞/g, '\\infty')
    return '$\\frac{' + numLatex + '}{' + denLatex + '}$'
  })
  
  // Pattern 9: Interval notation with domain: sur ]a;b[ or sur ]-1;+∞[
  // This handles French interval notation used in BAC exercises
  result = replaceOutsideLatex(result, /\s+sur\s+(\]|\[)([^;\[\]]+);([^;\[\]]+)(\[|\])/g, (match, left, a, b, right) => {
    if (match.includes('$')) return match
    // Convert infinity symbols
    let aLatex = a.trim().replace(/\+∞/g, '+\\infty').replace(/-∞/g, '-\\infty').replace(/∞/g, '\\infty')
    let bLatex = b.trim().replace(/\+∞/g, '+\\infty').replace(/-∞/g, '-\\infty').replace(/∞/g, '\\infty')
    return ' $\\text{sur } ' + left + aLatex + ';' + bLatex + right + '$'
  })
  
  // Pattern 10: Standalone interval notation: ]a;b[ or [a;b] or ]a;b]
  // Handles fractions like -1/2 and infinity symbols like +∞
  result = replaceOutsideLatex(result, /(\]|\[)\s*(-?[0-9a-zA-Z\/⁺⁻]+)\s*;\s*([+-]?[0-9a-zA-Z∞⁺⁻\/]+)\s*(\[|\])/g, (match, left, a, b, right) => {
    if (match.includes('$')) return match
    // Skip if it looks like pure array indexing (both are simple integers)
    if (/^-?[0-9]+$/.test(a.trim()) && /^-?[0-9]+$/.test(b.trim())) return match
    // Convert infinity symbols and superscripts
    let aLatex = a.trim().replace(/\+∞/g, '+\\infty').replace(/-∞/g, '-\\infty').replace(/∞/g, '\\infty')
    aLatex = aLatex.replace(/⁺/g, '^+').replace(/⁻/g, '^-')
    let bLatex = b.trim().replace(/\+∞/g, '+\\infty').replace(/-∞/g, '-\\infty').replace(/∞/g, '\\infty')
    bLatex = bLatex.replace(/⁺/g, '^+').replace(/⁻/g, '^-')
    return '$' + left + aLatex + ';' + bLatex + right + '$'
  })
  
  // Pattern 11: Standalone infinity symbols: +∞, -∞, ∞
  result = replaceOutsideLatex(result, /([^a-zA-Z$\\])(\+∞|-∞|∞)([^a-zA-Z$]|$)/g, (match, before, inf, after) => {
    let infLatex = inf === '+∞' ? '+\\infty' : inf === '-∞' ? '-\\infty' : '\\infty'
    return before + '$' + infLatex + '$' + after
  })
  
  // NOTE: Simple function equations and derivative equations are now handled by fonctions-formatter.ts
  
  // Pattern 13: Double inequalities: 0.6 < α < 0.7, a < x < b
  result = replaceOutsideLatex(result, /\b([0-9.]+)\s*<\s*([a-zA-Zα-ω]+)\s*<\s*([0-9.]+)\b/g, (match, lower, variable, upper) => {
    if (match.includes('$')) return match
    // Convert Greek letters
    const greekMap: Record<string, string> = { 'α': '\\alpha', 'β': '\\beta', 'γ': '\\gamma', 'δ': '\\delta' }
    let varLatex = greekMap[variable] || variable
    return '$' + lower + ' < ' + varLatex + ' < ' + upper + '$'
  })
  
  // Pattern 14: Complex number assignments: z₀ = -i, z₁ = 4 + 3i
  result = replaceOutsideLatex(result, /\b([a-zA-Z])([₀₁₂₃₄₅₆₇₈₉]+)\s*=\s*([+-]?[0-9]*[i]?(?:\s*[+-]\s*[0-9]*[i]?)?)\b/g, (match, varName, sub, value) => {
    if (match.includes('$')) return match
    // Convert subscript
    const subMap: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' }
    let subLatex = sub.split('').map((s: string) => subMap[s] || s).join('')
    return '$' + varName + '_{' + subLatex + '} = ' + value + '$'
  })
  
  // Pattern 15: Differential equations: y'' + 2y' + y = 2e^(-x) + 1
  result = replaceOutsideLatex(result, /\b([a-zA-Z])(['′]+)\s*([+\-])\s*([0-9]*)\s*\1(['′]*)\s*([+\-])\s*([0-9]*)\s*\1\s*=\s*([^\n]+?)(?=\s*$|\s*\n)/g, (match, varName, deriv1, op1, coef1, deriv2, op2, coef2, rhs) => {
    if (match.includes('$')) return match
    // Convert primes to LaTeX
    let d1 = deriv1.replace(/'/g, "'").replace(/′/g, "'")
    let d2 = deriv2 ? deriv2.replace(/'/g, "'").replace(/′/g, "'") : ''
    let c1 = coef1 || ''
    let c2 = coef2 || ''
    // Convert e^(...) in rhs
    let rhsLatex = rhs.trim()
    rhsLatex = rhsLatex.replace(/e\^\(([^)]+)\)/g, 'e^{$1}')
    rhsLatex = rhsLatex.replace(/e\^(-?[a-zA-Z0-9]+)/g, 'e^{$1}')
    return '$' + varName + d1 + ' ' + op1 + ' ' + c1 + varName + d2 + ' ' + op2 + ' ' + c2 + varName + ' = ' + rhsLatex + '$'
  })
  
  // Pattern 16: Polynomial equations: P(z) = 0, P(x) = 0
  result = replaceOutsideLatex(result, /\b([A-Z])\s*\(([a-zA-Z])\)\s*=\s*0\b/g, (match, func, arg) => {
    if (match.includes('$')) return match
    return '$' + func + '(' + arg + ') = 0$'
  })
  
  // Pattern 17: Greek letters in context: solution α, valeur β
  result = replaceOutsideLatex(result, /\b(solution|valeur|point|nombre)\s+([α-ω])\b/gi, (match, word, greek) => {
    if (match.includes('$')) return match
    const greekMap: Record<string, string> = { 'α': '\\alpha', 'β': '\\beta', 'γ': '\\gamma', 'δ': '\\delta', 'ε': '\\epsilon', 'θ': '\\theta', 'λ': '\\lambda', 'μ': '\\mu', 'π': '\\pi', 'ρ': '\\rho', 'σ': '\\sigma', 'τ': '\\tau', 'φ': '\\phi', 'ω': '\\omega' }
    let greekLatex = greekMap[greek] || greek
    return word + ' $' + greekLatex + '$'
  })
  
  // Clean up: Remove duplicate $ signs
  result = result.replace(/\$\$+/g, '$$')
  
  return result
}

/**
 * Comprehensive math formatting fix - handles all common cases
 * This is the main function to use for formatting AI responses
 * Now also auto-converts plain text math to LaTeX
 * 
 * Uses comprehensive-math-formatter.ts for all chapter-specific patterns
 */
export function formatMathInText(text: string): string {
  if (!text || typeof text !== "string") return text
  
  // Step 1: Normalize summation expressions early to protect them from being broken apart
  // This handles patterns like "Sn = Σ k = 0^n uk" and wraps them in a single $...$ block
  let result = normalizeSummationsEarly(text)
  
  // Step 2: Apply complex number formatter (formatters/nombre-complexes-formatter.ts)
  try {
    const { formatComplexNumbers } = require('./formatters/math/nombre-complexes-formatter')
    result = formatComplexNumbers(result)
  } catch (e) {
    // If formatter doesn't exist, skip (should not happen)
    console.warn('⚠️ nombre-complexes-formatter.ts not found, skipping complex number formatting')
  }
  
  // Step 2.5: Apply function formatter (formatters/fonctions-formatter.ts)
  try {
    const { formatFunctions } = require('./formatters/math/fonctions-formatter')
    result = formatFunctions(result)
  } catch (e) {
    // If formatter doesn't exist, skip (should not happen)
    console.warn('⚠️ fonctions-formatter.ts not found, skipping function formatting')
  }
  
  // Step 2.6: Apply geometry formatter (formatters/geometrie-spatiale-formatter.ts)
  try {
    const { formatGeometrieSpatiale } = require('./formatters/math/geometrie-spatiale-formatter')
    result = formatGeometrieSpatiale(result)
  } catch (e) {
    console.warn('⚠️ geometrie-spatiale-formatter.ts not found, skipping geometry formatting')
  }
  
  // Step 2.7: Apply transformations formatter (formatters/transformations-formatter.ts)
  try {
    const { formatTransformations } = require('./formatters/math/transformations-formatter')
    result = formatTransformations(result)
  } catch (e) {
    console.warn('⚠️ transformations-formatter.ts not found, skipping transformations formatting')
  }
  
  // Step 2.8: Apply suites formatter (formatters/suites-formatter.ts)
  try {
    const { formatSuites } = require('./formatters/math/suites-formatter')
    result = formatSuites(result)
  } catch (e) {
    console.warn('⚠️ suites-formatter.ts not found, skipping suites formatting')
  }
  
  // Step 2.9: Apply dénombrement formatter (formatters/denombrement-formatter.ts)
  try {
    const { formatDenombrement } = require('./formatters/math/denombrement-formatter')
    result = formatDenombrement(result)
  } catch (e) {
    console.warn('⚠️ denombrement-formatter.ts not found, skipping dénombrement formatting')
  }
  
  // Step 2.10: Apply probabilités formatter (formatters/probabilites-formatter.ts)
  try {
    const { formatProbabilites } = require('./formatters/math/probabilites-formatter')
    result = formatProbabilites(result)
  } catch (e) {
    console.warn('⚠️ probabilites-formatter.ts not found, skipping probabilités formatting')
  }
  
  // Step 2.11: Apply arithmétique formatter (formatters/arithmetique-formatter.ts)
  try {
    const { formatArithmetique } = require('./formatters/math/arithmetique-formatter')
    result = formatArithmetique(result)
  } catch (e) {
    console.warn('⚠️ arithmetique-formatter.ts not found, skipping arithmétique formatting')
  }
  
  // Step 2.12: Apply matrices formatter (formatters/matrices-formatter.ts)
  try {
    const { formatMatrices } = require('./formatters/math/matrices-formatter')
    result = formatMatrices(result)
  } catch (e) {
    console.warn('⚠️ matrices-formatter.ts not found, skipping matrices formatting')
  }
  
  // Step 2.13: Apply coniques formatter (formatters/coniques-formatter.ts)
  try {
    const { formatConiques } = require('./formatters/math/coniques-formatter')
    result = formatConiques(result)
  } catch (e) {
    console.warn('⚠️ coniques-formatter.ts not found, skipping coniques formatting')
  }
  
  // Step 2.14: Apply physics formatter (formatters/physics/dynamique-formatter.ts)
  try {
    const { formatDynamique } = require('./formatters/physics/dynamique-formatter')
    result = formatDynamique(result)
  } catch (e) {
    console.warn('⚠️ dynamique-formatter.ts not found, skipping physics formatting')
  }
  
  // Step 3: Auto-convert plain text math to LaTeX (handles general patterns)
  result = autoConvertMathToLatex(result)
  
  // Step 3.5: Fix \v\vec and \v\v\vec errors globally (before fixMathFormatting)
  // This fixes the issue where vectors in coordinate systems are written incorrectly
  result = result.replace(/\\v\\v\\vec\{([^}]+)\}/g, (match, content) => {
    console.log(`✅ Fixed incorrect LaTeX command: "\\v\\v\\vec{${content}}" -> "\\vec{${content}}"`)
    return `\\vec{${content}}`
  })
  result = result.replace(/\\v\\vec\{([^}]+)\}/g, (match, content) => {
    console.log(`✅ Fixed incorrect LaTeX command: "\\v\\vec{${content}}" -> "\\vec{${content}}"`)
    return `\\vec{${content}}`
  })
  
  // Step 4: Fix any LaTeX formatting issues (cleanup and corrections)
  result = fixMathFormatting(result)
  
  // Step 5: Restaurer les placeholders de protection qui auraient pu être oubliés
  // Protection contre les transformations incorrectes de mots français (ex: "numérotées")
  const PROTECTION_PATTERN = /ZZZFRENCHWORD\d+ZZZ/g;
  const remainingPlaceholders = result.match(PROTECTION_PATTERN);
  if (remainingPlaceholders && remainingPlaceholders.length > 0) {
    console.warn('⚠️ Some French word placeholders were not restored, attempting cleanup');
    // Essayer de restaurer en cherchant dans le texte original
    // Note: Cette restauration est limitée car on n'a plus accès au mapping original
    // Mais on peut au moins supprimer les placeholders visibles
    result = result.replace(PROTECTION_PATTERN, (match) => {
      // Si on trouve "numérot" avant ou après, restaurer "numérotées"
      const context = result.substring(Math.max(0, result.indexOf(match) - 20), Math.min(result.length, result.indexOf(match) + match.length + 20));
      if (context.includes('numér') || context.includes('numéro')) {
        return 'numérotées'; // Valeur par défaut la plus probable
      }
      return match; // Garder le placeholder si on ne peut pas le restaurer
    });
  }
  
  return result
}
