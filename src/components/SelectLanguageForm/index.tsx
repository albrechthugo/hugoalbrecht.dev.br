import React from 'react';
import useLanguage from '../../hooks/useLanguage';
import RadioInput from '../RadioInput/index';
import * as S from './styles';

type SelectLanguageFormProps = {
  handleSelectLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const SelectLanguageForm: React.FC<SelectLanguageFormProps> = ({
  handleSelectLanguage,
}: SelectLanguageFormProps): JSX.Element => {
  const { language } = useLanguage();

  return (
    <>
      <S.FormContainer
        onChange={(e: any) => handleSelectLanguage(e.target.value)}
      >
        <RadioInput name="language" label={language.portugues} value="ptBr" />
        <RadioInput name="language" label={language.english} value="enUs" />
        <RadioInput name="language" label={language.espanhol} value="es" />
      </S.FormContainer>
    </>
  );
};

export default SelectLanguageForm;
