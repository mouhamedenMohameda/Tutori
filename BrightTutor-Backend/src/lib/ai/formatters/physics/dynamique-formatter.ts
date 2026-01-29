/**
 * DYNAMIQUE FORMATTER (Physique - Mouvement des projectiles)
 * 
 * Formate les notations physiques spécifiques à la dynamique
 */

type Segment = { type: "text" | "math"; content: string; start: number; end: number }

const MATH_BLOCK_REGEX = /\$\$[\s\S]*?\$\$|\$[^$\n]*?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g

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

  return segments.length > 0 ? segments : [{ type: "text", content: text, start: 0, end: text.length }]
}

export function formatDynamique(text: string): string {
  if (!text || typeof text !== "string") return text

  const segments = splitByMathBlocks(text)
  let result = ""

  for (const segment of segments) {
    if (segment.type === "math") {
      result += segment.content
      continue
    }

    let processed = segment.content

    // Unités simples: m/s → m/s (formatage basique)
    processed = processed.replace(/\b(\d+(?:[.,]\d+)?)\s*(m\/s)\b/gi, (match, num) => {
      return `$${num} \\, \\text{m/s}$`
    })

    // Équations horaires: x(t), y(t), v(t) → x(t), y(t), v(t)
    processed = processed.replace(/\b([xyv])\s*\(\s*t\s*\)/g, (_, v) => {
      return '$' + v + '(t)$'
    })

    // Accélération gravitationnelle: g = 10 → g = 10
    processed = processed.replace(/\bg\s*=\s*(\d+(?:[.,]\d+)?)/g, (match, value) => {
      return '$g = ' + value + '$'
    })

    result += processed
  }

  return result
}
