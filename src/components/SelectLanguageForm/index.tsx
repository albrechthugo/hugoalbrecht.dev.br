import React from 'react';
import useLanguage from '../../hooks/useLanguage';
import RadioInput from '../RadioInput/index';
import * as S from './styles';

const SelectLanguageForm: React.FC = (): JSX.Element => {
  const { language } = useLanguage();

  return (
    <>
      <S.FormContainer>
        <RadioInput name="language" label={language.portugues} value="ptBr" />
        <RadioInput name="language" label={language.english} value="enUs" />
        <RadioInput name="language" label={language.espanhol} value="es" />
      </S.FormContainer>
    </>
  );
};

export default SelectLanguageForm;
