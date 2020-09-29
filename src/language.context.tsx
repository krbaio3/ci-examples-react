import React, { createContext, FC, useState } from 'react';

interface Context {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<Context>({
  language: '',
  setLanguage: () => {
    console.warn('Provider is not initialized');
  },
});

export const LanguageProvider: FC = props => {
  const [language, setLanguage] = useState('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
