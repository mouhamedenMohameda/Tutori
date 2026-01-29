/**
 * NOMBRES COMPLEXES FORMATTER (COMPLET) — v4
 *
 * Fix:
 * - Ne wrap JAMAIS une phrase entière ("Partie...", "Montrer...") en math.
 * - Coupe les affixes z0 = -i est... -> $z_0=-i$ est...
 *   (même si "est" est collé : "-iest...")
 * - Wrapping robuste des modules / arg / fractions.
 * - Support Γ1, Γ_1, intersection Γ_1 ∩ Γ_2.
 */

type Segment = { type: "text" | "math"; content: string; start: number; end: number }

// $$...$$ multi-lignes + $...$ mono-ligne
const MATH_BLOCK_REGEX = /\$\$[\s\S]*?\$\$|\$[^$\n]*?\$/g

function ensureGlobal(pattern: RegExp): RegExp {
  if (pattern.global) return pattern
  const flags = Array.from(new Set((pattern.flags + "g").split(""))).join("")
  return new RegExp(pattern.source, flags)
}

function splitByMathBlocks(text: string): Segment[] {
  const segments: Segment[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  MATH_BLOCK_REGEX.lastIndex = 0

  while ((match = MATH_BLOCK_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: "text",
        content: text.substring(lastIndex, match.index),
        start: lastIndex,
        end: match.index
      })
    }
    segments.push({
      type: "math",
      content: match[0],
      start: match.index,
      end: match.index + match[0].length
    })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({
      type: "text",
      content: text.substring(lastIndex),
      start: lastIndex,
      end: text.length
    })
  }

  if (segments.length === 0) {
    segments.push({ type: "text", content: text, start: 0, end: text.length })
  }

  return segments
}

function replaceOutsideMathBlocks(
  text: string,
  pattern: RegExp,
  replacement: (match: string, ...groups: string[]) => string
): string {
  if (!text || typeof text !== "string") return text

  const pat = ensureGlobal(pattern)
  const segments = splitByMathBlocks(text)

  return segments
    .map(seg => {
      if (seg.type === "math") return seg.content

      const src = seg.content
      pat.lastIndex = 0

      const matches: Array<{ match: string; groups: string[]; index: number }> = []
      let m: RegExpExecArray | null

      while ((m = pat.exec(src)) !== null) {
        matches.push({ match: m[0], groups: m.slice(1), index: m.index })
        if (m.index === pat.lastIndex) pat.lastIndex++
      }

      if (matches.length === 0) return src

      let out = src
      for (let i = matches.length - 1; i >= 0; i--) {
        const mm = matches[i]
        const rep = replacement(mm.match, ...mm.groups)
        out = out.substring(0, mm.index) + rep + out.substring(mm.index + mm.match.length)
      }
      return out
    })
    .join("")
}

// ---------------------- Normalisation math ----------------------

const superscriptMap: Record<string, string> = {
  "²": "2",
  "³": "3",
  "¹": "1",
  "⁰": "0",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9"
}

function mapSuperscripts(s: string): string {
  return s.split("").map(ch => superscriptMap[ch] ?? ch).join("")
}

/** Heuristique: détecte du français probable (hors commandes LaTeX) */
function containsNaturalLanguageWords(candidate: string): boolean {
  const noLatexCommands = candidate.replace(/\\[A-Za-z]+/g, "")
  return /[a-zA-ZÀ-ÿ]{3,}/.test(noLatexCommands)
}

function normalizeMathContent(input: string): string {
  let s = input

  // Supprime les $ parasites à l'intérieur
  s = s.replace(/\$/g, "")

  // Normalise les moins unicode
  s = s.replace(/[−–—‒\u2212]/g, "-")

  // Grec
  s = s.replace(/π/g, "\\pi")
  s = s.replace(/θ/g, "\\theta")
  s = s.replace(/Γ/g, "\\Gamma")

  // × ·
  s = s.replace(/[×·]/g, "\\times")

  // arg/Re/Im
  s = s.replace(/\barg\s*\(/gi, "\\arg(")
  s = s.replace(/\bRe\s*\(/g, "\\operatorname{Re}(")
  s = s.replace(/\bIm\s*\(/g, "\\operatorname{Im}(")

  // 2 i -> 2i
  s = s.replace(/\b([0-9]+)\s+i\b/gi, "$1i")

  // Retire espaces autour de ^ et _
  s = s.replace(/\s*\^\s*/g, "^")
  s = s.replace(/\s*_\s*/g, "_")

  // Commande LaTeX avec _ : \Gamma_1 -> \Gamma_{1}
  s = s.replace(/(\\[A-Za-z]+)_(?!\{)([A-Za-z0-9]+)/g, "$1_{$2}")

  // Variables simples avec _ : z_1 -> z_{1}
  s = s.replace(/([A-Za-z])_(?!\{)([A-Za-z0-9]+)/g, "$1_{$2}")

  // z0 -> z_{0} (si pas déjà z_0)
  s = s.replace(/\bz(?!_)([0-9]+)\b/g, "z_{$1}")

  // Unicode puissances: z² -> z^{2}
  s = s.replace(/([A-Za-z0-9\)\]])([²³¹⁰⁴⁵⁶⁷⁸⁹]+)/g, (_m, base, sup) => {
    return `${base}^{${mapSuperscripts(sup)}}`
  })

  // z^2 -> z^{2}
  s = s.replace(/\^(?!\{)([0-9A-Za-z]+)\b/g, (_m, exp) => `^{${exp}}`)

  // \pi/2 -> \frac{\pi}{2}
  s = s.replace(/\\pi\s*\/\s*(\d+)\b/g, "\\frac{\\pi}{$1}")

  // 1/2 -> \frac{1}{2}
  s = s.replace(/(?<!\\)\b(-?\d+)\s*\/\s*(\d+)\b/g, "\\frac{$1}{$2}")

  // (A)/(B) -> \frac{(A)}{(B)} (sans parenthèses imbriquées)
  s = s.replace(
    /\(\s*([^()\n]+?)\s*\)\s*\/\s*\(\s*([^()\n]+?)\s*\)/g,
    "\\frac{($1)}{($2)}"
  )

  // Espaces autour opérateurs
  s = s.replace(/\s*([=+\-*/])\s*/g, " $1 ")
  s = s.replace(/\(\s+/g, "(").replace(/\s+\)/g, ")")
  s = s.replace(/\s+/g, " ").trim()

  // Espace avant [ ... ]
  s = s.replace(/\s*\[/g, " [")
  s = s.replace(/\[\s+/g, "[").replace(/\s+\]/g, "]")

  // ") z" -> ")z"
  s = s.replace(/\)\s+([A-Za-z\\])/g, ")$1")

  return s
}

function normalizeAllMathBlocks(text: string): string {
  return text.replace(MATH_BLOCK_REGEX, block => {
    const isDisplay = block.startsWith("$$")
    const left = isDisplay ? "$$" : "$"
    const right = isDisplay ? "$$" : "$"
    const inner = block.slice(left.length, block.length - right.length)
    const normalized = normalizeMathContent(inner)
    return `${left}${normalized}${right}`
  })
}

function wrapInlineMath(expr: string): string {
  const cleaned = normalizeMathContent(expr)
  return `$${cleaned}$`
}

/**
 * Coupe une expression "après =" dès qu'un mot non-math arrive.
 * Exemple: "-i est une solution" -> math="-i", rest="est une solution"
 * Marche aussi si collé: "-iestune..." -> math="-i", rest="estune..."
 */
const ALLOWED_MATH_WORDS = new Set([
  "arg",
  "re",
  "im",
  "pi",
  "theta",
  "gamma",
  "gammA".toLowerCase() // sécurité
])

function splitAtFirstNonMathWord(rhsRaw: string): { math: string; rest: string } {
  const s = rhsRaw ?? ""
  
  // Cas spécial: détecter "-iest", "+iest", "iest" où "i" (nombre complexe) est collé à "est"
  // Exemple: "-iestunesolutiondeP" -> math="-i", rest="estunesolutiondeP"
  // Gère aussi "-i est" avec espace
  // Pattern amélioré pour détecter même si collé: "-iest", "+iest", "iest", "iestune", etc.
  // Inclut aussi "solutiondeP" où P peut être suivi de "("
  const complexICollision = /^([+\-]?i)\s*(est|une|un|de|du|des|le|la|les|solution|solutions|sont|sera|serait|s'|d'|l'|n'|m'|t'|c'|j'|qu'|puis|avec|et|ou|donc|car|alors|soit|tel|que|pour|sur|dans|par)([a-zà-ÿ]*)/i
  const matchICollision = s.match(complexICollision)
  if (matchICollision) {
    const math = matchICollision[1] // "-i" ou "+i" ou "i"
    // Prendre tout après "-i" (y compris l'espace éventuel et le reste)
    const rest = s.slice(math.length).trimStart() // "estunesolutiondeP" (tout après "-i")
    return { math, rest }
  }
  
  // Cas spécial 2: détecter si le texte commence par un nombre complexe suivi d'un mot français
  // Exemple: "-iest" -> math="-i", rest="est"
  // Gère aussi "-i est" avec espace
  // Pattern pour détecter: signe optionnel + "i" + espace optionnel + lettre (début d'un mot français)
  if (/^[+\-]?i\s*[a-zà-ÿ]/i.test(s)) {
    // Trouver où commence le premier mot français après "i"
    const iMatch = s.match(/^([+\-]?i)/i)
    if (iMatch) {
      const afterI = s.slice(iMatch[0].length).trimStart() // Tout après "-i" ou "+i" ou "i" (sans espaces)
      const frenchWordStart = afterI.match(/^(est|une|un|de|du|des|le|la|les|solution|solutions|sont|sera|serait)/i)
      if (frenchWordStart) {
        const math = iMatch[0] // "-i" ou "+i" ou "i"
        const rest = afterI // "estunesolutiondeP" (tout le reste)
        return { math, rest }
      }
    }
  }
  
  // Pattern amélioré: détecte les mots français même collés (ex: "iestune" -> "estune")
  // Cherche des séquences de 2+ lettres qui ne sont pas des mots math autorisés
  const re = /[A-Za-zÀ-ÿ]{2,}/g
  let m: RegExpExecArray | null

  while ((m = re.exec(s)) !== null) {
    const w = m[0].toLowerCase()
    
    // Cas spécial: si le mot commence par "i" et continue avec un mot français, 
    // c'est probablement "i" (nombre complexe) collé à un mot français
    // Gère "iestunesolutiondeP" où P peut être suivi de "("
    if (w.startsWith('i') && w.length > 1) {
      const afterI = w.slice(1) // "estune" ou "estunesolutiondeP"
      const frenchWords = ['est', 'une', 'un', 'de', 'du', 'des', 'le', 'la', 'les', 'solution', 'solutions', 'sont', 'sera', 'serait']
      // Vérifier si afterI commence par un mot français ou contient "solutionde" suivi de lettres (comme "P")
      if (frenchWords.some(fw => afterI.startsWith(fw)) || /^est.*solutionde[a-z]/i.test(afterI)) {
        // Le "i" fait partie du nombre complexe, le reste est français
        const math = s.slice(0, m.index + 1).trimEnd() // "-i" ou "+i" ou juste "i"
        const rest = s.slice(m.index + 1) // "estunesolutiondeP"
        return { math, rest }
      }
    }
    
    // Vérifier si c'est un mot français commun même s'il est collé
    // Ex: "iestune" contient "est", "une" -> mots français
    const frenchWords = ['est', 'une', 'un', 'de', 'du', 'des', 'le', 'la', 'les', 'solution', 'solutions', 'sont', 'sera', 'serait']
    const isFrenchWord = frenchWords.some(fw => w.includes(fw))
    
    if (!ALLOWED_MATH_WORDS.has(w) && (isFrenchWord || w.length >= 3)) {
      const math = s.slice(0, m.index).trimEnd()
      const rest = s.slice(m.index)
      return { math, rest }
    }
  }
  return { math: s.trimEnd(), rest: "" }
}

function glueWithSpaceIfNeeded(mathPart: string, rest: string): string {
  if (!rest) return ""
  if (/^\s/.test(rest)) return rest
  // Si rest commence par une lettre et mathPart finit par lettre/chiffre/} -> ajoute espace
  if (/^[A-Za-zÀ-ÿ]/.test(rest) && /[A-Za-z0-9}]$/.test(mathPart.trim())) return " " + rest
  return rest
}

/**
 * Fusionne $A$ - $B$ => $A - B$ et $A$ $B$ => $A B$
 */
function mergeInlineMathBlocks(text: string): string {
  const WS = "[\\s\\u00A0\\u2000-\\u200B\\u202F\\u205F\\u3000]*"
  const OPS = "[+\\-−–—‒\\u2212*/=]"

  const reOp = new RegExp(`\\$([^$\\n]+?)\\$${WS}(${OPS})${WS}\\$([^$\\n]+?)\\$`, "g")
  const reAdj = new RegExp(`\\$([^$\\n]+?)\\$${WS}\\$([^$\\n]+?)\\$`, "g")

  let s = text
  let prev: string
  do {
    prev = s
    s = s.replace(reOp, (_m, a, op, b) => `$${a} ${op} ${b}$`)
    s = s.replace(reAdj, (_m, a, b) => `$${a} ${b}$`)
  } while (s !== prev)

  return s
}

// ---------------------- API ----------------------

export function formatComplexNumbers(text: string): string {
  if (!text || typeof text !== "string") return text

  let result = text

  /**
   * 1) Ensembles: "dans C/R/ℂ/ℝ"
   */
  result = replaceOutsideMathBlocks(
    result,
    /\bdans(?:[\s\u00A0\u2000-\u200B\u202F\u205F\u3000]+)(ℂ|ℝ|C|R)\b/g,
    (_m, setName) => {
      const mapped = setName === "ℂ" || setName === "C" ? "\\mathbb{C}" : "\\mathbb{R}"
      return `dans ${wrapInlineMath(mapped)}`
    }
  )

  /**
   * 2) Γ1 / Γ_1
   */
  result = replaceOutsideMathBlocks(
    result,
    /\bΓ\s*_?\s*([0-9]+)\b/g,
    (_m, n) => wrapInlineMath(`\\Gamma_${n}`)
  )

  /**
   * 3) Intersection Γ_1 ∩ Γ_2
   */
  result = replaceOutsideMathBlocks(
    result,
    /\bΓ\s*_?\s*([0-9]+)\s*∩\s*Γ\s*_?\s*([0-9]+)\b/g,
    (_m, a, b) => wrapInlineMath(`\\Gamma_${a} \\cap \\Gamma_${b}`)
  )

  /**
   * 4) P(z) = ... (ligne)
   * Gère les polynômes avec puissances Unicode (z³, z²) et coefficients complexes
   * Exemple: P(z) = z³ – (8 + i)z² + 21z – 8 + 19i
   */
  result = replaceOutsideMathBlocks(
    result,
    /(P\s*\(\s*z\s*\)\s*=\s*[^$\n]*?)(?=(\*\*|$|[.?!\n]))/gi,
    (match, expr) => {
      let e = String(expr ?? match).trim()
      if (!e) return match
      if (containsNaturalLanguageWords(e)) return match
      
      // Normaliser les puissances Unicode AVANT le wrapping
      // z³ -> z^{3}, z² -> z^{2}
      e = e.replace(/([a-zA-Z])([²³¹⁰⁴⁵⁶⁷⁸⁹]+)/g, (m: string, base: string, sup: string) => {
        return `${base}^{${mapSuperscripts(sup)}}`
      })
      
      // Normaliser les coefficients complexes: (8 + i) -> (8+i) pour éviter espaces
      e = e.replace(/\(\s*([0-9]+)\s*\+\s*([0-9]*)\s*([i])\s*\)/gi, (m: string, num1: string, num2: string, i: string) => {
        const imag = num2 === '' || num2 === '1' ? 'i' : `${num2}i`
        return `(${num1}+${imag})`
      })
      
      // Normaliser les termes complexes: 19i -> 19i (déjà bon, mais s'assurer de l'espace)
      e = e.replace(/\b([0-9]+)\s+([i])\b/gi, '$1$2')
      
      return wrapInlineMath(e)
    }
  )

  /**
   * 5) Modules |...| = |...|
   */
  result = replaceOutsideMathBlocks(
    result,
    /(\|\s*[^|$\n]*?z[^|$\n]*?\|\s*=\s*\|\s*[^|$\n]*?z[^|$\n]*?\|)/gi,
    (match) => {
      const e = match.trim()
      if (!e) return match
      if (containsNaturalLanguageWords(e)) return match
      return wrapInlineMath(e)
    }
  )

  /**
   * 6) Arg: arg(...) - arg(...) = ...
   * (IMPORTANT: on wrap uniquement à partir de "arg(...)" pas le label "Partie...")
   */
  result = replaceOutsideMathBlocks(
    result,
    /(arg\s*\([^)\n$]*?z[^)\n$]*?\)\s*-\s*arg\s*\([^)\n$]*?z[^)\n$]*?\)\s*=\s*[^$\n,;.]*)/gi,
    (match) => {
      const e = match.trim()
      if (!e) return match
      if (containsNaturalLanguageWords(e)) return match
      return wrapInlineMath(e)
    }
  )

  /**
   * 7) Fractions ( ... z ... )/( ... z ... )
   */
  result = replaceOutsideMathBlocks(
    result,
    /(\(\s*[^()\n$]*?z(?:_[A-Za-z0-9]+)?[^()\n$]*?\)\s*\/\s*\(\s*[^()\n$]*?z(?:_[A-Za-z0-9]+)?[^()\n$]*?\))/gi,
    (match) => {
      const e = match.trim()
      if (!e) return match
      if (containsNaturalLanguageWords(e)) return match
      return wrapInlineMath(e)
    }
  )

  /**
   * 8) Affixes: z_A = ... , z0 = ... , z₀ = ...  (coupe après RHS non-math)
   * Exemple: "z0 = -i est une solution ..." -> "$z_0=-i$ est une solution ..."
   * Gère aussi z₀ (Unicode subscript) et cas collés comme "-iestune..."
   * IMPORTANT: Ce pattern doit être AVANT le pattern général (9) pour éviter les conflits
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b(z(?:_[A-Za-z0-9]+)?|z[₀₁₂₃₄₅₆₇₈₉0-9]+)\s*=\s*([^$\n]*)/g,
    (full, zvarRaw, rhsRaw) => {
      let zvar = String(zvarRaw ?? "").trim()
      const rhs = String(rhsRaw ?? "").trim()

      if (!zvar) return full

      // Convertir Unicode subscript en LaTeX: z₀ -> z_0
      zvar = zvar.replace(/([a-zA-Z])([₀₁₂₃₄₅₆₇₈₉]+)/g, (m: string, base: string, sub: string) => {
        const subMap: Record<string, string> = {
          '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
          '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
        }
        const num = sub.split('').map((s: string) => subMap[s] || s).join('')
        return `${base}_{${num}}`
      })

      // Convertir z0 -> z_0 si pas déjà z_0
      zvar = zvar.replace(/\bz([0-9]+)\b/g, "z_{$1}")

      // Si rhs est vide ou ne contient que des espaces, retourner tel quel
      if (!rhs || !rhs.trim()) return full

      // Utiliser splitAtFirstNonMathWord pour séparer math et texte français
      // Cette fonction gère maintenant les cas collés comme "-iestune..."
      const { math, rest } = splitAtFirstNonMathWord(rhs)
      
      if (!math.trim()) return full

      const expr = `${zvar}=${math}`
      const wrapped = wrapInlineMath(expr)
      const tail = glueWithSpaceIfNeeded(math, rest)

      return wrapped + tail
    }
  )

  /**
   * 9) Pattern "équation générale" contenant z et "="
   * ⚠️ FIX: pas de fallback qui wrap du texte.
   * On wrap seulement si l'expression est "math-like".
   */
  result = replaceOutsideMathBlocks(
    result,
    /(^|[:;,\s])([^$\n]*?z(?:_[A-Za-z0-9]+)?[^$\n]*?=\s*[^$\n]*?)(?=(\*\*|$|[.?!\n]))/gi,
    (full, pfx, expr) => {
      const e = String(expr ?? "").trim()
      if (!e) return full
      // Si ça contient du français => on NE wrap PAS
      if (containsNaturalLanguageWords(e)) return full

      // Sinon ok
      return `${pfx}${wrapInlineMath(e)}`
    }
  )

  /**
   * 10) P(1), P(0), ...
   */
  result = replaceOutsideMathBlocks(
    result,
    /\bP\s*\(\s*([0-9]+)\s*\)\b/g,
    (_m, n) => wrapInlineMath(`P(${n})`)
  )

  // Merge + normalisation finale
  result = mergeInlineMathBlocks(result)
  result = normalizeAllMathBlocks(result)

  return result
}
