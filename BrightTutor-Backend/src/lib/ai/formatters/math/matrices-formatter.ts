/**
 * MATRICES FORMATTER
 * Formatage des notations de matrices : [[a,b],[c,d]], det(A), A⁻¹, A × B
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
 * Formate les notations de matrices
 */
export function formatMatrices(text: string): string {
  if (!text || typeof text !== "string") return text

  let result = text

  // Matrice avec double crochets : [[a,b],[c,d]]
  result = replaceOutsideMathBlocks(
    result,
    /\[\[([^\]]+)\](?:,\s*\[([^\]]+)\])+\]/g,
    (match, ...rows) => {
      const matrixRows = rows.filter(r => r).map(row => row.split(',').map(c => c.trim()).join(' & '))
      return `$\\begin{pmatrix} ${matrixRows.join(' \\\\ ')} \\end{pmatrix}$`
    }
  )

  // Matrice simple : [a,b;c,d] ou [a b;c d]
  result = replaceOutsideMathBlocks(
    result,
    /\[([^\]]+)\]/g,
    (match, content) => {
      // Vérifier si c'est une matrice (contient ; ou plusieurs nombres)
      if (content.includes(';') || /[\d\s,]+/.test(content)) {
        const rows = content.split(';').map(row => row.split(/[,\s]+/).filter(c => c).join(' & '))
        if (rows.length > 1) {
          return `$\\begin{pmatrix} ${rows.join(' \\\\ ')} \\end{pmatrix}$`
        }
      }
      return match // Ne pas modifier si ce n'est pas une matrice
    }
  )

  // Déterminant : det(A), |A|, det A
  result = replaceOutsideMathBlocks(
    result,
    /\bdet\s*[\(\[]\s*([A-Za-z0-9_]+)\s*[\)\]]|\|\s*([A-Za-z0-9_]+)\s*\|/g,
    (match, A1, A2) => {
      const A = A1 || A2
      return `$\\det(${A})$`
    }
  )

  // Matrice inverse : A⁻¹, A^{-1}, A^(-1), inv(A)
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Za-z0-9_]+)\s*[⁻⁻]\s*¹|([A-Za-z0-9_]+)\s*\{?\s*-\s*1\s*\}?|([A-Za-z0-9_]+)\s*\(\s*-\s*1\s*\)|inv\s*\(\s*([A-Za-z0-9_]+)\s*\)/gi,
    (match, A1, A2, A3, A4) => {
      const A = A1 || A2 || A3 || A4
      return `$${A}^{-1}$`
    }
  )

  // Multiplication de matrices : A × B, A * B, A.B
  // ⚠️ IMPORTANT: Ne pas matcher deux lettres consécutives (comme "ES", "TU", "LE") qui sont des mots français
  // Ne matcher que les multiplications explicites avec ×, *, ou .
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Za-z0-9_]+)\s*[×*·]\s*([A-Za-z0-9_]+)|\b([A-Za-z0-9_]+)\s*\.\s*([A-Za-z0-9_]+)/g,
    (match, A1, B1, A2, B2) => {
      const A = A1 || A2
      const B = B1 || B2
      // Vérifier que ce sont des variables mathématiques (pas des mots français)
      // Variables mathématiques typiques : A, B, C, M, N, P, Q, etc. (1-2 lettres)
      if (A && B && A.length <= 2 && B.length <= 2) {
        // Vérifier que ce ne sont pas des mots français communs
        const frenchWords = ['ES', 'TU', 'LE', 'LA', 'DE', 'DU', 'AU', 'OU', 'ET', 'UN', 'EN', 'ON', 'CE', 'SE', 'NE', 'JE', 'ME', 'TE', 'NO', 'SO', 'SI', 'IL', 'EL', 'AL', 'OL', 'UL', 'AN', 'IN', 'IS', 'AS', 'OS', 'US', 'ER', 'IR', 'OR', 'UR', 'AR', 'RE', 'RA', 'RO', 'RI', 'RU', 'SA', 'SU', 'TO', 'TA', 'TI', 'TU', 'VE', 'VA', 'VI', 'VO', 'VU']
        const combined = (A + B).toUpperCase()
        if (frenchWords.includes(combined)) {
          return match // Ne pas modifier les mots français
        }
        // Vérifier aussi si c'est un mot français complet (plus de 2 lettres consécutives)
        // Si le contexte suggère que c'est du texte français, ne pas modifier
        const matchIndex = result.indexOf(match)
        if (matchIndex !== -1) {
          const contextBefore = result.substring(Math.max(0, matchIndex - 20), matchIndex)
          const contextAfter = result.substring(matchIndex + match.length, Math.min(result.length, matchIndex + match.length + 20))
          const isFrenchContext = /\b(partie|question|exercice|calculer|montrer|déterminer|résoudre|placer|exprimer|dresser|étudier|déduire|prêt|prête|comprends|comprend|demande|demandes|souviens|souviens-tu|dis-moi|dis|me|te|nous|vous|tu|es|est|sont|être|avoir|faire|définie|définir|événement|l'événement|le|la|les|de|du|des|en|sur|par|pour|avec|sans|dans|dont|que|qui|quoi|où|quand|comment|pourquoi|combien|quel|quelle|quels|quelles|ce|cette|ces|se|ils|elles|elle|on|un|une|et|ou|mais|donc|car|si|alors|or|ni|soit|soient)\b/i.test(contextBefore + contextAfter)
          // Vérifier aussi si B commence par une majuscule suivie d'une minuscule (mot français)
          const isFrenchWord = /^[A-Z][a-z]/.test(B) && B.length > 1
          if (isFrenchContext || isFrenchWord) {
            return match // Ne pas modifier dans un contexte français
          }
        }
        return `$${A} \\times ${B}$`
      }
      return match
    }
  )

  // Transposée : A^T, A^t, A', transpose(A)
  // ⚠️ IMPORTANT: Ne matcher A' que si A est une variable mathématique (1-2 lettres majuscules)
  // pour éviter de matcher les apostrophes françaises (d', l', etc.)
  result = replaceOutsideMathBlocks(
    result,
    /\b([A-Z][A-Z]?)\s*\^[Tt]|\b([A-Z][A-Z]?)\s*'(?![a-zéèêëàâäôöùûüç])|transpose\s*\(\s*([A-Za-z0-9_]+)\s*\)/g,
    (match, A1, A2, A3) => {
      const A = A1 || A2 || A3
      // Vérifier que c'est bien une variable mathématique (pas un mot français)
      if (A && /^[A-Z][A-Z]?$/.test(A)) {
      return `$${A}^{T}$`
      }
      return match // Ne pas modifier si ce n'est pas une variable mathématique
    }
  )

  // Trace : tr(A), trace(A)
  result = replaceOutsideMathBlocks(
    result,
    /\b(?:tr|trace)\s*\(\s*([A-Za-z0-9_]+)\s*\)/gi,
    (match, A) => {
      return `$\\text{tr}(${A})$`
    }
  )

  return result
}
