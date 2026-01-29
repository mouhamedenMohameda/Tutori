/**
 * Client utilitaire pour utiliser le service de tracé de courbes
 * Facilite l'appel de l'API depuis les composants React
 */

import { PlotConfig } from './plotter'

export interface PlotRequest {
  expression: string
  config?: PlotConfig
}

export interface PlotResponse {
  success: boolean
  imageUrl?: string
  base64?: string
  mimeType?: string
  error?: string
  details?: string
}

/**
 * Génère une courbe mathématique via l'API
 * 
 * @param expression Expression mathématique (ex: "x^2", "sin(x)", "x^2 + 2*x + 1")
 * @param config Configuration optionnelle pour le tracé
 * @returns Promise avec l'URL de l'image et le base64
 * 
 * @example
 * ```typescript
 * const result = await plotGraph("x^2", { xMin: -5, xMax: 5, title: "Parabole" })
 * if (result.success) {
 *   // Utiliser result.imageUrl pour afficher l'image
 * }
 * ```
 */
export async function plotGraph(
  expression: string,
  config?: PlotConfig
): Promise<PlotResponse> {
  try {
    const response = await fetch('/api/graph/plot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expression,
        config,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Erreur lors de la génération de la courbe',
        details: data.details,
      }
    }

    return {
      success: true,
      imageUrl: data.imageUrl,
      base64: data.base64,
      mimeType: data.mimeType,
    }
  } catch (error: any) {
    console.error('❌ Erreur lors de l\'appel à l\'API de tracé:', error)
    return {
      success: false,
      error: 'Erreur de connexion',
      details: error.message,
    }
  }
}

/**
 * Génère plusieurs courbes sur le même graphique
 * 
 * @param expressions Tableau d'expressions avec leurs couleurs optionnelles
 * @param config Configuration optionnelle pour le tracé
 * @returns Promise avec l'URL de l'image et le base64
 */
export async function plotMultipleGraphs(
  expressions: Array<{ expression: string; color?: string; label?: string }>,
  config?: PlotConfig
): Promise<PlotResponse> {
  try {
    const response = await fetch('/api/graph/plot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expressions,
        config,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Erreur lors de la génération des courbes',
        details: data.details,
      }
    }

    return {
      success: true,
      imageUrl: data.imageUrl,
      base64: data.base64,
      mimeType: data.mimeType,
    }
  } catch (error: any) {
    console.error('❌ Erreur lors de l\'appel à l\'API de tracé:', error)
    return {
      success: false,
      error: 'Erreur de connexion',
      details: error.message,
    }
  }
}

/**
 * Génère l'URL directe d'une image de courbe (pour utilisation dans <img src={...}>)
 * 
 * @param expression Expression mathématique
 * @param config Configuration optionnelle
 * @returns URL de l'image
 */
export function getPlotImageUrl(
  expression: string,
  config?: PlotConfig
): string {
  const params = new URLSearchParams()
  params.set('expression', expression)
  
  if (config?.xMin !== undefined) params.set('xMin', config.xMin.toString())
  if (config?.xMax !== undefined) params.set('xMax', config.xMax.toString())
  if (config?.yMin !== undefined) params.set('yMin', config.yMin.toString())
  if (config?.yMax !== undefined) params.set('yMax', config.yMax.toString())

  return `/api/graph/plot?${params.toString()}`
}

