/**
 * AUTONOMOUS FUNCTION FORMATTER (TS)
 * - Safe around existing math blocks: $$...$$, $...$, \(...\), \[...\]
 * - Wraps function equations/calls
 * - Strong exp/log handling: e(-x), e^(...), exp(...), ln, log, log_2, log10
 */

type Segment = { type: "text" | "math"; content: string; start: number; end: number }

// $$...$$ (multi), $...$ (inline), \( ... \), \[ ... \]
const MATH_BLOCK_REGEX = /\$\$[\s\S]*?\$\$|\$[^$\n]*?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g

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
  replacement: (...args: any[]) => string
): string {
  if (!text || typeof text !== "string") return text
  const pat = ensureGlobal(pattern)
  const segments = splitByMathBlocks(text)

  return segments
    .map(seg => {
      if (seg.type === "math") return seg.content
      return seg.content.replace(pat, replacement as any)
    })
    .join("")
}

function wrapInlineMath(content: string): string {
  const s = String(content).trim()
  if (
    (s.startsWith("$") && s.endsWith("$")) ||
    (s.startsWith("\\(") && s.endsWith("\\)")) ||
    (s.startsWith("\\[") && s.endsWith("\\]"))
  ) {
    return s
  }
  return `$${s}$`
}

function isComplexArg(args: string): boolean {
  const a = String(args).trim()
  return a === "z" || a.startsWith("z_") || a.startsWith("z[") || /^z[0-9]/.test(a)
}

function looksLikeMath(expr: string): boolean {
  const s = String(expr).trim()
  if (s.length < 2) return false

  const hasMathSignal =
    /[0-9+\-*/^_=<>()[\]{}√πθγαβδ∞]/.test(s) ||
    /\b(sin|cos|tan|exp|log|ln|sqrt)\b/i.test(s) ||
    /\\(frac|sqrt|pi|theta|alpha|beta|gamma|delta|ln|log|exp|le|ge|ne)\b/.test(s)

  if (!hasMathSignal) return false

  // Reject sentences (too many stopwords)
  const stop = new Set([
    "le","la","les","de","du","des","en","sur","par","pour","avec","sans","dans","dont",
    "que","qui","quoi","où","quand","comment","pourquoi","combien","quel","quelle","quels","quelles",
    "ce","cette","ces","est","sont","être","avoir","faire","donc","car","mais","ou","et"
  ])

  const tokens = s
    .toLowerCase()
    .replace(/[^a-zà-ÿ]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (tokens.length >= 5) {
    const stopCount = tokens.filter(t => stop.has(t)).length
    if (stopCount / tokens.length > 0.35) return false
  }

  return true
}

/**
 * Safe "not escaped" replacement (no lookbehind, Safari-safe):
 * pattern must capture prefix group 1: (^|[^\\])
 * so we can keep prefix in the replacement.
 */
function replaceNotEscaped(
  s: string,
  pattern: RegExp,
  replacer: (prefix: string, ...groups: string[]) => string
): string {
  const pat = ensureGlobal(pattern)
  return s.replace(pat, (...args: any[]) => {
    const full = String(args[0])
    const prefix = String(args[1] ?? "")
    const groups = args.slice(2, -2).map((x: any) => String(x))
    return replacer(prefix, ...groups)
  })
}

type NormalizeMode = "inline" | "block"

function normalizeMathContent(input: string, mode: NormalizeMode = "inline"): string {
  let s = String(input)

  // Remove stray $ inside math
  s = s.replace(/\$/g, "")

  // Normalize unicode minus and operators
  s = s.replace(/[−–—‒\u2212]/g, "-")
  s = s.replace(/≤/g, "\\le")
  s = s.replace(/≥/g, "\\ge")
  s = s.replace(/≠/g, "\\ne")

  // Greek
  s = s.replace(/π/g, "\\pi")
  s = s.replace(/θ/g, "\\theta")
  s = s.replace(/α/g, "\\alpha")
  s = s.replace(/β/g, "\\beta")
  s = s.replace(/γ/g, "\\gamma")
  s = s.replace(/δ/g, "\\delta")

  // × ·
  s = s.replace(/[×·]/g, "\\times")

  // Infinity
  s = s.replace(/\+∞/g, "+\\infty")
  s = s.replace(/-∞/g, "-\\infty")
  s = s.replace(/∞/g, "\\infty")

  // ---- LOG / LN / EXP ----
  // exp(x) -> \exp(x)
  s = replaceNotEscaped(s, /(^|[^\\])\bexp\s*\(/g, (p) => `${p}\\exp(`)

  // ln(x) -> \ln(x)
  s = replaceNotEscaped(s, /(^|[^\\])\bln\s*\(/gi, (p) => `${p}\\ln(`)

  // ln x -> \ln(x)  (simple arg)
  s = replaceNotEscaped(s, /(^|[^\\])\bln\s+([A-Za-z0-9]+)\b/gi, (p, arg) => `${p}\\ln(${arg})`)

  // log(x) -> \log(x)
  s = replaceNotEscaped(s, /(^|[^\\])\blog\s*\(/gi, (p) => `${p}\\log(`)

  // log_2(x) -> \log_{2}(x)
  s = replaceNotEscaped(
    s,
    /(^|[^\\])\blog\s*_\s*(\{[^}]+\}|[A-Za-z0-9]+)\s*\(/gi,
    (p, base) => `${p}\\log_{${base.replace(/^\{|\}$/g, "")}}(`
  )

  // log10(x) -> \log_{10}(x)
  s = replaceNotEscaped(s, /(^|[^\\])\blog\s*([0-9]{1,3})\s*\(/gi, (p, base) => `${p}\\log_{${base}}(`)

  // ---- EXPONENTIAL e(...) and e^(...) ----
  // e^(...) / e^{...} / e^x -> \mathrm{e}^{...}
  s = replaceNotEscaped(
    s,
    /(^|[^\\])\be\s*\^\s*(\{[^}]+\}|\([^)]*\)|[A-Za-z0-9]+)\b/g,
    (p, expRaw) => {
      const exp = expRaw
        .trim()
        .replace(/^\(/, "")
        .replace(/\)$/, "")
        .replace(/^\{/, "")
        .replace(/\}$/, "")
      return `${p}\\mathrm{e}^{${exp}}`
    }
  )

  // e(-x) -> \mathrm{e}^{-x}  (treat as exp(-x))
  s = replaceNotEscaped(
    s,
    /(^|[^\\])\be\s*\(\s*([^)]+?)\s*\)/g,
    (p, inside) => `${p}\\mathrm{e}^{${inside.trim()}}`
  )

  // ---- Power / subscript normalization ----
  s = s.replace(/\s*\^\s*/g, "^")
  s = s.replace(/\s*_\s*/g, "_")

  // x_1 -> x_{1}
  s = s.replace(/([A-Za-z])_(?!\{)([A-Za-z0-9]+)/g, "$1_{$2}")

  // Unicode superscripts: x² -> x^{2}
  const supMap: Record<string, string> = {
    "²": "2","³": "3","¹": "1","⁰": "0","⁴": "4","⁵": "5","⁶": "6","⁷": "7","⁸": "8","⁹": "9"
  }
  s = s.replace(/([A-Za-z0-9\)\]])([²³¹⁰⁴⁵⁶⁷⁸⁹]+)/g, (_m, base, sup) => {
    const mapped = String(sup).split("").map(c => supMap[c] || c).join("")
    return `${base}^{${mapped}}`
  })

  // x^2 -> x^{2}
  s = s.replace(/\^(?!\{)([0-9A-Za-z]+)\b/g, (_m, exp) => `^{${exp}}`)

  // 1/2 -> \frac{1}{2}
  s = s.replace(/\b(-?\d+)\s*\/\s*(\d+)\b/g, "\\frac{$1}{$2}")

  // √x -> \sqrt{x}
  s = s.replace(/√([A-Za-z0-9]+)/g, "\\sqrt{$1}")

  // Spacing
  if (mode === "inline") {
  s = s.replace(/\s*([=+\-*/])\s*/g, " $1 ")
  s = s.replace(/\(\s+/g, "(").replace(/\s+\)/g, ")")
  s = s.replace(/\s+/g, " ").trim()
    // unary minus cleanup
    s = s.replace(/\{\s*-\s*/g, "{-").replace(/\(\s*-\s*/g, "(-").replace(/^\s*-\s*/g, "-")
  } else {
    s = s.replace(/[ \t]+\n/g, "\n").replace(/\n[ \t]+/g, "\n").trim()
  }

  return s
}

function normalizeAllMathBlocks(text: string): string {
  const segments = splitByMathBlocks(text)
  return segments
    .map(seg => {
      if (seg.type === "text") return seg.content
      const raw = seg.content

      if (raw.startsWith("$$") && raw.endsWith("$$")) {
        const inner = raw.slice(2, -2)
        return `$$${normalizeMathContent(inner, "block")}$$`
      }
      if (raw.startsWith("$") && raw.endsWith("$")) {
        const inner = raw.slice(1, -1)
        return `$${normalizeMathContent(inner, "inline")}$`
      }
      if (raw.startsWith("\\[") && raw.endsWith("\\]")) {
        const inner = raw.slice(2, -2)
        return `\\[${normalizeMathContent(inner, "block")}\\]`
      }
      if (raw.startsWith("\\(") && raw.endsWith("\\)")) {
        const inner = raw.slice(2, -2)
        return `\\(${normalizeMathContent(inner, "inline")}\\)`
      }
      return raw
    })
    .join("")
}

function mergeAdjacentInlineMath(text: string): string {
  let out = text
  while (true) {
    const next = out.replace(/\$([^$\n]+?)\$\s+\$([^$\n]+?)\$/g, (_m, a, b) => `$${a} ${b}$`)
    if (next === out) break
    out = next
  }
  return out
}

// ---------------------- PUBLIC API ----------------------

export function formatFunctions(text: string): string {
  return formatFunctionsAutonome(text)
}

function formatFunctionsAutonome(text: string): string {
  if (!text || typeof text !== "string") return text
  let result = text

  // Nice-to-have: ℝ, ±∞ in plain text
  result = replaceOutsideMathBlocks(result, /ℝ/g, () => wrapInlineMath("\\mathbb{R}"))
  result = replaceOutsideMathBlocks(result, /([+\-−])\s*∞/g, (_m, sign) => wrapInlineMath(`${sign === "+" ? "+" : "-"}\\infty`))

  /**
   * A) "Fonction: f(x) = ..."
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b(Fonction|fonction|Function|function)\b[\s:]*([A-Za-z](?:'{0,2})?)\s*\(\s*([^)]+?)\s*\)\s*=\s*([^\n]+)/g,
    (_m, label, func, args, expr) => {
      if (isComplexArg(args)) return _m
      if (!looksLikeMath(expr)) return _m
      const a = normalizeMathContent(args, "inline")
      const e = normalizeMathContent(String(expr).trim().replace(/[,.]$/, ""), "inline")
      return `${label}: ${wrapInlineMath(`${func}(${a}) = ${e}`)}`
    }
  )

  /**
   * B) General function equation: f(x)=..., f'(x)=..., ln(x)=..., etc.
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Za-z](?:'{0,2})?|sin|cos|tan|cot|sec|csc|log|ln|exp)\s*\(\s*([^)]+?)\s*\)\s*=\s*([^\n]+?)(?=\s*$|\s*\n|\s+et\s+|\s+où\s+|\s+puis\s+|\s+avec\s+|\s+car\s+|\s+donc\s+|\*\*|`|[.!?;,])/gi,
    (_m, func, args, expr) => {
      if (isComplexArg(args)) return _m
      if (!looksLikeMath(expr)) return _m
      const a = normalizeMathContent(args, "inline")
      const e = normalizeMathContent(String(expr).trim().replace(/[,.]$/, ""), "inline")
      return wrapInlineMath(`${func}(${a}) = ${e}`)
    }
  )

  /**
   * C) Standalone calls: f(x), f'(x), ln(x), exp(x) (no '=')
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Za-z](?:'{1,2})?|[A-Za-z]|sin|cos|tan|cot|sec|csc|log|ln|exp)\s*\(\s*([^)]+?)\s*\)(?!\s*=)/gi,
    (_m, func, args) => {
      const banned = new Set([
        "le","la","les","de","du","des","en","sur","par","pour","avec","sans","dans","dont",
        "que","qui","quoi","où","quand","comment","pourquoi","combien","quel","quelle",
        "et","ou","mais","donc","car","si","alors","est","sont"
      ])
      if (banned.has(String(func).toLowerCase())) return _m
      if (isComplexArg(args)) return _m

      const isDerivative = /'{1,2}$/.test(String(func))
      const isSingleLetter = /^[A-Za-z]$/.test(String(func))
      const isCommon = /^(sin|cos|tan|cot|sec|csc|log|ln|exp)$/i.test(String(func))
      if (!isDerivative && !isSingleLetter && !isCommon) return _m

      const a = normalizeMathContent(args, "inline")
      return wrapInlineMath(`${func}(${a})`)
    }
  )

  result = mergeAdjacentInlineMath(result)
  result = normalizeAllMathBlocks(result)
  return result
}

/*
Example:
Input:  "f(x) = (x^2 - x - 1)e(-x) + 1"
Output: "$f(x) = (x^{2} - x - 1)\\mathrm{e}^{-x} + 1$"
*/
