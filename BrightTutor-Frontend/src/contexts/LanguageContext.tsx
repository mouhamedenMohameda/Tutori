import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Language, languages, getTranslation } from '../lib/i18n';

const LANGUAGE_KEY = 'language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    AsyncStorage.getItem(LANGUAGE_KEY).then((saved) => {
      if (saved && (saved === 'en' || saved === 'fr')) {
        setLanguageState(saved);
      }
    });
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    AsyncStorage.setItem(LANGUAGE_KEY, lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const translation = getTranslation(language) as Record<string, unknown>;
      const keys = key.split('.');
      let value: unknown = translation;
      for (const k of keys) {
        value = (value as Record<string, unknown>)?.[k];
      }
      return (typeof value === 'string' ? value : key) as string;
    },
    [language]
  );

  const isRTL = (languages[language].dir as string) === 'rtl';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
