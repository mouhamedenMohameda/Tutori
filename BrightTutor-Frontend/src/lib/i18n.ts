import en from '../locales/en.json';
import fr from '../locales/fr.json';

export const languages = {
  en: { name: 'English', flag: '🇺🇸', dir: 'ltr' as const },
  fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' as const },
};

export type Language = keyof typeof languages;

export const translations = { en, fr } as const;

export const defaultLanguage: Language = 'en';

export function getTranslation(language: Language) {
  return translations[language] || translations[defaultLanguage];
}
