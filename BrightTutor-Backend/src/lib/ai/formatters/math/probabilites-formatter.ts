/**
 * PROBABILITÉS FORMATTER (version très couvrante Bac/L1)
 *
 * Couvre (hors déjà-en-math $...$ / $$...$$) :
 * - Probabilités : P(A), P(A|B), P(A/B), P(A sachant B), P_X(...), P(X=...), p(X=...) (densité/pmf)
 * - Événements composés : ∩, ∪, complément, différence, inclusions, événements indépendants
 * - Conditionnement sur expressions : P(X<=a | Y>b), P(A ∩ B | C), P(X∈I)
 * - Lois : B(n,p), Bin(n,p), Bern(p), Geo(p), Pois(λ), Exp(λ), N(μ,σ²), U(a,b), Hypergeo(N,K,n)
 * - Espérance : E(X), E[X], 𝔼(X), 𝔼[X]
 * - Variance : V(X), Var(X), Var[X]
 * - Écart-type : σ(X), sd(X), Std(X)
 * - Cov/Cor : Cov(X,Y), corr(X,Y), ρ(X,Y)
 * - Notations usuelles : X~B(n,p), X suit une loi..., "X appartient à", intervalles, ≤ ≥ !=
 *
 * Limite assumée (inévitable en regex): certaines phrases naturelles ambiguës ne seront pas “mathifiées”
 * si elles contiennent trop de texte (filtre containsNaturalLanguageWords).
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

// Limite de longueur pour éviter le backtracking catastrophique
const MAX_MATCH_LENGTH = 500
const MAX_SEGMENT_LENGTH = 10000

function replaceOutsideMathBlocks(
  text: string,
  pattern: RegExp,
  replacement: (match: string, ...groups: string[]) => string
): string {
  if (!text || typeof text !== "string") return text
  
  // Early exit pour textes très longs
  if (text.length > 50000) return text
  
  const pat = ensureGlobal(pattern)
  const segments = splitByMathBlocks(text)

  return segments
    .map(seg => {
      if (seg.type === "math") return seg.content
      const src = seg.content
      
      // Skip segments trop longs pour éviter les problèmes de performance
      if (src.length > MAX_SEGMENT_LENGTH) return src
      
      pat.lastIndex = 0

      const matches: Array<{ match: string; groups: string[]; index: number }> = []
      let m: RegExpExecArray | null
      let iterations = 0
      const MAX_ITERATIONS = 1000 // Limite de sécurité
      
      while ((m = pat.exec(src)) !== null) {
        // Limiter la longueur des matches pour éviter le backtracking
        if (m[0].length > MAX_MATCH_LENGTH) {
          if (m.index === pat.lastIndex) pat.lastIndex++
          continue
        }
        
        matches.push({ match: m[0], groups: m.slice(1), index: m.index })
        if (m.index === pat.lastIndex) pat.lastIndex++
        
        // Limite de sécurité pour éviter les boucles infinies
        iterations++
        if (iterations > MAX_ITERATIONS) break
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
  // filtre grossier: empêche de transformer des bouts de phrases longues en math
  const noLatexCommands = candidate.replace(/\\[A-Za-z]+/g, "")
  return /[a-zA-ZÀ-ÿ]{3,}/.test(noLatexCommands)
}

function normalizeProbMath(input: string): string {
  let s = input

  // normaliser signes
  s = s.replace(/[−–—‒\u2212]/g, "-")
  s = s.replace(/≤/g, "\\le").replace(/≥/g, "\\ge")
  s = s.replace(/!=/g, "\\ne")
  s = s.replace(/<=/g, "\\le").replace(/>=/g, "\\ge")

  // ensembles/intervalles
  s = s.replace(/∈/g, "\\in")
  s = s.replace(/ℕ/g, "\\mathbb{N}")
  s = s.replace(/ℤ/g, "\\mathbb{Z}")
  s = s.replace(/ℚ/g, "\\mathbb{Q}")
  s = s.replace(/ℝ/g, "\\mathbb{R}")

  // ops en proba
  s = s.replace(/∩/g, "\\cap")
  s = s.replace(/∪/g, "\\cup")
  s = s.replace(/\\mid/g, "\\mid") // no-op
  s = s.replace(/\|\|/g, "\\mid")  // rare

  // étoile complément (A^c, Aᶜ, \bar A)
  s = s.replace(/ᶜ/g, "c") // Aᶜ -> Ac (on corrigera ensuite)

  // espaces
  s = s.replace(/\s*([=+\-*/(),\[\]{}])\s*/g, " $1 ")
  s = s.replace(/\s+/g, " ").trim()

  // corriger Ac -> A^c si détectable
  // (prudent: seulement si motif lettre+ c isolé)
  s = s.replace(/\b([A-Za-z])\s*c\b/g, "$1^c")

  return s
}

function wrapInlineMath(expr: string): string {
  const cleaned = normalizeProbMath(expr)
  return `$${cleaned}$`
}

// extrait "contenu" entre parenthèses en tolérant des espaces
function stripOuterSpaces(s: string): string {
  return s.replace(/^\s+|\s+$/g, "")
}

// ------------------------------------------------------
// FORMATTER PRINCIPAL
// ------------------------------------------------------

export function formatProbabilites(text: string): string {
  if (!text || typeof text !== "string") return text
  
  // Early exit pour textes très longs - éviter le timeout
  if (text.length > 50000) return text
  
  // Protection: ne pas transformer les placeholders de protection des autres formatters
  const PROTECTION_PATTERN = /ZZZFRENCHWORD\d+ZZZ/g;
  const hasPlaceholders = PROTECTION_PATTERN.test(text);
  
  let result = text

  /**
   * 0) Normaliser notations "sachant" et séparateurs conditionnels
   *    "P(A sachant B)" -> P(A|B)
   *    Limité à 200 caractères par expression
   */
  result = replaceOutsideMathBlocks(
    result,
    /\bP\s*\(\s*([^()]{1,200}?)\s+sachant\s+([^()]{1,200}?)\s*\)/gi,
    (_m, A, B) => wrapInlineMath(`P(${normalizeProbMath(A)} \\mid ${normalizeProbMath(B)})`)
  )

  /**
   * 1) Probabilité conditionnelle (générale) : P(expr | expr) ou P(expr / expr)
   *    Accepte expressions: X<=a, A∩B, X∈I, etc.
   *    Limité à 200 caractères par expression pour éviter le backtracking
   */
  result = replaceOutsideMathBlocks(
    result,
    /\bP\s*\(\s*([^()]{1,200}?)\s*(?:\||\/)\s*([^()]{1,200}?)\s*\)/gi,
    (m, A, B) => {
      if (containsNaturalLanguageWords(A) || containsNaturalLanguageWords(B)) return m
      return wrapInlineMath(`P(${normalizeProbMath(A)} \\mid ${normalizeProbMath(B)})`)
    }
  )

  /**
   * 2) Probabilité avec indice : P_X(...), P_{X}(...), p_X(...) (densité/pmf)
   *    Limité à 200 caractères pour l'expression
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([Pp])\s*_\s*\{?\s*([A-Za-z][A-Za-z0-9_]*)\s*\}?\s*\(\s*([^()]{1,200}?)\s*\)/g,
    (m, Pp, X, expr) => {
      if (containsNaturalLanguageWords(expr)) return m
      // P_X(...) ou p_X(...)
      return wrapInlineMath(`${Pp}_{${X}}(${normalizeProbMath(expr)})`)
    }
  )

  /**
   * 3) Probabilité simple : P(expr)
   *    expr peut être "A", "X=k", "X<=a", "A∩B", "X∈I", "A^c", etc.
   *    Limité à 200 caractères pour éviter le backtracking catastrophique
   */
  result = replaceOutsideMathBlocks(
    result,
    /\bP\s*\(\s*([^()]{1,200}?)\s*\)/g,
    (m, expr) => {
      if (containsNaturalLanguageWords(expr)) return m
      return wrapInlineMath(`P(${normalizeProbMath(expr)})`)
    }
  )

  /**
   * 4) Événements composés écrits en mots à l'intérieur de P( )
   *    P(A et B), P(A ou B), P(A inter B), P(A union B)
   *    (utile si l'utilisateur écrit "P(A et B)" sans symbole)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\bP\s*\(\s*([A-Za-z0-9_]+)\s*(?:et|inter)\s*([A-Za-z0-9_]+)\s*\)/gi,
    (_m, A, B) => wrapInlineMath(`P(${A} \\cap ${B})`)
  )
  result = replaceOutsideMathBlocks(
    result,
    /\bP\s*\(\s*([A-Za-z0-9_]+)\s*(?:ou|union)\s*([A-Za-z0-9_]+)\s*\)/gi,
    (_m, A, B) => wrapInlineMath(`P(${A} \\cup ${B})`)
  )

  /**
   * 5) Complément / contraire / "non A"
   *    - P(A^c), P(Aᶜ), P(\bar A)
   *    - "P(non A)" (texte)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\bP\s*\(\s*(?:non|contraire\s+de)\s+([A-Za-z0-9_]+)\s*\)/gi,
    (_m, A) => wrapInlineMath(`P(${A}^c)`)
  )
  result = replaceOutsideMathBlocks(
    result,
    /\bP\s*\(\s*\\?bar\s*\(?\s*([A-Za-z0-9_]+)\s*\)?\s*\)/gi,
    (_m, A) => wrapInlineMath(`P(\\overline{${A}})`)
  )

  /**
   * 6) Indépendance : A ⟂ B, A independent B, A ⫫ B
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Za-z0-9_]+)\s*(?:⟂|⫫|ind[ée]pendant\s+de|independent\s+of)\s*([A-Za-z0-9_]+)\b/gi,
    (_m, A, B) => wrapInlineMath(`${A} \\perp ${B}`)
  )

  /**
   * 7) Espérance : E(X), E[X], 𝔼(X), 𝔼[X]
   *    + linéarité typique: E(aX+b) etc (on ne simplifie pas, on formate)
   *    Limité à 200 caractères
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:E|𝔼|\\mathbb\{E\}|\\mathbb\{E\})\s*[\(\[]\s*([^\]\)]{1,200}?)\s*[\)\]]/g,
    (m, X) => {
      if (containsNaturalLanguageWords(X)) return m
      return wrapInlineMath(`\\mathbb{E}(${normalizeProbMath(X)})`)
    }
  )

  /**
   * 8) Variance : V(X), Var(X), Var[X]
   *    Limité à 200 caractères
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:V|Var|\\mathrm\{Var\})\s*[\(\[]\s*([^\]\)]{1,200}?)\s*[\)\]]/g,
    (m, X) => {
      if (containsNaturalLanguageWords(X)) return m
      return wrapInlineMath(`\\mathrm{Var}(${normalizeProbMath(X)})`)
    }
  )

  /**
   * 9) Écart-type : σ(X), sigma(X), sd(X), Std(X)
   *    Limité à 200 caractères
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:σ|sigma|sd|Std|\\sigma)\s*[\(\[]\s*([^\]\)]{1,200}?)\s*[\)\]]/gi,
    (m, X) => {
      if (containsNaturalLanguageWords(X)) return m
      return wrapInlineMath(`\\sigma(${normalizeProbMath(X)})`)
    }
  )

  /**
   * 10) Covariance / Corrélation : Cov(X,Y), corr(X,Y), ρ(X,Y)
   *     Limité à 200 caractères par paramètre
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:Cov|\\mathrm\{Cov\})\s*\(\s*([^,]{1,200}?)\s*,\s*([^)]{1,200}?)\s*\)/g,
    (m, X, Y) => {
      if (containsNaturalLanguageWords(X) || containsNaturalLanguageWords(Y)) return m
      return wrapInlineMath(`\\mathrm{Cov}(${normalizeProbMath(X)}, ${normalizeProbMath(Y)})`)
    }
  )
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:corr|Cor|\\mathrm\{Corr\})\s*\(\s*([^,]{1,200}?)\s*,\s*([^)]{1,200}?)\s*\)/gi,
    (m, X, Y) => {
      if (containsNaturalLanguageWords(X) || containsNaturalLanguageWords(Y)) return m
      return wrapInlineMath(`\\mathrm{Corr}(${normalizeProbMath(X)}, ${normalizeProbMath(Y)})`)
    }
  )
  result = replaceOutsideMathBlocks(
    result,
    /\bρ\s*\(\s*([^,]{1,200}?)\s*,\s*([^)]{1,200}?)\s*\)/g,
    (m, X, Y) => {
      if (containsNaturalLanguageWords(X) || containsNaturalLanguageWords(Y)) return m
      return wrapInlineMath(`\\rho(${normalizeProbMath(X)}, ${normalizeProbMath(Y)})`)
    }
  )

  /**
   * 11) Lois (notations)
   * - X ~ Loi(params)
   * - X suit une loi ...
   * Couvre: Binomiale, Bernoulli, Géométrique, Poisson, Exponentielle, Normale, Uniforme, Hypergéométrique
   */
  // X ~ B(n,p) / N(mu,sigma^2) / U(a,b) / Pois(lambda) / Exp(lambda) / Geo(p) / Bern(p)
  // Limité à 200 caractères pour les paramètres
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Za-z][A-Za-z0-9_]*)\s*~\s*([A-Za-z]+|B|Bin|Bern|Geo|Pois|Exp|N|U|Hypergeo)\s*\(\s*([^)]{1,200}?)\s*\)/gi,
    (m, X, law, params) => {
      if (containsNaturalLanguageWords(params)) return m
      const L = law
        .replace(/^bin$/i, "B")
        .replace(/^bern$/i, "\\mathrm{Bern}")
        .replace(/^geo$/i, "\\mathrm{Geo}")
        .replace(/^pois$/i, "\\mathrm{Pois}")
        .replace(/^exp$/i, "\\mathrm{Exp}")
        .replace(/^n$/i, "\\mathcal{N}")
        .replace(/^u$/i, "\\mathcal{U}")
        .replace(/^hypergeo$/i, "\\mathrm{Hypergeo}")
      return wrapInlineMath(`${X} \\sim ${L}(${normalizeProbMath(params)})`)
    }
  )

  // "X suit une loi ..." (FR)
  // Limité à 200 caractères pour les paramètres
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Za-z][A-Za-z0-9_]*)\s+suit\s+une\s+loi\s+([A-Za-zéèêàîôûç]+)\s*\(\s*([^)]{1,200}?)\s*\)/gi,
    (m, X, lawFR, params) => {
      if (containsNaturalLanguageWords(params)) return m
      const w = lawFR.toLowerCase()
      let L = "\\mathrm{Loi}"
      if (w.includes("binom")) L = "B"
      else if (w.includes("bernou")) L = "\\mathrm{Bern}"
      else if (w.includes("géom") || w.includes("geom")) L = "\\mathrm{Geo}"
      else if (w.includes("poisson")) L = "\\mathrm{Pois}"
      else if (w.includes("exponent")) L = "\\mathrm{Exp}"
      else if (w.includes("normal")) L = "\\mathcal{N}"
      else if (w.includes("uniform")) L = "\\mathcal{U}"
      else if (w.includes("hyper")) L = "\\mathrm{Hypergeo}"
      return wrapInlineMath(`${X} \\sim ${L}(${normalizeProbMath(params)})`)
    }
  )

  /**
   * 12) Raccourcis de lois (formes directes) : B(n,p), Bin(n,p), N(mu, sigma^2), U(a,b), Pois(lambda), Exp(lambda), Geo(p), Bern(p)
   */
  // B(n,p) / Bin(n,p) - Limité à 200 caractères par paramètre
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:B|Bin)\s*\(\s*([^,;]{1,200}?)\s*[,;]\s*([^)]{1,200}?)\s*\)/gi,
    (m, n, p) => {
      if (containsNaturalLanguageWords(n) || containsNaturalLanguageWords(p)) return m
      return wrapInlineMath(`B(${normalizeProbMath(n)}, ${normalizeProbMath(p)})`)
    }
  )
  // Bern(p) - Limité à 200 caractères
  result = replaceOutsideMathBlocks(
    result,
    /\bBern\s*\(\s*([^)]{1,200}?)\s*\)/gi,
    (m, p) => (containsNaturalLanguageWords(p) ? m : wrapInlineMath(`\\mathrm{Bern}(${normalizeProbMath(p)})`))
  )
  // Geo(p) - Limité à 200 caractères
  result = replaceOutsideMathBlocks(
    result,
    /\bGeo\s*\(\s*([^)]{1,200}?)\s*\)/gi,
    (m, p) => (containsNaturalLanguageWords(p) ? m : wrapInlineMath(`\\mathrm{Geo}(${normalizeProbMath(p)})`))
  )
  // Pois(lambda) - Limité à 200 caractères
  result = replaceOutsideMathBlocks(
    result,
    /\bPois\s*\(\s*([^)]{1,200}?)\s*\)/gi,
    (m, l) => (containsNaturalLanguageWords(l) ? m : wrapInlineMath(`\\mathrm{Pois}(${normalizeProbMath(l)})`))
  )
  // Exp(lambda) - Limité à 200 caractères
  result = replaceOutsideMathBlocks(
    result,
    /\bExp\s*\(\s*([^)]{1,200}?)\s*\)/gi,
    (m, l) => (containsNaturalLanguageWords(l) ? m : wrapInlineMath(`\\mathrm{Exp}(${normalizeProbMath(l)})`))
  )
  // N(mu, sigma^2) - Limité à 200 caractères par paramètre
  result = replaceOutsideMathBlocks(
    result,
    /\bN\s*\(\s*([^,]{1,200}?)\s*,\s*([^)]{1,200}?)\s*\)/g,
    (m, mu, sig2) => {
      if (containsNaturalLanguageWords(mu) || containsNaturalLanguageWords(sig2)) return m
      return wrapInlineMath(`\\mathcal{N}(${normalizeProbMath(mu)}, ${normalizeProbMath(sig2)})`)
    }
  )
  // U(a,b) - Limité à 200 caractères par paramètre
  result = replaceOutsideMathBlocks(
    result,
    /\bU\s*\(\s*([^,]{1,200}?)\s*,\s*([^)]{1,200}?)\s*\)/g,
    (m, a, b) => {
      if (containsNaturalLanguageWords(a) || containsNaturalLanguageWords(b)) return m
      return wrapInlineMath(`\\mathcal{U}(${normalizeProbMath(a)}, ${normalizeProbMath(b)})`)
    }
  )
  // Hypergeo(N,K,n) - Limité à 200 caractères par paramètre
  result = replaceOutsideMathBlocks(
    result,
    /\bHypergeo\s*\(\s*([^,]{1,200}?)\s*,\s*([^,]{1,200}?)\s*,\s*([^)]{1,200}?)\s*\)/gi,
    (m, N, K, n) => {
      if (containsNaturalLanguageWords(N) || containsNaturalLanguageWords(K) || containsNaturalLanguageWords(n)) return m
      return wrapInlineMath(`\\mathrm{Hypergeo}(${normalizeProbMath(N)}, ${normalizeProbMath(K)}, ${normalizeProbMath(n)})`)
    }
  )

  /**
   * 13) "X ∈ I" et intervalles (souvent écrits en proba)
   *     transforme les symboles ∈, ≤, ≥ via normalizeProbMath si déjà dans P(...)
   *     ici on wrap les expressions isolées hors P(...) quand elles apparaissent seules.
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Za-z][A-Za-z0-9_]*)\s*(?:∈|in)\s*([\[\(]\s*[^)\]]+\s*[\]\)])\b/g,
    (m, X, I) => wrapInlineMath(`${X} \\in ${normalizeProbMath(I)}`)
  )

  // Vérification finale: s'assurer qu'aucun placeholder n'a été transformé
  if (hasPlaceholders) {
    const remainingPlaceholders = result.match(PROTECTION_PATTERN);
    if (!remainingPlaceholders || remainingPlaceholders.length === 0) {
      console.warn('⚠️ French word placeholders were lost during probability formatting');
    }
  }

  return result
}
