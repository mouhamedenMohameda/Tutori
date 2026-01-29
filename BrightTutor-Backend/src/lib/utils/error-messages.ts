/**
 * Utility functions for user-friendly error messages
 * Technical errors are logged but users see simple, clear messages
 */

/**
 * Get a user-friendly error message from a technical error
 * Logs the full error for debugging but returns a simple message for users
 */
export function getUserFriendlyError(error: unknown): string {
  // Log the full error for debugging
  console.error('Technical error details:', error);
  
  if (!(error instanceof Error)) {
    return 'Une erreur inattendue s\'est produite. Veuillez réessayer.';
  }
  
  const errorMessage = error.message.toLowerCase();
  
  // Erreurs de connexion réseau
  if (errorMessage.includes('fetch failed') || 
      errorMessage.includes('network') || 
      errorMessage.includes('connection') ||
      errorMessage.includes('timeout')) {
    return 'Problème de connexion. Vérifiez votre internet et réessayez.';
  }
  
  // Erreurs API Gemini/Google
  if (errorMessage.includes('google') || 
      errorMessage.includes('generativelanguage') ||
      errorMessage.includes('gemini') ||
      errorMessage.includes('api key') ||
      errorMessage.includes('gemini_api_key') ||
      errorMessage.includes('placeholder value')) {
    return 'Service temporairement indisponible. Veuillez réessayer dans quelques instants.';
  }
  
  // Erreurs de génération de contenu
  if (errorMessage.includes('generate') || 
      errorMessage.includes('generation')) {
    return 'Impossible de générer le contenu pour le moment. Veuillez réessayer.';
  }
  
  // Erreurs de validation
  if (errorMessage.includes('validation') || 
      errorMessage.includes('invalid')) {
    return 'Données invalides. Veuillez réessayer.';
  }
  
  // Erreurs d'authentification
  if (errorMessage.includes('unauthorized') || 
      errorMessage.includes('auth') ||
      errorMessage.includes('token')) {
    return 'Session expirée. Veuillez vous reconnecter.';
  }
  
  // Erreurs de ressource non trouvée
  if (errorMessage.includes('not found') || 
      errorMessage.includes('404')) {
    return 'Contenu introuvable. Veuillez réessayer.';
  }
  
  // Erreur générique
  return 'Une erreur s\'est produite. Veuillez réessayer.';
}

/**
 * Get a user-friendly error message for question generation failures
 */
export function getQuestionGenerationError(error: unknown): string {
  const friendlyMessage = getUserFriendlyError(error);
  return `Impossible de générer la question. ${friendlyMessage}`;
}
