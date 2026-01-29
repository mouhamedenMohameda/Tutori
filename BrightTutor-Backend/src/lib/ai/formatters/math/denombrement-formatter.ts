/**
 * DÉNOMBREMENT FORMATTER
 * Formatage des notations de combinatoire : arrangements, permutations, combinaisons, factorielles
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

/**
 * Formate les notations de dénombrement
 */
export function formatDenombrement(text: string): string {
  if (!text || typeof text !== "string") return text

  let result = text

  // Arrangements : A(n,p), A_n^p, A(n,p), A_{n}^{p}
  result = replaceOutsideMathBlocks(
    result,
    /\bA[_\s]*\(?\s*(\d+)\s*[,;]\s*(\d+)\s*\)?|A[_\s]*(\d+)[\s^]*(\d+)/gi,
    (match, n1, p1, n2, p2) => {
      const n = n1 || n2
      const p = p1 || p2
      return `$A_{${n}}^{${p}}$`
    }
  )

  // Permutations : P(n), P_n, n!
  result = replaceOutsideMathBlocks(
    result,
    /\bP[_\s]*\(?\s*(\d+)\s*\)?|P[_\s]*(\d+)/gi,
    (match, n1, n2) => {
      const n = n1 || n2
      return `$P_{${n}}$`
    }
  )

  // Combinaisons : C(n,p), C_n^p, (n p), C_{n}^{p}
  result = replaceOutsideMathBlocks(
    result,
    /\bC[_\s]*\(?\s*(\d+)\s*[,;]\s*(\d+)\s*\)?|C[_\s]*(\d+)[\s^]*(\d+)|\(\s*(\d+)\s+(\d+)\s*\)/gi,
    (match, n1, p1, n2, p2, n3, p3) => {
      const n = n1 || n2 || n3
      const p = p1 || p2 || p3
      return `$\\binom{${n}}{${p}}$`
    }
  )

  // Factorielle : n!, (n)!
  result = replaceOutsideMathBlocks(
    result,
    /\b(\d+)\s*!|\(\s*(\d+)\s*\)\s*!/g,
    (match, n1, n2) => {
      const n = n1 || n2
      return `$${n}!$`
    }
  )

  // Coefficient binomial : (n p) déjà traité ci-dessus, mais aussi (n\\p)
  result = replaceOutsideMathBlocks(
    result,
    /\(\s*(\d+)\s*\\\s*(\d+)\s*\)/g,
    (match, n, p) => {
      return `$\\binom{${n}}{${p}}$`
    }
  )

  return result
}
