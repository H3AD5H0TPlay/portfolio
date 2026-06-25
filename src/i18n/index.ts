import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';

import huTranslation from './locales/hu.json';
import deTranslation from './locales/de.json';
import jpTranslation from './locales/jp.json';
import krTranslation from './locales/kr.json';

const resources = {
  en: { translation: enTranslation },
  hu: { translation: huTranslation },
  de: { translation: deTranslation },
  jp: { translation: jpTranslation },
  kr: { translation: krTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
