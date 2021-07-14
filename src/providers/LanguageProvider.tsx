import React, { createContext, useState } from 'react';
import literals from '../assets/i18n/translate';
import { Props } from '../types/types';

type LanguageContext = {
  language: { [key: string]: string };
  setLanguage: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
};

const DEFAULT_VALUE: LanguageContext = {
  language: literals.ptBr,
  setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContext>(DEFAULT_VALUE);

const LanguageProvider = (props: Props) => {
  const [language, setLanguage] = useState(DEFAULT_VALUE.language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
