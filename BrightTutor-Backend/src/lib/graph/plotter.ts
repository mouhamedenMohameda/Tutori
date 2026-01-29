/**
 * Service de tracé de courbes mathématiques
 * Génère des images de courbes pour les fonctions mathématiques
 */

import { createCanvas, CanvasRenderingContext2D } from 'canvas'
import { evaluate } from 'mathjs'

// Configuration par défaut pour le tracé
const DEFAULT_CONFIG = {
  width: 800,
  height: 600,
  padding: 60,
  backgroundColor: '#ffffff',
  gridColor: '#e5e7eb',
  axisColor: '#374151',
  curveColor: '#3b82f6',
  textColor: '#111827',
  fontSize: 14,
  gridStep: 1,
  lineWidth: 2,
}

export interface PlotConfig {
  width?: number
  height?: number
  xMin?: number
  xMax?: number
  yMin?: number
  yMax?: number
  padding?: number
  backgroundColor?: string
  gridColor?: string
  axisColor?: string
  curveColor?: string
  textColor?: string
  fontSize?: number
  gridStep?: number
  lineWidth?: number
  showGrid?: boolean
  showAxes?: boolean
  title?: string
  xLabel?: string
  yLabel?: string
}

export interface PlotResult {
  imageBuffer: Buffer
  base64: string
  dataUrl: string
}

/**
 * Évalue une fonction mathématique pour une valeur de x donnée
 * L'expression doit déjà être normalisée
 */
function evaluateFunction(normalizedExpression: string, x: number): number | null {
  try {
    // Créer un contexte mathjs avec la variable x
    const scope = { x }
    
    // Évaluer l'expression normalisée
    const result = evaluate(normalizedExpression, scope)
    
    if (typeof result === 'number' && isFinite(result) && !isNaN(result)) {
      return result
    }
    
    return null
  } catch (error) {
    // Ignorer les erreurs d'évaluation (fonction non définie à ce point)
    return null
  }
}

/**
 * Convertit une expression mathématique en format compatible avec mathjs
 */
function normalizeExpression(expression: string): string {
  // Nettoyer l'expression
  let normalized = expression.trim()
  
  // Remplacer les multiplications implicites (ex: 2x -> 2*x)
  normalized = normalized.replace(/(\d+)([a-zA-Z])/g, '$1*$2')
  normalized = normalized.replace(/([a-zA-Z])(\d+)/g, '$1*$2')
  normalized = normalized.replace(/(\))(\()/g, '$1*$2')
  normalized = normalized.replace(/(\))([a-zA-Z])/g, '$1*$2')
  normalized = normalized.replace(/(\d+)(\()/g, '$1*$2')
  
  // Remplacer les fonctions mathématiques
  normalized = normalized.replace(/\bsin\b/gi, 'sin')
  normalized = normalized.replace(/\bcos\b/gi, 'cos')
  normalized = normalized.replace(/\btan\b/gi, 'tan')
  normalized = normalized.replace(/\bln\b/gi, 'log')
  normalized = normalized.replace(/\blog10\b/gi, 'log10')
  normalized = normalized.replace(/\blog\b/gi, 'log10')
  normalized = normalized.replace(/\bexp\b/gi, 'exp')
  normalized = normalized.replace(/\bsqrt\b/gi, 'sqrt')
  normalized = normalized.replace(/\babs\b/gi, 'abs')
  
  // Remplacer les puissances (x^2 -> x^2, mais s'assurer que c'est bien formaté)
  // mathjs supporte déjà ^ pour les puissances
  
  return normalized
}

/**
 * Trace une courbe mathématique et retourne l'image
 */
export async function plotFunction(
  expression: string,
  config: PlotConfig = {}
): Promise<PlotResult> {
  // Fusionner la configuration avec les valeurs par défaut
  const finalConfig = {
    ...DEFAULT_CONFIG,
    ...config,
  }

  // Normaliser l'expression
  const normalizedExpression = normalizeExpression(expression)

  // Déterminer les bornes si non spécifiées
  let xMin = config.xMin ?? -10
  let xMax = config.xMax ?? 10
  let yMin = config.yMin
  let yMax = config.yMax

  // Si les bornes Y ne sont pas spécifiées, les calculer automatiquement
  if (yMin === undefined || yMax === undefined) {
    const samplePoints = 100
    const tempYValues: number[] = []
    
    for (let i = 0; i <= samplePoints; i++) {
      const x = xMin + (i / samplePoints) * (xMax - xMin)
      const y = evaluateFunction(normalizedExpression, x)
      if (y !== null) {
        tempYValues.push(y)
      }
    }
    
    if (tempYValues.length > 0) {
      const minY = Math.min(...tempYValues)
      const maxY = Math.max(...tempYValues)
      const padding = (maxY - minY) * 0.1 // 10% de padding
      
      yMin = yMin ?? minY - padding
      yMax = yMax ?? maxY + padding
    } else {
      yMin = yMin ?? -10
      yMax = yMax ?? 10
    }
  }

  // Créer le canvas
  const canvas = createCanvas(finalConfig.width, finalConfig.height)
  const ctx = canvas.getContext('2d')

  // Remplir le fond
  ctx.fillStyle = finalConfig.backgroundColor
  ctx.fillRect(0, 0, finalConfig.width, finalConfig.height)

  // Calculer les dimensions de la zone de tracé
  const plotWidth = finalConfig.width - 2 * finalConfig.padding
  const plotHeight = finalConfig.height - 2 * finalConfig.padding
  const plotX = finalConfig.padding
  const plotY = finalConfig.padding

  // Fonction pour convertir les coordonnées mathématiques en coordonnées canvas
  const toCanvasX = (x: number) => plotX + ((x - xMin) / (xMax - xMin)) * plotWidth
  const toCanvasY = (y: number) => plotY + plotHeight - ((y - yMin) / (yMax - yMin)) * plotHeight

  // Dessiner la grille si demandée
  if (config.showGrid !== false) {
    ctx.strokeStyle = finalConfig.gridColor
    ctx.lineWidth = 1

    // Lignes verticales
    const xStep = (xMax - xMin) / 10
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
      const canvasX = toCanvasX(x)
      ctx.beginPath()
      ctx.moveTo(canvasX, plotY)
      ctx.lineTo(canvasX, plotY + plotHeight)
      ctx.stroke()
    }

    // Lignes horizontales
    const yStep = (yMax - yMin) / 10
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
      const canvasY = toCanvasY(y)
      ctx.beginPath()
      ctx.moveTo(plotX, canvasY)
      ctx.lineTo(plotX + plotWidth, canvasY)
      ctx.stroke()
    }
  }

  // Dessiner les axes si demandés
  if (config.showAxes !== false) {
    ctx.strokeStyle = finalConfig.axisColor
    ctx.lineWidth = 2

    // Axe X
    const zeroY = toCanvasY(0)
    if (zeroY >= plotY && zeroY <= plotY + plotHeight) {
      ctx.beginPath()
      ctx.moveTo(plotX, zeroY)
      ctx.lineTo(plotX + plotWidth, zeroY)
      ctx.stroke()
    }

    // Axe Y
    const zeroX = toCanvasX(0)
    if (zeroX >= plotX && zeroX <= plotX + plotWidth) {
      ctx.beginPath()
      ctx.moveTo(zeroX, plotY)
      ctx.lineTo(zeroX, plotY + plotHeight)
      ctx.stroke()
    }
  }

  // Tracer la courbe
  ctx.strokeStyle = finalConfig.curveColor
  ctx.lineWidth = finalConfig.lineWidth
  ctx.beginPath()

  const numPoints = finalConfig.width * 2 // Plus de points pour une courbe plus lisse
  let firstPoint = true

  for (let i = 0; i <= numPoints; i++) {
    const x = xMin + (i / numPoints) * (xMax - xMin)
    const y = evaluateFunction(normalizedExpression, x)

    if (y !== null && isFinite(y)) {
      const canvasX = toCanvasX(x)
      const canvasY = toCanvasY(y)

      // Vérifier si le point est dans les limites du graphique
      if (canvasY >= plotY && canvasY <= plotY + plotHeight) {
        if (firstPoint) {
          ctx.moveTo(canvasX, canvasY)
          firstPoint = false
        } else {
          ctx.lineTo(canvasX, canvasY)
        }
      } else {
        // Si le point est hors limites, commencer un nouveau segment
        firstPoint = true
      }
    } else {
      firstPoint = true
    }
  }

  ctx.stroke()

  // Ajouter les labels des axes
  ctx.fillStyle = finalConfig.textColor
  ctx.font = `${finalConfig.fontSize}px Arial`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'

  if (config.xLabel) {
    ctx.fillText(
      config.xLabel,
      finalConfig.width / 2,
      finalConfig.height - finalConfig.padding / 2
    )
  }

  ctx.save()
  ctx.translate(finalConfig.padding / 2, finalConfig.height / 2)
  ctx.rotate(-Math.PI / 2)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  if (config.yLabel) {
    ctx.fillText(config.yLabel, 0, 0)
  }
  ctx.restore()

  // Ajouter le titre si fourni
  if (config.title) {
    ctx.fillStyle = finalConfig.textColor
    ctx.font = `bold ${finalConfig.fontSize + 4}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillText(config.title, finalConfig.width / 2, finalConfig.padding / 4)
  }

  // Ajouter les valeurs sur les axes
  ctx.fillStyle = finalConfig.textColor
  ctx.font = `${finalConfig.fontSize - 2}px Arial`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // Labels sur l'axe X
  const xStep = (xMax - xMin) / 10
  for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
    const canvasX = toCanvasX(x)
    if (Math.abs(x) > 0.01) {
      // Ne pas afficher 0 deux fois
      ctx.fillText(x.toFixed(1), canvasX, plotY + plotHeight + 15)
    }
  }

  // Labels sur l'axe Y
  const yStep = (yMax - yMin) / 10
  for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
    const canvasY = toCanvasY(y)
    if (Math.abs(y) > 0.01) {
      // Ne pas afficher 0 deux fois
      ctx.textAlign = 'right'
      ctx.fillText(y.toFixed(1), plotX - 10, canvasY)
    }
  }

  // Convertir en buffer et base64
  const buffer = canvas.toBuffer('image/png')
  const base64 = buffer.toString('base64')
  const dataUrl = `data:image/png;base64,${base64}`

  return {
    imageBuffer: buffer,
    base64,
    dataUrl,
  }
}

/**
 * Trace plusieurs courbes sur le même graphique
 */
export async function plotMultipleFunctions(
  expressions: Array<{ expression: string; color?: string; label?: string }>,
  config: PlotConfig = {}
): Promise<PlotResult> {
  if (expressions.length === 0) {
    throw new Error('Au moins une expression est requise')
  }

  // Si une seule expression, utiliser plotFunction
  if (expressions.length === 1) {
    const firstExpression = expressions[0]
    const plotConfig = {
      ...config,
      curveColor: firstExpression.color || config.curveColor,
      title: config.title || firstExpression.label || `f(x) = ${firstExpression.expression}`,
    }
    return plotFunction(firstExpression.expression, plotConfig)
  }

  // Fusionner la configuration avec les valeurs par défaut
  const finalConfig = {
    ...DEFAULT_CONFIG,
    ...config,
  }

  // Normaliser toutes les expressions
  const normalizedExpressions = expressions.map(expr => ({
    ...expr,
    normalizedExpression: normalizeExpression(expr.expression),
  }))

  // Déterminer les bornes si non spécifiées
  let xMin = config.xMin ?? -10
  let xMax = config.xMax ?? 10
  let yMin = config.yMin
  let yMax = config.yMax

  // Si les bornes Y ne sont pas spécifiées, les calculer automatiquement pour toutes les fonctions
  if (yMin === undefined || yMax === undefined) {
    const samplePoints = 100
    const allYValues: number[] = []
    
    for (const expr of normalizedExpressions) {
      for (let i = 0; i <= samplePoints; i++) {
        const x = xMin + (i / samplePoints) * (xMax - xMin)
        const y = evaluateFunction(expr.normalizedExpression, x)
        if (y !== null) {
          allYValues.push(y)
        }
      }
    }
    
    if (allYValues.length > 0) {
      const minY = Math.min(...allYValues)
      const maxY = Math.max(...allYValues)
      const padding = (maxY - minY) * 0.1 // 10% de padding
      
      yMin = yMin ?? minY - padding
      yMax = yMax ?? maxY + padding
    } else {
      yMin = yMin ?? -10
      yMax = yMax ?? 10
    }
  }

  // Créer le canvas
  const canvas = createCanvas(finalConfig.width, finalConfig.height)
  const ctx = canvas.getContext('2d')

  // Remplir le fond
  ctx.fillStyle = finalConfig.backgroundColor
  ctx.fillRect(0, 0, finalConfig.width, finalConfig.height)

  // Calculer les dimensions de la zone de tracé
  const plotWidth = finalConfig.width - 2 * finalConfig.padding
  const plotHeight = finalConfig.height - 2 * finalConfig.padding
  const plotX = finalConfig.padding
  const plotY = finalConfig.padding

  // Fonction pour convertir les coordonnées mathématiques en coordonnées canvas
  const toCanvasX = (x: number) => plotX + ((x - xMin) / (xMax - xMin)) * plotWidth
  const toCanvasY = (y: number) => plotY + plotHeight - ((y - yMin) / (yMax - yMin)) * plotHeight

  // Dessiner la grille si demandée
  if (config.showGrid !== false) {
    ctx.strokeStyle = finalConfig.gridColor
    ctx.lineWidth = 1

    // Lignes verticales
    const xStep = (xMax - xMin) / 10
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
      const canvasX = toCanvasX(x)
      ctx.beginPath()
      ctx.moveTo(canvasX, plotY)
      ctx.lineTo(canvasX, plotY + plotHeight)
      ctx.stroke()
    }

    // Lignes horizontales
    const yStep = (yMax - yMin) / 10
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
      const canvasY = toCanvasY(y)
      ctx.beginPath()
      ctx.moveTo(plotX, canvasY)
      ctx.lineTo(plotX + plotWidth, canvasY)
      ctx.stroke()
    }
  }

  // Dessiner les axes si demandés
  if (config.showAxes !== false) {
    ctx.strokeStyle = finalConfig.axisColor
    ctx.lineWidth = 2

    // Axe X
    const zeroY = toCanvasY(0)
    if (zeroY >= plotY && zeroY <= plotY + plotHeight) {
      ctx.beginPath()
      ctx.moveTo(plotX, zeroY)
      ctx.lineTo(plotX + plotWidth, zeroY)
      ctx.stroke()
    }

    // Axe Y
    const zeroX = toCanvasX(0)
    if (zeroX >= plotX && zeroX <= plotX + plotWidth) {
      ctx.beginPath()
      ctx.moveTo(zeroX, plotY)
      ctx.lineTo(zeroX, plotY + plotHeight)
      ctx.stroke()
    }
  }

  // Tracer toutes les courbes
  normalizedExpressions.forEach((expr, index) => {
    const curveColor = expr.color || 
      ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'][index % 6]
    
    ctx.strokeStyle = curveColor
    ctx.lineWidth = finalConfig.lineWidth
    ctx.beginPath()

    const numPoints = finalConfig.width * 2
    let firstPoint = true

    for (let i = 0; i <= numPoints; i++) {
      const x = xMin + (i / numPoints) * (xMax - xMin)
      const y = evaluateFunction(expr.normalizedExpression, x)

      if (y !== null && isFinite(y)) {
        const canvasX = toCanvasX(x)
        const canvasY = toCanvasY(y)

        if (canvasY >= plotY && canvasY <= plotY + plotHeight) {
          if (firstPoint) {
            ctx.moveTo(canvasX, canvasY)
            firstPoint = false
          } else {
            ctx.lineTo(canvasX, canvasY)
          }
        } else {
          firstPoint = true
        }
      } else {
        firstPoint = true
      }
    }

    ctx.stroke()
  })

  // Ajouter les labels des axes
  ctx.fillStyle = finalConfig.textColor
  ctx.font = `${finalConfig.fontSize}px Arial`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'

  if (config.xLabel) {
    ctx.fillText(
      config.xLabel,
      finalConfig.width / 2,
      finalConfig.height - finalConfig.padding / 2
    )
  }

  ctx.save()
  ctx.translate(finalConfig.padding / 2, finalConfig.height / 2)
  ctx.rotate(-Math.PI / 2)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  if (config.yLabel) {
    ctx.fillText(config.yLabel, 0, 0)
  }
  ctx.restore()

  // Ajouter le titre si fourni
  if (config.title) {
    ctx.fillStyle = finalConfig.textColor
    ctx.font = `bold ${finalConfig.fontSize + 4}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillText(config.title, finalConfig.width / 2, finalConfig.padding / 4)
  }

  // Ajouter une légende si plusieurs fonctions
  if (normalizedExpressions.length > 1) {
    const legendX = finalConfig.width - finalConfig.padding - 150
    const legendY = finalConfig.padding + 20
    const legendItemHeight = 25

    normalizedExpressions.forEach((expr, index) => {
      const curveColor = expr.color || 
        ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'][index % 6]
      
      const y = legendY + index * legendItemHeight
      
      // Ligne de couleur
      ctx.strokeStyle = curveColor
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(legendX, y)
      ctx.lineTo(legendX + 30, y)
      ctx.stroke()
      
      // Label
      ctx.fillStyle = finalConfig.textColor
      ctx.font = `${finalConfig.fontSize - 2}px Arial`
      ctx.textAlign = 'left'
      ctx.fillText(
        expr.label || `f${index + 1}(x) = ${expr.expression}`,
        legendX + 35,
        y - 5
      )
    })
  }

  // Ajouter les valeurs sur les axes
  ctx.fillStyle = finalConfig.textColor
  ctx.font = `${finalConfig.fontSize - 2}px Arial`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // Labels sur l'axe X
  const xStep = (xMax - xMin) / 10
  for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
    const canvasX = toCanvasX(x)
    if (Math.abs(x) > 0.01) {
      ctx.fillText(x.toFixed(1), canvasX, plotY + plotHeight + 15)
    }
  }

  // Labels sur l'axe Y
  const yStep = (yMax - yMin) / 10
  for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
    const canvasY = toCanvasY(y)
    if (Math.abs(y) > 0.01) {
      ctx.textAlign = 'right'
      ctx.fillText(y.toFixed(1), plotX - 10, canvasY)
    }
  }

  // Convertir en buffer et base64
  const buffer = canvas.toBuffer('image/png')
  const base64 = buffer.toString('base64')
  const dataUrl = `data:image/png;base64,${base64}`

  return {
    imageBuffer: buffer,
    base64,
    dataUrl,
  }
}

