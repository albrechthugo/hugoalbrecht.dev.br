import React from 'react';
import useLanguage from '../../hooks/useLanguage';
import useModal from '../../hooks/useModal';
import SelectLanguageForm from '../SelectLanguageForm/index';
import * as S from './styles';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectLanguageModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
}: ModalProps): JSX.Element => {
  const { language } = useLanguage();

  const handleChangeLanguage = () => {
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
            <SelectLanguageForm />

            <S.ModalSaveButton onClick={() => handleChangeLanguage()}>
              {language.apply}
            </S.ModalSaveButton>
          </S.ModalBody>
        </S.ModalInfoWrapper>
      </S.ModalContainer>
    </>
  );
};

export default SelectLanguageModal;
