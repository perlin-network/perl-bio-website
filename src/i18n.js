import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as locales from './locales';

i18n.use(LanguageDetector).init({
  debug: true,
  // lng: 'en',
  fallbackLng: 'en', // use en if detected lng is not available

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },

  resources: locales,
  ns: 'common', // Object.keys(locales.en),
  nsSeparator: '::',
  defaultNS: 'common',
  fallbackNS: 'common',
});

export default i18n;
