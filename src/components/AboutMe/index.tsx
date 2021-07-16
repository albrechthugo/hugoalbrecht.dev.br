import React from 'react';
import useLanguage from '../../hooks/useLanguage';
import * as S from './styles';
import avatar from '../../assets/images/avatar.png';
import SocialMedia from '../SocialMedia/index';
import SelectLanguageModal from '../SelectLanguageModal/index';

const AboutMe: React.FC = (): JSX.Element => {
  const { language } = useLanguage();

  return (
    <>
      <S.Container>
        <SelectLanguageModal />
        <S.Avatar src={avatar} />
        <S.Name>{language.name}</S.Name>
        <S.Dot />
        <S.Description>{language.description}</S.Description>
        <S.Dot />
        <SocialMedia />
      </S.Container>
    </>
  );
};

export default AboutMe;
