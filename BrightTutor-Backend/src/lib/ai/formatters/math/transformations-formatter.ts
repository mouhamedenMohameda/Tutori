/**
 * TRANSFORMATIONS GÉOMÉTRIQUES FORMATTER (version enrichie)
 *
 * Objectif: couvrir la majorité des notations “réelles” (lycée/Bac):
 * - Rotations: r(O, θ), r(A, π/2), r_{O,θ}, R_{O,θ}
 * - Translations: t(u⃗), t(AB⃗), t(AB->), t(vec(AB)), t_{\vec{u}}, T_{AB->}
 * - Homothéties: h(O, k), h_{O,k}, H_{O,k}
 * - Symétries: s(O), s(d), s_d, s_{(d)}, S_{Δ}
 * - Composées: r ∘ t ∘ s, r o t, r circ t
 * - Images: M' = r(M), r(M)=M', M' = r(O,θ)(M)
 * - Texte: “rotation de centre O et d’angle …”, etc.
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

  // symboles grecs fréquents en géométrie
  s = s.replace(/π/g, "\\pi")
  s = s.replace(/θ/g, "\\theta")

  // flèches (utile pour ->)
  s = s.replace(/->|⟶|→/g, "\\to")

  // opérateurs divers
  s = s.replace(/×/g, "\\times")
  s = s.replace(/Σ|∑/g, "\\sum")

  // espacement
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
  const noLatexCommands = candidate.replace(/\\[A-Za-z]+/g, "")
  // Mots français communs contenant des lettres qui pourraient être interprétées comme des transformations
  const frenchWords = ['numérotées', 'numérotée', 'numéroté', 'numéroter', 'rotation', 'rotations', 'numéro', 'numéros'];
  const lowerCandidate = noLatexCommands.toLowerCase();
  if (frenchWords.some(word => lowerCandidate.includes(word))) {
    return true;
  }
  return /[a-zA-ZÀ-ÿ]{3,}/.test(noLatexCommands)
}

// -------------------- AJOUTS (helpers géométrie) --------------------

function normalizeAngle(input: string): string {
  let s = input.trim()

  // variantes texte/ASCII fréquentes
  s = s.replace(/pi/gi, "\\pi")
  s = s.replace(/π/g, "\\pi")
  s = s.replace(/θ/g, "\\theta")

  s = s.replace(/alpha/gi, "\\alpha")
  s = s.replace(/beta/gi, "\\beta")
  s = s.replace(/gamma/gi, "\\gamma")
  s = s.replace(/omega/gi, "\\omega")

  // degrés: 30° -> 30^\circ
  s = s.replace(/([0-9]+)\s*°/g, "$1^\\circ")

  // fractions de pi: -3pi/2, 2pi/3, pi/4
  s = s.replace(/([+-]?\s*[0-9]*)\s*\\pi\s*\/\s*([0-9]+)/g, (_m, a, b) => {
    const coeff = String(a).replace(/\s+/g, "")
    if (!coeff || coeff === "+") return `\\frac{\\pi}{${b}}`
    if (coeff === "-") return `-\\frac{\\pi}{${b}}`
    return `\\frac{${coeff}\\pi}{${b}}`
  })

  // 2\pi (sans /)
  s = s.replace(/([0-9]+)\s*\\pi/g, "$1\\pi")

  return normalizeMathContent(s)
}

function latexVector(raw: string): string {
  const t = raw.trim()

  // unicode combining arrow above (⃗)
  if (/\u20D7/.test(t)) {
    const base = t.replace(/\u20D7/g, "").trim()
    if (/^[A-Z]{2}$/.test(base)) return `\\overrightarrow{${base}}`
    if (/^[a-z]$/.test(base)) return `\\vec{${base}}`
    return `\\vec{${base}}`
  }

  // ASCII AB-> ou ->AB
  const m1 = t.match(/^([A-Z]{2})->$/)
  if (m1) return `\\overrightarrow{${m1[1]}}`
  const m2 = t.match(/^->([A-Z]{2})$/)
  if (m2) return `\\overrightarrow{${m2[1]}}`

  // vec(AB) ou vec(u)
  const m3 = t.match(/^vec\(\s*([A-Z]{2}|[a-z])\s*\)$/i)
  if (m3) {
    const base = m3[1]
    return /^[A-Z]{2}$/.test(base) ? `\\overrightarrow{${base}}` : `\\vec{${base}}`
  }

  // “AB” ou “u”
  if (/^[A-Z]{2}$/.test(t)) return `\\overrightarrow{${t}}`
  if (/^[a-z]$/.test(t)) return `\\vec{${t}}`

  return `\\vec{${t}}`
}

function normalizePrimes(p: string): string {
  const count = (p.match(/['′]/g) || []).length
  if (count <= 1) return "'"
  if (count === 2) return "''"
  // triple+ : rare ; fallback lisible
  return `^{(${count})}`
}

function wrapPointWithPrimes(point: string, primes: string): string {
  const P = point.trim()
  const pr = normalizePrimes(primes)
  return `${P}${pr}`
}

// -------------------- FORMATTER PRINCIPAL --------------------

export function formatTransformations(text: string): string {
  if (!text || typeof text !== "string") return text
  
  // Protection: remplacer temporairement les mots français contenant "rot" pour éviter les transformations incorrectes
  // Utiliser un préfixe unique qui ne sera jamais interprété comme du LaTeX ou des mathématiques
  const PROTECTION_PREFIX = 'ZZZFRENCHWORD';
  const PROTECTION_SUFFIX = 'ZZZ';
  const frenchWordsWithRot = ['numérotées', 'numérotée', 'numéroté', 'numéroter', 'numéro', 'numéros'];
  const placeholders: Map<string, string> = new Map();
  let protectedText = text;
  let placeholderCounter = 0;
  
  frenchWordsWithRot.forEach((word) => {
    const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    protectedText = protectedText.replace(regex, (match) => {
      // Utiliser un placeholder unique qui ne sera jamais interprété comme du LaTeX
      const placeholder = `${PROTECTION_PREFIX}${placeholderCounter}${PROTECTION_SUFFIX}`;
      placeholders.set(placeholder, match);
      placeholderCounter++;
      return placeholder;
    });
  });
  
  let result = protectedText


    /**
   * FIX SEGMENTS / DROITES :
   * [A × D] -> [AD]
   * (B × D) -> (BD)
   * Supporte aussi: x, *, unicode ×
   */
    result = replaceOutsideMathBlocks(
      result,
      /\[\s*([A-Z])\s*(?:×|x|\*)\s*([A-Z])\s*\]/g,
      (_m, A, B) => `[${A}${B}]`
    )
  
    result = replaceOutsideMathBlocks(
      result,
      /\(\s*([A-Z])\s*(?:×|x|\*)\s*([A-Z])\s*\)/g,
      (_m, A, B) => `(${A}${B})`
    )
  
  /**
   * A) Normaliser les compositions ASCII: "r o t", "r circ t" -> "r ∘ t"
   * (on ne remplace PAS le mot "o" partout ; uniquement entre deux lettres de transformations)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([rRtThHsS]|[RHTS])\s*(?:o|circ)\s*([rRtThHsS]|[RHTS])\b/g,
    (_m, f1, f2) => `${f1} ∘ ${f2}`
  )

  /**
   * B) IMAGES (formes complètes, en gardant les paramètres)
   * 1) f(params)?(M) = M'
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([rRtThHsS]|[RHTS])\s*(\([^)]+\))?\s*\(\s*([A-Z])\s*\)\s*=\s*([A-Z])(['′]+)\b/g,
    (_m, f, params, M, P, primes) => {
      const pp = wrapPointWithPrimes(P, primes)
      const par = params ? normalizeMathContent(params) : ""
      return wrapInlineMath(`${f}${par}(${M}) = ${pp}`)
    }
  )

  /**
   * 2) M' = f(params)?(M)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z])(['′]+)\s*=\s*([rRtThHsS]|[RHTS])\s*(\([^)]+\))?\s*\(\s*([A-Z])\s*\)\b/g,
    (_m, P, primes, f, params, M) => {
      const pp = wrapPointWithPrimes(P, primes)
      const par = params ? normalizeMathContent(params) : ""
      return wrapInlineMath(`${pp} = ${f}${par}(${M})`)
    }
  )

  /**
   * C) NOTATIONS INDEXÉES
   * r_{O,θ}, h_{O,k}, s_d, s_{(d)}, t_{AB->}, etc.
   */
  // r_{O,θ} / R_{O,θ}
  result = replaceOutsideMathBlocks(
    result,
    /\b([rR])\s*_\s*\{\s*([A-Z])\s*,\s*([^}]+)\s*\}\b/g,
    (_m, f, O, ang) => wrapInlineMath(`${f}_{${O}, ${normalizeAngle(ang)}}`)
  )

  // h_{O,k} / H_{O,k}
  result = replaceOutsideMathBlocks(
    result,
    /\b([hH])\s*_\s*\{\s*([A-Z])\s*,\s*([^}]+)\s*\}\b/g,
    (_m, f, O, k) => {
      if (containsNaturalLanguageWords(k)) return _m
      return wrapInlineMath(`${f}_{${O}, ${normalizeMathContent(k)}}`)
    }
  )

  // s_d / s_{(d)} / S_{Δ}
  result = replaceOutsideMathBlocks(
    result,
    /\b([sS])\s*_\s*\{?\s*(\([^)]+\)|[A-Za-zΔ])\s*\}?\b/g,
    (_m, f, axis) => wrapInlineMath(`${f}_{${normalizeMathContent(axis)}}`)
  )

  // t_{...} / T_{...}
  result = replaceOutsideMathBlocks(
    result,
    /\b([tT])\s*_\s*\{?\s*([^}\s]+)\s*\}?\b/g,
    (_m, f, v) => wrapInlineMath(`${f}_{${latexVector(v)}}`)
  )

  /**
   * D) FORMES FONCTIONNELLES
   * r(O,θ), h(O,k), s(d)/s(O), t(AB->)/t(u⃗)/t(vec(AB))
   */
  // rotation r(O, angle)
  result = replaceOutsideMathBlocks(
    result,
    /\b([rR])\s*\(\s*([A-Z])\s*,\s*([^)]+)\s*\)/g,
    (m, f, O, ang) => {
      if (containsNaturalLanguageWords(ang)) return m
      return wrapInlineMath(`${f}(${O}, ${normalizeAngle(ang)})`)
    }
  )

  // homothétie h(O, k)
  result = replaceOutsideMathBlocks(
    result,
    /\b([hH])\s*\(\s*([A-Z])\s*,\s*([^)]+)\s*\)/g,
    (m, f, O, k) => {
      if (containsNaturalLanguageWords(k)) return m
      return wrapInlineMath(`${f}(${O}, ${normalizeMathContent(k)})`)
    }
  )

  // translation t(vecteur)
  // (on filtre pour éviter t(vers la droite) etc.)
  result = replaceOutsideMathBlocks(
    result,
    /\b([tT])\s*\(\s*([^)]+)\s*\)/g,
    (m, f, vraw) => {
      const looksVector =
        /\u20D7/.test(vraw) || /->/.test(vraw) || /^vec\(/i.test(vraw.trim()) || /^[A-Z]{2}$/.test(vraw.trim()) || /^[a-z]$/.test(vraw.trim())
      if (!looksVector && containsNaturalLanguageWords(vraw)) return m
      return wrapInlineMath(`${f}(${latexVector(vraw)})`)
    }
  )

  // symétrie s(O) ou s(d) ou s((d)) etc.
  result = replaceOutsideMathBlocks(
    result,
    /\b([sS])\s*\(\s*(\([^)]+\)|[A-Za-zΔ]|[A-Z])\s*\)/g,
    (_m, f, obj) => wrapInlineMath(`${f}(${normalizeMathContent(obj)})`)
  )

  /**
   * E) COMPOSITIONS (chaînes)
   * r ∘ t ∘ s -> r \circ t \circ s
   * IMPORTANT: Ne matcher que des lettres isolées séparées par ∘, pas des mots français
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([rRtThHsS])\s*∘\s*([rRtThHsS])(?:\s*∘\s*([rRtThHsS]))*\b/g,
    (m, first, second, rest) => {
      // Vérifier que ce n'est pas dans un mot français (ex: "numérotées" contient "rot")
      // Chercher le contexte autour du match dans le texte original
      const matchPos = result.lastIndexOf(m);
      if (matchPos === -1) return m;
      
      // Extraire un contexte plus large pour détecter les mots français
      const contextStart = Math.max(0, matchPos - 10);
      const contextEnd = Math.min(result.length, matchPos + m.length + 10);
      const context = result.substring(contextStart, contextEnd);
      
      // Mots français contenant "rot" ou autres combinaisons de lettres
      const frenchWordsWithRot = ['numérotées', 'numérotée', 'numéroté', 'numéroter', 'rotation', 'rotations'];
      const isInFrenchWord = frenchWordsWithRot.some(word => context.toLowerCase().includes(word.toLowerCase()));
      
      // Vérifier aussi si les lettres sont entourées de lettres (pas d'espaces avant/après)
      const before = result.substring(Math.max(0, matchPos - 1), matchPos);
      const after = result.substring(matchPos + m.length, Math.min(result.length, matchPos + m.length + 1));
      
      // Si c'est dans un mot français ou entouré de lettres, ne pas transformer
      if (isInFrenchWord || (/[a-zA-ZÀ-ÿ]/.test(before) && /[a-zA-ZÀ-ÿ]/.test(after))) {
        return m; // Ne pas transformer, c'est un mot français
      }
      
      return wrapInlineMath(normalizeMathContent(m.replace(/∘/g, "\\circ")));
    }
  )

  /**
   * F) Angles isolés (pi/2, -3pi/4, 60°)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\b([+-]?\s*[0-9]*)\s*(?:π|pi)\s*\/\s*([0-9]+)\b/g,
    (_m, a, b) => wrapInlineMath(normalizeAngle(`${a}π/${b}`))
  )
  result = replaceOutsideMathBlocks(
    result,
    /\b([0-9]+)\s*°\b/g,
    (m) => wrapInlineMath(normalizeAngle(m))
  )

  /**
   * G) Phrases françaises (formes courantes)
   */
  result = replaceOutsideMathBlocks(
    result,
    /\brotation\s+de\s+centre\s+([A-Z])\s+et\s+d['’]angle\s+([^.,;\n]+)/gi,
    (m, O, ang) => {
      if (containsNaturalLanguageWords(ang)) return m
      return wrapInlineMath(`r(${O}, ${normalizeAngle(ang)})`)
    }
  )

  result = replaceOutsideMathBlocks(
    result,
    /\btranslation\s+de\s+vecteur\s+([^.,;\n]+)/gi,
    (_m, v) => wrapInlineMath(`t(${latexVector(v)})`)
  )

  result = replaceOutsideMathBlocks(
    result,
    /\bhomoth[ée]tie\s+de\s+centre\s+([A-Z])\s+et\s+de\s+rapport\s+([^.,;\n]+)/gi,
    (m, O, k) => {
      if (containsNaturalLanguageWords(k)) return m
      return wrapInlineMath(`h(${O}, ${normalizeMathContent(k)})`)
    }
  )

  result = replaceOutsideMathBlocks(
    result,
    /\bsym[ée]trie\s+(?:d['’]axe\s+)?(\([^)]+\)|[A-Za-zΔ]|[A-Z])\b/gi,
    (_m, obj) => wrapInlineMath(`s(${normalizeMathContent(obj)})`)
  )

  // Restaurer les mots français protégés (dans l'ordre inverse pour éviter les conflits)
  // Restaurer d'abord les placeholders les plus longs pour éviter les conflits
  const sortedPlaceholders = Array.from(placeholders.entries()).sort((a, b) => b[0].length - a[0].length);
  sortedPlaceholders.forEach(([placeholder, original]) => {
    // Utiliser un remplacement global avec échappement
    const escapedPlaceholder = placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(escapedPlaceholder, 'g'), original);
  });
  
  // Vérification finale: s'assurer qu'aucun placeholder n'a été oublié
  const remainingPlaceholders = result.match(new RegExp(`${PROTECTION_PREFIX}\\d+${PROTECTION_SUFFIX}`, 'g'));
  if (remainingPlaceholders && remainingPlaceholders.length > 0) {
    console.warn('⚠️ Some French word placeholders were not restored:', remainingPlaceholders);
    // Restaurer les placeholders restants avec les valeurs originales si possible
    remainingPlaceholders.forEach(placeholder => {
      if (placeholders.has(placeholder)) {
        result = result.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), placeholders.get(placeholder)!);
      }
    });
  }

  return result
}
