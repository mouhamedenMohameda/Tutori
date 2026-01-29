/**
 * SUITES FORMATTER (version très couvrante Bac)
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

// -------------------- Normalisations --------------------

function normalizeMathContent(input: string): string {
  let s = input
  s = s.replace(/\$/g, "")
  s = s.replace(/[−–—‒\u2212]/g, "-")

  // flèches + infinis (ASCII & Unicode)
  s = s.replace(/->|⟶|→/g, "\\to")
  s = s.replace(/\b\+?\s*oo\b/gi, "\\infty")
  s = s.replace(/\b-\s*oo\b/gi, "-\\infty")
  s = s.replace(/∞/g, "\\infty")

  // opérateurs ASCII
  s = s.replace(/<=/g, "\\le").replace(/>=/g, "\\ge")
  s = s.replace(/!=/g, "\\ne")

  // opérateurs Unicode
  s = s.replace(/≤/g, "\\le").replace(/≥/g, "\\ge")

  // symboles divers
  s = s.replace(/×/g, "\\times")
  s = s.replace(/Σ|∑/g, "\\sum")

  // espacements
  s = s.replace(/\s*([=+\-*/(),])\s*/g, " $1 ")
  s = s.replace(/\(\s+/g, "(").replace(/\s+\)/g, ")")
  s = s.replace(/\s+/g, " ").trim()
  return s
}

function wrapInlineMath(expr: string): string {
  const cleaned = normalizeMathContent(expr)
  return `$${cleaned}$`
}

function containsNaturalLanguageWords(candidate: string): boolean {
  // protège contre “donc”, “alors”, “on montre que”, etc.
  const noLatexCommands = candidate.replace(/\\[A-Za-z]+/g, "")
  return /[a-zA-ZÀ-ÿ]{3,}/.test(noLatexCommands)
}

// subscripts Unicode digits + lettres + signes usuels
const SUBSCRIPT_MAP: Record<string, string> = {
  "₀": "0","₁": "1","₂": "2","₃": "3","₄": "4","₅": "5","₆": "6","₇": "7","₈": "8","₉": "9",
  "ₙ": "n","ₖ": "k","ₘ": "m","ₚ": "p","ₜ": "t","ᵢ": "i","ⱼ": "j","ₗ": "l","ₛ": "s","ₓ": "x",
  "₊": "+","₋": "-","₍": "(", "₎": ")"
}

// superscripts Unicode (puissances)
const SUPERSCRIPT_MAP: Record<string, string> = {
  "⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9",
  "ⁿ":"n","ᵏ":"k","ᵐ":"m","ᵖ":"p","ᵗ":"t","ˣ":"x",
  "⁺":"+","⁻":"-","⁽":"(", "⁾":")"
}

function mapUnicode(map: Record<string, string>, s: string): string {
  return s.split("").map(ch => map[ch] ?? ch).join("")
}

function stripBraces(s: string): string {
  const t = s.trim()
  if (t.startsWith("{") && t.endsWith("}")) return t.slice(1, -1).trim()
  return t
}

function normalizeIndexExpr(raw: string): string {
  // indices: retire espaces + convertit subscripts unicode + sécurise infini
  let x = raw
  x = stripBraces(x)
  x = mapUnicode(SUBSCRIPT_MAP, x)
  x = x.replace(/\s+/g, "")
  x = x.replace(/->|→/g, "\\to")
  x = x.replace(/\b\+?\s*oo\b/gi, "\\infty").replace(/\b-\s*oo\b/gi, "-\\infty").replace(/∞/g, "\\infty")
  return x
}

// ------------------------------------------------------
// FORMATTER PRINCIPAL (ordre crucial)
// ------------------------------------------------------
export function formatSuites(text: string): string {
  if (!text || typeof text !== "string") return text
  let result = text

  // 0) Puissances Unicode : qⁿ, (-1)², 2³, x⁴ -> q^{n}, (-1)^{2}, ...
  result = replaceOutsideMathBlocks(
    result,
    /(\b[a-zA-Z0-9)\]])\s*([⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵏᵐᵖᵗˣ⁺⁻⁽⁾]+)/g,
    (m, base, sup) => wrapInlineMath(`${base}^{${mapUnicode(SUPERSCRIPT_MAP, sup)}}`)
  )

  // 1) LIMITES "texte" : "n tend vers +infini", "lorsque n tend vers l'infini"
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:lorsque\s+)?([a-z])\s+tend\s+vers\s+([+-]?(?:l'infini|infini|∞|\\infty|oo))\b/gi,
    (m, v, inf) => {
      const I = /-/.test(inf) ? "-\\infty" : "\\infty"
      return wrapInlineMath(`${v} \\to ${I}`)
    }
  )

  // 2) lim_{n->∞} u_n = L (ASCII/Unicode, oo/∞)
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:lim|\\lim)\s*_\s*\{?\s*([a-z])\s*(?:\\to|->|→)\s*([+-]?(?:\\infty|∞|oo))\s*\}?\s*([a-zA-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*(?:=\s*([^\n,.;]+))?/g,
    (m, n, inf, u, idxRaw, rhs) => {
      const idx = normalizeIndexExpr(idxRaw)
      const I = /^-/.test(inf) ? "-\\infty" : "\\infty"
      const left = `\\lim_{${n} \\to ${I}} ${u}_{${idx}}`
      if (!rhs) return wrapInlineMath(left)
      if (containsNaturalLanguageWords(rhs)) return wrapInlineMath(left)
      return wrapInlineMath(`${left} = ${normalizeMathContent(rhs)}`)
    }
  )

  // 3) Convergence : u_n -> L, u_n → +∞ (ASCII/Unicode)
  result = replaceOutsideMathBlocks(
    result,
    /\b([a-zA-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*(?:->|→|\\to)\s*([+-]?(?:\\infty|∞|oo)|[a-zA-Z]|[0-9]+(?:\.[0-9]+)?)/g,
    (m, u, idxRaw, lim) => {
      const idx = normalizeIndexExpr(idxRaw)
      const L = /^-/.test(lim) ? "-\\infty" : /∞|oo|\\infty/.test(lim) ? "\\infty" : lim
      return wrapInlineMath(`${u}_{${idx}} \\to ${L}`)
    }
  )

  // 4) RÉCURRENCES (général) : u_{...} = expr (avant atomisation)
  //    (capte aussi u_{n+2}, u_{2n+1}, u_{n-p}...)
  result = replaceOutsideMathBlocks(
    result,
    /\b([a-zA-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*=\s*([^$\n]+?)(?=\s*$|\s*\n|,|\.|;|\)|\]|\s+et\s+|\s+où\s+)/g,
    (m, u, idxRaw, expr) => {
      if (containsNaturalLanguageWords(expr)) return m
      const idx = normalizeIndexExpr(idxRaw)
      return wrapInlineMath(`${u}_{${idx}} = ${normalizeMathContent(expr)}`)
    }
  )

  // 5) Différence / quotient : u_{n+1} - u_n = ... ; u_{n+1} / u_n = ...
  result = replaceOutsideMathBlocks(
    result,
    /\b([a-zA-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*-\s*\1\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*=\s*([^$\n]+?)(?=\s*$|\s*\n|,|\.|;)/g,
    (m, u, i1, i2, rhs) => {
      if (containsNaturalLanguageWords(rhs)) return m
      const a = normalizeIndexExpr(i1), b = normalizeIndexExpr(i2)
      return wrapInlineMath(`${u}_{${a}} - ${u}_{${b}} = ${normalizeMathContent(rhs)}`)
    }
  )

  result = replaceOutsideMathBlocks(
    result,
    /\b([a-zA-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*\/\s*\1\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*=\s*([^$\n]+?)(?=\s*$|\s*\n|,|\.|;)/g,
    (m, u, i1, i2, rhs) => {
      if (containsNaturalLanguageWords(rhs)) return m
      const a = normalizeIndexExpr(i1), b = normalizeIndexExpr(i2)
      return wrapInlineMath(`\\frac{${u}_{${a}}}{${u}_{${b}}} = ${normalizeMathContent(rhs)}`)
    }
  )

  // 6) SOMMES bornées : S_n = sum_{k=0}^{n} u_k (Sigma/∑/sum/Σ)
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*=\s*(?:\\sum|∑|Σ|sum)\s*_\s*\{?\s*([a-z])\s*=\s*([a-zA-Z0-9]+)\s*\}?\s*\^\s*\{?\s*([a-zA-Z0-9]+)\s*\}?\s*([a-zA-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\b/g,
    (m, S, Sn, k, from, to, u, uk) =>
      wrapInlineMath(`${S}_{${normalizeIndexExpr(Sn)}} = \\sum_{${k}=${from}}^{${to}} ${u}_{${normalizeIndexExpr(uk)}}`)
  )

  // 7) Somme “u0 + ... + un”
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z])\s*_\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z])\s*_\s*([a-zA-Z0-9]+)\s*\+\s*(?:\.{3}|…|⋯)\s*\+\s*([a-zA-Z])\s*_\s*([a-zA-Z0-9]+)\b/g,
    (m, S, Sn, u1, i1, u2, i2) =>
      wrapInlineMath(`${S}_{${Sn}} = ${u1}_{${i1}} + \\cdots + ${u2}_{${i2}}`)
  )

  // 8) Notation de suite : (u_n), (u_n)_{n∈N}, u=(u_n)
  result = replaceOutsideMathBlocks(
    result,
    /\(\s*([a-zA-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*\)\s*(?:_\s*\{\s*([a-z])\s*(?:∈|in)\s*(?:ℕ|N|\\mathbb\{N\})\s*(\*?)\s*\})?/g,
    (m, u, idxRaw, n, star) => {
      const idx = normalizeIndexExpr(idxRaw)
      if (!n) return wrapInlineMath(`(${u}_{${idx}})`)
      const set = star ? "\\mathbb{N}^*" : "\\mathbb{N}"
      return wrapInlineMath(`(${u}_{${idx}})_{${n}\\in${set}}`)
    }
  )

  // 9) Quantificateurs / appartenance : ∀ n ∈ N, n in N*, n∈ℕ
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:∀|pour\s+tout)\s*([a-z])\s*(?:∈|in)\s*(?:ℕ|N|\\mathbb\{N\})(\*?)\b/gi,
    (m, n, star) => wrapInlineMath(`\\forall ${n} \\in ${star ? "\\mathbb{N}^*" : "\\mathbb{N}"}`)
  )
  result = replaceOutsideMathBlocks(
    result,
    /\b([a-z])\s*(?:∈|in)\s*(?:ℕ|N|\\mathbb\{N\})(\*?)\b/gi,
    (m, n, star) => wrapInlineMath(`${n} \\in ${star ? "\\mathbb{N}^*" : "\\mathbb{N}"}`)
  )

  // 10) Inégalités entre termes : u_{...} <= v_{...}, u_n ≥ 0, etc.
  result = replaceOutsideMathBlocks(
    result,
    /\b([a-zA-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\s*(<=|>=|<|>|\\le|\\ge|≤|≥)\s*([a-zA-Z0-9]+|[a-zA-Z]\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+))\b/g,
    (m, u, idxRaw, op, rhs, rhsIdxRaw) => {
      const idx = normalizeIndexExpr(idxRaw)
      const OP = op === "<=" || op === "≤" ? "\\le" : op === ">=" || op === "≥" ? "\\ge" : op
      // rhs peut être un nombre ou un terme v_n
      if (rhsIdxRaw) {
        const v = rhs.trim().charAt(0)
        const vidx = normalizeIndexExpr(rhsIdxRaw)
        return wrapInlineMath(`${u}_{${idx}} ${OP} ${v}_{${vidx}}`)
      }
      return wrapInlineMath(`${u}_{${idx}} ${OP} ${rhs}`)
    }
  )

  // ------------------------------------------------------------------
  // FIN : atomisation des termes (à faire à la fin)
  // ------------------------------------------------------------------

  // A) indices Unicode : uₙ₊₁, uₖ, etc.
  result = replaceOutsideMathBlocks(
    result,
    /\b([a-zA-Z])([₀₁₂₃₄₅₆₇₈₉ₙₖₘₚₜᵢⱼₗₛₓ₊₋₍₎]+)\b/g,
    (m, v, sub) => wrapInlineMath(`${v}_{${normalizeIndexExpr(mapUnicode(SUBSCRIPT_MAP, sub))}}`)
  )

  // B) indices _{...} ou _n ou _0
  result = replaceOutsideMathBlocks(
    result,
    /\b([a-zA-Z])\s*_\s*(\{[^}]+\}|[a-zA-Z0-9]+)\b/g,
    (m, v, idxRaw) => wrapInlineMath(`${v}_{${normalizeIndexExpr(idxRaw)}}`)
  )

  return result
}
