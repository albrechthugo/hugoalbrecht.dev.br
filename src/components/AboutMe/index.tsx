import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.jpg';
import useLanguage from '../../hooks/useLanguage';
import SocialMedia from '../SocialMedia/index';
import * as S from './styles';

const AboutMe = (): JSX.Element => {
  const { language } = useLanguage();

  return (
    <>
      <S.Container>
        <Link to="/projects">
          <S.ProjectsTitle>{language.projects}</S.ProjectsTitle>
        </Link>

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
