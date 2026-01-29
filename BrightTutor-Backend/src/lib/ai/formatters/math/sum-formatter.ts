/**
 * SUM FORMATTER - robust conversion for summations
 * Goal: "Sn = Σ k = 0ⁿ uk" -> "$S_n=\sum_{k=0}^{n}u_k$"
 */

// =========================================================================================
// HELPERS
// =========================================================================================

const SUB_MAP: Record<string, string> = {
    "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4",
    "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9",
    // common letter subscripts (optional but useful)
    "ₙ": "n", "ₖ": "k", "ₘ": "m", "ₜ": "t",
  }
  
  const SUP_MAP: Record<string, string> = {
    "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4",
    "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9",
    // key letters for sequences
    "ⁿ": "n", "ⁱ": "i", "ᵏ": "k", "ᵐ": "m", "ᵗ": "t",
  }
  
  const SUP_CLASS = "⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱᵏᵐᵗ"
  const SUB_CLASS = "₀₁₂₃₄₅₆₇₈₉ₙₖₘₜ"
  
  function mapSub(s: string): string {
    return s.split("").map((ch) => SUB_MAP[ch] ?? ch).join("")
  }
  function mapSup(s: string): string {
    return s.split("").map((ch) => SUP_MAP[ch] ?? ch).join("")
  }
  
  function normalizeGreekInExponent(s: string): string {
    const GREEK_MAP: Record<string, string> = {
      "α": "\\alpha", "β": "\\beta", "γ": "\\gamma", "δ": "\\delta",
      "ε": "\\epsilon", "θ": "\\theta", "λ": "\\lambda", "μ": "\\mu",
      "π": "\\pi", "ρ": "\\rho", "σ": "\\sigma", "τ": "\\tau",
      "φ": "\\phi", "ω": "\\omega",
    }
    return s.replace(/[αβγδεθλμπρστφω]/g, (g) => GREEK_MAP[g] ?? g)
  }
  
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
   * Normalize unicode superscripts/subscripts into LaTeX-friendly forms.
   * Key point: turns "0ⁿ" into "0^{n}" (instead of "0n").
   */
  function normalizeUnicodeScripts(text: string): string {
    let out = text
  
    // Note: Σ -> ∑ conversion is now done BEFORE this function is called
    // (in convertSumsInUnicodeMathTokens) to ensure sum patterns are caught first
  
    // Convert unicode superscripts AFTER a base token: xⁿ -> x^{n}, 0² -> 0^{2}
    // Now includes ⁿ, ᵏ, ᵐ, ᵗ for better sequence handling
    out = out.replace(new RegExp(`([0-9A-Za-z\\)\\]\\}])([${SUP_CLASS}]+)`, "g"), (_m, base, sup) => {
      const supN = mapSup(sup)
      return `${base}^${supN.length > 1 ? `{${supN}}` : supN}`
    })
  
    // Convert unicode subscripts AFTER a base token: uₙ -> u_{n}, M₁ -> M_{1}
    out = out.replace(new RegExp(`([0-9A-Za-z\\)\\]\\}])([${SUB_CLASS}]+)`, "g"), (_m, base, sub) => {
      const subN = mapSub(sub)
      return `${base}_{${subN}}`
    })
  
    return out
  }
  
  // =========================================================================================
  // SUM CONVERSION (to be used inside convertUnicodeMathTokens OR early normalization)
  // =========================================================================================
  
  export function convertSumsInUnicodeMathTokens(input: string): string {
    let out = input
  
    // CRITICAL: Convert Σ -> ∑ FIRST (before any other processing)
    out = out.replace(/Σ/g, "∑")
    
    // Now only one summation symbol remains: ∑
    const SUM = "∑"
  
    // 0) Direct catch: ∑ k = 0ⁿ (bulletproof - runs BEFORE normalizeUnicodeScripts)
    // This MUST run before normalizeUnicodeScripts converts 0ⁿ to 0^{n}
    // Pattern: ∑ k = 0ⁿ or ∑ k=0ⁿ or ∑k=0ⁿ
    // Also handles: Σ k = 0ⁿ (already converted to ∑ above)
    const directSumPattern = new RegExp(
      `[∑Σ]\\s*([A-Za-z])\\s*=\\s*([0-9A-Za-z]+)([${SUP_CLASS}]+)`,
      "g"
    )
    out = out.replace(directSumPattern, (_m, idx, low, sup) => {
      const supN = mapSup(sup)
      return `\\sum_{${idx}=${low}}^{${supN}}`
    })
    
    // NOW normalize unicode scripts (after we've caught the sum pattern)
    // This will convert remaining 0ⁿ -> 0^{n} but won't affect already-converted sums
    out = normalizeUnicodeScripts(out)
  
    // 1) Latex-like: ∑_{k=0}^{n}  or  ∑_{k=0}^n  (upper may already be ^{n})
    out = out.replace(
      new RegExp(`${SUM}\\s*_\\s*\\{\\s*([A-Za-z])\\s*=\\s*([^}]+?)\\s*\\}\\s*\\^\\s*(\\{\\s*([^}]+?)\\s*\\}|([^\\s]+))`, "g"),
      (_m, idx, low, _uRaw, u1, u2) => {
        const upper = (u1 ?? u2 ?? "").trim()
        return `\\sum_{${idx}=${low.trim()}}^{${normalizeGreekInExponent(upper)}}`
      }
    )
  
    // 2) Inline: ∑ k = 0^n   OR  ∑ k=0^{n}
    out = out.replace(
      new RegExp(`${SUM}\\s*([A-Za-z])\\s*=\\s*([^\\s\\^]+)\\s*\\^\\s*(\\{\\s*([^}]+?)\\s*\\}|([^\\s]+))`, "g"),
      (_m, idx, low, _uRaw, u1, u2) => {
        const upper = (u1 ?? u2 ?? "").trim()
        return `\\sum_{${idx}=${low.trim()}}^{${normalizeGreekInExponent(upper)}}`
      }
    )
  
    // 3) Unicode-only bounds (rare but keep): ∑₀ⁿ
    out = out.replace(
      new RegExp(`${SUM}([${SUB_CLASS}]+)([${SUP_CLASS}]+)?`, "g"),
      (_m, sub, sup) => {
        const subN = mapSub(sub)
        const supN = sup ? mapSup(sup) : ""
        return supN ? `\\sum_{${subN}}^{${supN}}` : `\\sum_{${subN}}`
      }
    )
  
    // Safety: "\sum a^b" -> "\sum_{a}^b" (do not touch already-correct \sum_{...})
    out = out.replace(/\\sum(?!_)\s*([0-9A-Za-z]|\\[A-Za-z]+)\s*\^/g, (_m, low) => {
      return `\\sum_{${low}}^`
    })
  
    return out
  }
  
  // =========================================================================================
  // EARLY NORMALIZATION (the real fix): wrap the whole formula in ONE $...$
  // =========================================================================================
  
  function wrapPlainTextSumsOutsideMath(input: string): string {
    const re =
      /([A-Za-z_][A-Za-z0-9_]*\s*=\s*)?\\sum_\{[^}]+\}\^\{[^}]+\}[^$\n]*?(?=\s*(en fonction|pour|où|si|alors|donc|,|\.|$|\n))/g
  
    return replaceOutsideMathBlocks(input, re, (m: string) => {
      const compact = m.replace(/\s+/g, " ").trim()
      return `$${compact}$`
    })
  }
  
  /**
   * Normalize summations BEFORE your other formatter steps split tokens.
   * Recommended call order:
   *   text = normalizeSummationsEarly(text)
   *   text = autoConvertMathToLatex(text)
   *   text = fixMathFormatting(text)
   */
  export function normalizeSummationsEarly(text: string): string {
    let out = text
  
    // Normalize Sn -> S_n outside math blocks (strict and safe)
    out = replaceOutsideMathBlocks(out, /\bSn\b/g, "S_n")
  
    // Convert Σ/∑ + unicode scripts + bounds -> \sum_{k=0}^{n}
    out = convertSumsInUnicodeMathTokens(out)
  
    /**
     * Fix the typical "uk" right after a sum into "u_k" WHEN it matches the sum index.
     * Example: "\sum_{k=0}^{n} uk" -> "\sum_{k=0}^{n} u_k"
     */
    out = out.replace(
      /\\sum_\{([A-Za-z])=([^}]+)\}\^\{([^}]+)\}\s*([A-Za-z])\s*([A-Za-z])\b/g,
      (m, idxVar, low, up, termVar, termIdx) => {
        if (termIdx === idxVar) return `\\sum_{${idxVar}=${low}}^{${up}} ${termVar}_${termIdx}`
        return m
      }
    )
  
    // Wrap full expressions containing \sum in ONE math block (prevents fragmentation)
    out = wrapPlainTextSumsOutsideMath(out)
  
    return out
  }
  
  // =========================================================================================
  // TEST
  // =========================================================================================
  
  export function testSumFormatter() {
    const tests = [
      "Sn = Σ k = 0ⁿ uk",
      "Sn = Σ k = 0^n uk",
      "S_n = ∑ k=0^{n} u_k",
      "Sn = ∑_{k=0}^{n} uk en fonction de n",
      "Calculer Sn = Σ k = 0ⁿ u_k.",
      "S_n = ∑_{k=0}^{n} u_k", // Already correct format
    ]
  
    console.log("=== SUM FORMATTER TESTS ===")
    for (const t of tests) {
      const r = normalizeSummationsEarly(t)
      console.log("IN :", t)
      console.log("OUT:", r)
      console.log("Expected: Should contain \\sum_{k=0}^{n}")
      console.log("Match:", r.includes("\\sum_{k=0}^{n}") || r.includes("$S_n=\\sum_{k=0}^{n}"))
      console.log("---")
    }
  }
  