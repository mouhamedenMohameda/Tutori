/**
 * CONIQUES FORMATTER (version très couvrante Bac/L1)
 *
 * Objectif: formatter proprement (hors déjà-en-math $...$ / $$...$$) :
 * - Puissances : x², y², (x-a)², x^2, (x-a)^2
 * - Paraboles : y^2=4px, x^2=4py, (y-k)^2=4p(x-h), (x-h)^2=4p(y-k)
 * - Cercles : x^2+y^2=r^2, (x-a)^2+(y-b)^2=r^2, forme développée x^2+y^2+Dx+Ey+F=0
 * - Ellipses : x^2/a^2+y^2/b^2=1, (x-h)^2/a^2+(y-k)^2/b^2=1
 * - Hyperboles : x^2/a^2 - y^2/b^2=1, formes avec centre (h,k)
 * - Éléments : foyer(s) F1,F2, directrices D: x=..., y=..., excentricité e=c/a, c^2=a^2±b^2
 * - Notations usuelles : ±, ∓, ≤ ≥, pi/2, etc. (via normalisation)
 *
 * Limite assumée: si vous écrivez des phrases longues, on ne “mathifie” pas tout (filtre containsNaturalLanguageWords).
 */

type Segment = { type: "text" | "math"; content: string; start: number; end: number }

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
      segments.push({ type: "text", content: text.substring(lastIndex, match.index), start: lastIndex, end: match.index })
    }
    segments.push({ type: "math", content: match[0], start: match.index, end: match.index + match[0].length })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ type: "text", content: text.substring(lastIndex), start: lastIndex, end: text.length })
  }
  if (segments.length === 0) segments.push({ type: "text", content: text, start: 0, end: text.length })
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

// -------------------- Normalisation --------------------

function containsNaturalLanguageWords(candidate: string): boolean {
  const noLatexCommands = candidate.replace(/\\[A-Za-z]+/g, "")
  return /[a-zA-ZÀ-ÿ]{3,}/.test(noLatexCommands)
}

function normalizeConicMath(input: string): string {
  let s = input

  s = s.replace(/\$/g, "")
  s = s.replace(/[−–—‒\u2212]/g, "-")

  // puissances unicode
  s = s.replace(/²/g, "^2").replace(/³/g, "^3")

  // inégalités
  s = s.replace(/≤/g, "\\le").replace(/≥/g, "\\ge")
  s = s.replace(/<=/g, "\\le").replace(/>=/g, "\\ge")
  s = s.replace(/!=/g, "\\ne")

  // pi
  s = s.replace(/π/g, "\\pi").replace(/\bpi\b/gi, "\\pi")

  // racine carrée
  s = s.replace(/√\s*\(?\s*([A-Za-z0-9_+\-*/ ]+?)\s*\)?/g, "\\sqrt{$1}")

  // espaces
  s = s.replace(/\s*([=+\-*/(),])\s*/g, " $1 ")
  s = s.replace(/\(\s+/g, "(").replace(/\s+\)/g, ")")
  s = s.replace(/\s+/g, " ").trim()

  return s
}

function wrapInlineMath(expr: string): string {
  return `$${normalizeConicMath(expr)}$`
}

// helper: transforme "x^2" / "x²" / "(x-a)^2" en forme latex propre
function normalizeSquares(expr: string): string {
  let s = expr
  s = s.replace(/²/g, "^2")
  // (x-a)^2 déjà OK
  // (x-a)2 -> (x-a)^2 (rare)
  s = s.replace(/(\([^)]+\))\s*2\b/g, "$1^2")
  // x2 -> x^2 (rare et dangereux : on ne le fait pas)
  return s
}

// ------------------------------------------------------
// FORMATTER PRINCIPAL
// ------------------------------------------------------

export function formatConiques(text: string): string {
  if (!text || typeof text !== "string") return text
  let result = text

  /**
   * 0) Standardiser les notations de carrés hors mode math :
   *    x², y², (x-a)², (y-b)² -> x^2, ...
   *    (sans wrapper, juste harmonisation pour les règles suivantes)
   */
  result = replaceOutsideMathBlocks(
    result,
    /([A-Za-z]\s*²|\([^)]+\)\s*²)/g,
    (m) => normalizeSquares(m)
  )

  /**
   * 1) PARABOLES (formes standards)
   *    y^2 = 4px, x^2 = 4py
   *    (y-k)^2 = 4p(x-h), (x-h)^2 = 4p(y-k)
   */
  // y^2 = 4 p x  (p peut être lettre ou nombre)
  result = replaceOutsideMathBlocks(
    result,
    /\b(y)\s*\^?\s*2\s*=\s*4\s*([A-Za-z0-9_]+)\s*\*?\s*(x)\b/g,
    (_m, y, p, x) => wrapInlineMath(`${y}^2 = 4${p}${x}`)
  )
  // x^2 = 4 p y
  result = replaceOutsideMathBlocks(
    result,
    /\b(x)\s*\^?\s*2\s*=\s*4\s*([A-Za-z0-9_]+)\s*\*?\s*(y)\b/g,
    (_m, x, p, y) => wrapInlineMath(`${x}^2 = 4${p}${y}`)
  )
  // (y-k)^2 = 4p(x-h)
  result = replaceOutsideMathBlocks(
    result,
    /\(\s*y\s*-\s*([^)]+?)\s*\)\s*\^?\s*2\s*=\s*4\s*([A-Za-z0-9_]+)\s*\(\s*x\s*-\s*([^)]+?)\s*\)/g,
    (m, k, p, h) => {
      if (containsNaturalLanguageWords(k) || containsNaturalLanguageWords(h)) return m
      return wrapInlineMath(`(y-${normalizeConicMath(k)})^2 = 4${p}(x-${normalizeConicMath(h)})`)
    }
  )
  // (x-h)^2 = 4p(y-k)
  result = replaceOutsideMathBlocks(
    result,
    /\(\s*x\s*-\s*([^)]+?)\s*\)\s*\^?\s*2\s*=\s*4\s*([A-Za-z0-9_]+)\s*\(\s*y\s*-\s*([^)]+?)\s*\)/g,
    (m, h, p, k) => {
      if (containsNaturalLanguageWords(k) || containsNaturalLanguageWords(h)) return m
      return wrapInlineMath(`(x-${normalizeConicMath(h)})^2 = 4${p}(y-${normalizeConicMath(k)})`)
    }
  )

  /**
   * 2) CERCLES
   * - x^2 + y^2 = r^2
   * - (x-a)^2 + (y-b)^2 = r^2
   * - forme générale : x^2 + y^2 + Dx + Ey + F = 0 (on wrap sans transformer)
   */
  // (x-a)^2 + (y-b)^2 = r^2
  result = replaceOutsideMathBlocks(
    result,
    /\(\s*x\s*-\s*([^)]+?)\s*\)\s*\^?\s*2\s*\+\s*\(\s*y\s*-\s*([^)]+?)\s*\)\s*\^?\s*2\s*=\s*([A-Za-z0-9_]+)\s*\^?\s*2\b/g,
    (m, a, b, r) => {
      if (containsNaturalLanguageWords(a) || containsNaturalLanguageWords(b)) return m
      return wrapInlineMath(`(x-${normalizeConicMath(a)})^2 + (y-${normalizeConicMath(b)})^2 = ${r}^2`)
    }
  )
  // x^2 + y^2 = r^2
  result = replaceOutsideMathBlocks(
    result,
    /\bx\s*\^?\s*2\s*\+\s*y\s*\^?\s*2\s*=\s*([A-Za-z0-9_]+)\s*\^?\s*2\b/g,
    (_m, r) => wrapInlineMath(`x^2 + y^2 = ${r}^2`)
  )
  // forme générale x^2 + y^2 + Dx + Ey + F = 0
  result = replaceOutsideMathBlocks(
    result,
    /\bx\s*\^?\s*2\s*\+\s*y\s*\^?\s*2\s*(?:[+\-]\s*[A-Za-z0-9_]+\s*x)?\s*(?:[+\-]\s*[A-Za-z0-9_]+\s*y)?\s*(?:[+\-]\s*[A-Za-z0-9_]+)?\s*=\s*0\b/g,
    (m) => wrapInlineMath(normalizeConicMath(m))
  )

  /**
   * 3) ELLIPSES / HYPERBOLES (axes coordonnés)
   * - x^2/a^2 + y^2/b^2 = 1 ; version centrée (x-h)^2/a^2 + (y-k)^2/b^2 = 1
   * - x^2/a^2 - y^2/b^2 = 1 ; version centrée
   * - variantes inversées: y^2/a^2 ± x^2/b^2 = 1
   */
  // x^2/a^2 ± y^2/b^2 = 1 (a,b lettres ou nombres)
  result = replaceOutsideMathBlocks(
    result,
    /\b(x|y)\s*\^?\s*2\s*\/\s*([A-Za-z0-9_]+)\s*\^?\s*2\s*([+\-])\s*(x|y)\s*\^?\s*2\s*\/\s*([A-Za-z0-9_]+)\s*\^?\s*2\s*=\s*1\b/g,
    (_m, v1, a, pm, v2, b) =>
      wrapInlineMath(`\\frac{${v1}^2}{${a}^2} ${pm} \\frac{${v2}^2}{${b}^2} = 1`)
  )

  // (x-h)^2/a^2 ± (y-k)^2/b^2 = 1
  result = replaceOutsideMathBlocks(
    result,
    /\(\s*(x|y)\s*-\s*([^)]+?)\s*\)\s*\^?\s*2\s*\/\s*([A-Za-z0-9_]+)\s*\^?\s*2\s*([+\-])\s*\(\s*(x|y)\s*-\s*([^)]+?)\s*\)\s*\^?\s*2\s*\/\s*([A-Za-z0-9_]+)\s*\^?\s*2\s*=\s*1\b/g,
    (m, v1, h, a, pm, v2, k, b) => {
      if (containsNaturalLanguageWords(h) || containsNaturalLanguageWords(k)) return m
      return wrapInlineMath(
        `\\frac{(${v1}-${normalizeConicMath(h)})^2}{${a}^2} ${pm} \\frac{(${v2}-${normalizeConicMath(k)})^2}{${b}^2} = 1`
      )
    }
  )

  /**
   * 4) Paramètres usuels : excentricité e=c/a ; relations c^2=a^2±b^2
   */
  result = replaceOutsideMathBlocks(
    result,
    /\be\s*=\s*([A-Za-z0-9_]+)\s*\/\s*([A-Za-z0-9_]+)\b/g,
    (_m, c, a) => wrapInlineMath(`e = \\frac{${c}}{${a}}`)
  )
  // c^2 = a^2 ± b^2
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Za-z])\s*\^?\s*2\s*=\s*([A-Za-z])\s*\^?\s*2\s*([+\-])\s*([A-Za-z])\s*\^?\s*2\b/g,
    (_m, c, a, pm, b) => wrapInlineMath(`${c}^2 = ${a}^2 ${pm} ${b}^2`)
  )

  /**
   * 5) Foyers / sommets / points : F(a,0), F1(...), F_1(...), A(h,k)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b(F(?:\s*[_]?\s*\d+)?)\s*\(\s*([^,;]+?)\s*[,;]\s*([^)]+?)\s*\)/g,
    (m, F, x, y) => {
      if (containsNaturalLanguageWords(x) || containsNaturalLanguageWords(y)) return m
      return wrapInlineMath(`${F}(${normalizeConicMath(x)}, ${normalizeConicMath(y)})`)
    }
  )

  /**
   * 6) Directrices : D: x = a ; D1: x=... ; d: y=b ; "directrice: x=a"
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b(D(?:\s*\d+)?)\s*:\s*(x|y)\s*=\s*([A-Za-z0-9_+\-*/]+)\b/g,
    (_m, D, v, val) => wrapInlineMath(`${D}: ${v} = ${normalizeConicMath(val)}`)
  )
  result = replaceOutsideMathBlocks(
    result,
    /\bdirectrice\s*:\s*(x|y)\s*=\s*([A-Za-z0-9_+\-*/]+)\b/gi,
    (_m, v, val) => wrapInlineMath(`D: ${v} = ${normalizeConicMath(val)}`)
  )

  /**
   * 7) Si une équation de conique est écrite “en clair” (avec ^2 ou x²) mais non captée,
   *    on wrap prudemment des patterns typiques : "... = 1" ou "... = 0"
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b[^$\n]{0,80}(?:x\^2|y\^2|x²|y²)[^$\n]{0,80}\s*=\s*(?:0|1)\b/g,
    (m) => {
      if (containsNaturalLanguageWords(m)) return m
      return wrapInlineMath(normalizeConicMath(m))
    }
  )

  return result
}
