import React from 'react';
import literals from '../../assets/i18n/translate';
import useLanguage, { Languages } from '../../hooks/language/useLanguage';
import SelectLanguageForm from '../SelectLanguageForm/index';
import * as S from './styles';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectLanguageModal = ({
  isOpen,
  setIsOpen,
}: ModalProps): JSX.Element => {
  const {
    language,
    setLanguage,
    selectedLanguageOnForm,
    setSelectedLanguageOnForm,
  } = useLanguage();

  const handleConfirmLanguageChange = (): void => {
    setLanguage(literals[selectedLanguageOnForm as Languages]);
    setIsOpen(false);
  };

  return (
    <>
      <S.ModalContainer isOpen={isOpen}>
        <S.ModalInfoWrapper>
          <S.ModalHeader>
            <S.ModalTitle>{language.chooseLanguage}</S.ModalTitle>
            <S.ModalCloseButton onClick={() => setIsOpen(false)} />
          </S.ModalHeader>

          <S.ModalBody>
            <SelectLanguageForm
              handleSelectLanguage={setSelectedLanguageOnForm}
            />

            <S.ModalSaveButton onClick={() => handleConfirmLanguageChange()}>
              {language.apply}
            </S.ModalSaveButton>
          </S.ModalBody>
        </S.ModalInfoWrapper>
      </S.ModalContainer>
    </>
  );
};

export default SelectLanguageModal;
