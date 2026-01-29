/**
 * GÉOMÉTRIE SPATIALE FORMATTER
 * 
 * Formate les expressions de géométrie dans l'espace:
 * - Vecteurs: AB⃗, u⃗, v⃗
 * - Produits scalaires: AB⃗·BC⃗
 * - Produits vectoriels: AB⃗∧BC⃗
 * - Coordonnées de points: A(1;-2;3)
 * - Équations de plans: ax + by + cz + d = 0
 * - Distances: distance point-plan, norme de vecteur
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

function normalizeMathContent(input: string): string {
  let s = input
  s = s.replace(/\$/g, "")
  s = s.replace(/[−–—‒\u2212]/g, "-")
  s = s.replace(/×/g, "\\times")
  s = s.replace(/\s*([=+\-*/])\s*/g, " $1 ")
  s = s.replace(/\(\s+/g, "(").replace(/\s+\)/g, ")")
  s = s.replace(/\s+/g, " ").trim()
  return s
}

function wrapInlineMath(expr: string): string {
  const cleaned = normalizeMathContent(expr)
  return `$${cleaned}$`
}

function containsNaturalLanguageWords(candidate: string): boolean {
  const noLatexCommands = candidate.replace(/\\[A-Za-z]+/g, "")
  return /[a-zA-ZÀ-ÿ]{3,}/.test(noLatexCommands)
}

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

export function formatGeometrieSpatiale(text: string): string {
  if (!text || typeof text !== "string") return text

  let result = text

  /**
   * 1) Vecteurs avec flèche Unicode: AB⃗, u⃗, v⃗
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z]{2}|[a-z])\u20D7\b/g,
    (match, vecName) => {
      if (vecName.length === 2) {
        return wrapInlineMath(`\\overrightarrow{${vecName}}`)
      }
      return wrapInlineMath(`\\vec{${vecName}}`)
    }
  )

  /**
   * 2) Produits scalaires: AB⃗·BC⃗, u⃗·v⃗
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z]{2}|[a-z])\u20D7\s*[·⋅]\s*([A-Z]{2}|[a-z])\u20D7\b/g,
    (match, vec1, vec2) => {
      const v1 = vec1.length === 2 ? `\\overrightarrow{${vec1}}` : `\\vec{${vec1}}`
      const v2 = vec2.length === 2 ? `\\overrightarrow{${vec2}}` : `\\vec{${vec2}}`
      return wrapInlineMath(`${v1} \\cdot ${v2}`)
    }
  )

  /**
   * 3) Produits vectoriels: AB⃗∧BC⃗, u⃗∧v⃗
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z]{2}|[a-z])\u20D7\s*∧\s*([A-Z]{2}|[a-z])\u20D7\b/g,
    (match, vec1, vec2) => {
      const v1 = vec1.length === 2 ? `\\overrightarrow{${vec1}}` : `\\vec{${vec1}}`
      const v2 = vec2.length === 2 ? `\\overrightarrow{${vec2}}` : `\\vec{${vec2}}`
      return wrapInlineMath(`${v1} \\wedge ${v2}`)
    }
  )

  /**
   * 4) Coordonnées de points: A(1;-2;3), B(4;1;0)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z])\s*\(\s*([+-]?[0-9]+(?:\.[0-9]+)?)\s*[;,]\s*([+-]?[0-9]+(?:\.[0-9]+)?)\s*[;,]\s*([+-]?[0-9]+(?:\.[0-9]+)?)\s*\)/g,
    (match, point, x, y, z) => {
      return wrapInlineMath(`${point}(${x};${y};${z})`)
    }
  )

  /**
   * 5) Coordonnées de vecteurs: AB⃗ = (3;3;-3)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z]{2}|[a-z])\u20D7\s*=\s*\(\s*([+-]?[0-9]+(?:\.[0-9]+)?)\s*[;,]\s*([+-]?[0-9]+(?:\.[0-9]+)?)\s*[;,]\s*([+-]?[0-9]+(?:\.[0-9]+)?)\s*\)/g,
    (match, vecName, x, y, z) => {
      const v = vecName.length === 2 ? `\\overrightarrow{${vecName}}` : `\\vec{${vecName}}`
      return wrapInlineMath(`${v} = (${x};${y};${z})`)
    }
  )

  /**
   * 6) Équations de plans: 5x + 5y + 4z - 7 = 0
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([+-]?[0-9]+)\s*x\s*([+-])\s*([0-9]+)\s*y\s*([+-])\s*([0-9]+)\s*z\s*([+-])\s*([0-9]+)\s*=\s*0\b/g,
    (match, a, op1, b, op2, c, op3, d) => {
      return wrapInlineMath(`${a}x ${op1} ${b}y ${op2} ${c}z ${op3} ${d} = 0`)
    }
  )

  /**
   * 7) Normes de vecteurs: ||AB⃗||, ||u⃗||
   */
  result = replaceOutsideMathBlocks(
    result,
    /\|\|\s*([A-Z]{2}|[a-z])\u20D7\s*\|\|/g,
    (match, vecName) => {
      const v = vecName.length === 2 ? `\\overrightarrow{${vecName}}` : `\\vec{${vecName}}`
      return wrapInlineMath(`\\|${v}\\|`)
    }
  )

  /**
   * 8) Distances: AB = ||AB⃗||
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z]{2})\s*=\s*\|\|\s*([A-Z]{2})\u20D7\s*\|\|/g,
    (match, dist, vecName) => {
      if (dist === vecName) {
        return wrapInlineMath(`${dist} = \\|\\overrightarrow{${vecName}}\\|`)
      }
      return match
    }
  )

  /**
   * 9) Plans: (BCD), (ACD)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b\(([A-Z]{2,3})\)/g,
    (match, points) => {
      return wrapInlineMath(`(${points})`)
    }
  )

  /**
   * 10) Produits scalaires avec coordonnées: AB⃗·BC⃗ = x₁x₂ + y₁y₂ + z₁z₂
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z]{2}|[a-z])\u20D7\s*[·⋅]\s*([A-Z]{2}|[a-z])\u20D7\s*=\s*([^$\n]+?)(?=\s*$|\s*\n|,|\.|\s+et\s+|\s+où\s+)/g,
    (match, vec1, vec2, expr) => {
      if (containsNaturalLanguageWords(expr)) return match
      const v1 = vec1.length === 2 ? `\\overrightarrow{${vec1}}` : `\\vec{${vec1}}`
      const v2 = vec2.length === 2 ? `\\overrightarrow{${vec2}}` : `\\vec{${vec2}}`
      const e = normalizeMathContent(expr.trim())
      return wrapInlineMath(`${v1} \\cdot ${v2} = ${e}`)
    }
  )

  result = mergeInlineMathBlocks(result)

  return result
}
