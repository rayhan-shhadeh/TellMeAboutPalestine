/**
 * Localization system
 * Supports English and Arabic
 * Type-safe translations
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { en, Translation } from './en';
import { ar } from './ar';

export type Language = 'en' | 'ar';

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
  isRTL: boolean;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined
);

const translations: Record<Language, Translation> = {
  en,
  ar,
};

interface LocalizationProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
  defaultLanguage = 'en',
}) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const value: LocalizationContextType = {
    language,
    setLanguage,
    t: translations[language],
    isRTL: language === 'ar',
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      'useLocalization must be used within a LocalizationProvider'
    );
  }
  return context;
};

// Export translations for direct use if needed
export { en, ar };
export type { Translation };
