/**
 * ARITHMÉTIQUE FORMATTER
 * Formatage des notations d'arithmétique : congruences, PGCD, PPCM
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
 * Formate les notations d'arithmétique
 */
export function formatArithmetique(text: string): string {
  if (!text || typeof text !== "string") return text

  let result = text

  // Congruence : a ≡ b [n], a ≡ b mod n, a ≡ b (mod n)
  result = replaceOutsideMathBlocks(
    result,
    /\b(\d+|[a-z])\s*≡\s*(\d+|[a-z])\s*[\[(]\s*(\d+)\s*[)\]]/g,
    (match, a, b, n) => {
      return `$${a} \\equiv ${b} \\pmod{${n}}$`
    }
  )

  // Congruence avec mod : a ≡ b mod n
  result = replaceOutsideMathBlocks(
    result,
    /\b(\d+|[a-z])\s*≡\s*(\d+|[a-z])\s+mod\s+(\d+)/gi,
    (match, a, b, n) => {
      return `$${a} \\equiv ${b} \\pmod{${n}}$`
    }
  )

  // PGCD : PGCD(a,b), pgcd(a,b), a ∧ b, gcd(a,b)
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:PGCD|pgcd|gcd)\s*\(\s*(\d+|[a-z])\s*[,;]\s*(\d+|[a-z])\s*\)|(\d+|[a-z])\s*∧\s*(\d+|[a-z])/gi,
    (match, a1, b1, a2, b2) => {
      const a = a1 || a2
      const b = b1 || b2
      return `$\\gcd(${a}, ${b})$`
    }
  )

  // PPCM : PPCM(a,b), ppcm(a,b), a ∨ b, lcm(a,b)
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:PPCM|ppcm|lcm)\s*\(\s*(\d+|[a-z])\s*[,;]\s*(\d+|[a-z])\s*\)|(\d+|[a-z])\s*∨\s*(\d+|[a-z])/gi,
    (match, a1, b1, a2, b2) => {
      const a = a1 || a2
      const b = b1 || b2
      return `$\\text{lcm}(${a}, ${b})$`
    }
  )

  // Divise : a | b, a divise b
  result = replaceOutsideMathBlocks(
    result,
    /\b(\d+|[a-z])\s*\|\s*(\d+|[a-z])/g,
    (match, a, b) => {
      return `$${a} \\mid ${b}$`
    }
  )

  // Ne divise pas : a ∤ b, a ne divise pas b
  result = replaceOutsideMathBlocks(
    result,
    /\b(\d+|[a-z])\s*∤\s*(\d+|[a-z])/g,
    (match, a, b) => {
      return `$${a} \\nmid ${b}$`
    }
  )

  return result
}
