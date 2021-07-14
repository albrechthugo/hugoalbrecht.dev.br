import { useContext } from 'react';
import { LanguageContext } from './../providers/LanguageProvider';

const useLanguage = () => {
  const context = useContext(LanguageContext);
  const { language, setLanguage } = context;
  return { language, setLanguage };
};

export default useLanguage;
