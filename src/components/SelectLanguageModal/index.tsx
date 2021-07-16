import React from 'react';
import useLanguage from '../../hooks/useLanguage';
import * as S from './styles';

const SelectLanguageModal: React.FC = (): JSX.Element => {
  const { language } = useLanguage();

  return (
    <>
      <S.ModalContainer>
        <S.ModalInfoWrapper>
          <S.ModalHeader>
            <S.ModalTitle>{language.chooseLanguage}</S.ModalTitle>
            <S.ModalCloseButton />
          </S.ModalHeader>

          <S.ModalBody>
            <h1>ModalBody</h1>
          </S.ModalBody>
        </S.ModalInfoWrapper>
      </S.ModalContainer>
    </>
  );
};

export default SelectLanguageModal;
