import { useContext, useState } from 'react';
import { LanguageContext } from './../providers/LanguageProvider';

export enum Languages {
  'ptBr' = 'ptBr',
  'enUs' = 'enUs',
  'es' = 'es',
}

const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [selectedLanguageOnForm, setSelectedLanguageOnForm] = useState('ptBr');

  return {
    language,
    setLanguage,
    selectedLanguageOnForm,
    setSelectedLanguageOnForm,
  };
};

export default useLanguage;
