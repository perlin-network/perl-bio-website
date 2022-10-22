import React, { createContext, useContext, useState } from 'react';
// import * as locales from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

export const AppConfigContext = createContext({});

export const AppConfigProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const i18nLangPrefix = i18n.language.split('-')[0];

  // const [localesData] = useState(locales);
  const [language, setLanguage] = useState(i18nLangPrefix);
  // const [locale, setLocale] = useState(
  //   localesData[i18nLangPrefix] || localesData['enUS']
  // );

  const setCurrentLanguage = async (language) => {
    setLanguage(language);
    // setLocale(localesData[language]);
    i18n.changeLanguage(language);
  };

  const getSupportedLanguages = () => Object.keys(i18n.options.resources || {});

  return (
    <AppConfigContext.Provider
      value={{
        setCurrentLanguage,
        getSupportedLanguages,
        language,
        // locale,
      }}
    >
      {children}
    </AppConfigContext.Provider>
  );
};

export const useAppConfig = () => useContext(AppConfigContext);
