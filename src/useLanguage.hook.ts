import React, { useContext, useEffect, useState } from 'react';

import { LanguageContext } from './language.context';

export const useLanguage = () => {
  const [message, setMessage] = useState('');
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    setMessage(`The current language is: ${language}`);
  }, [language]);

  return { message, setLanguage };
};
