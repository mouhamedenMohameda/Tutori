import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import fr from '@/locales/fr.json';
import tr from '@/locales/tr.json';

export const languages = {
  en: { name: 'English', flag: '🇺🇸', dir: 'ltr' },
  ar: { name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  tr: { name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' }
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en,
  ar,
  fr,
  tr
} as const;

export const defaultLanguage: Language = 'en';

export function getTranslation(language: Language) {
  return translations[language] || translations[defaultLanguage];
}
