import React from 'react';
import { iconsPath } from '../../assets/icons/icons';
import useTheme from '../../hooks/theme/useTheme';
import SvgIcon from '../SvgIcon';
import * as S from './styles';

const SocialMedia = (): JSX.Element => {
  const { theme } = useTheme();
  const { instagram, linkedin, github } = iconsPath;

  return (
    <>
      <S.SocialMediaContainer>
        <a
          href="https://www.instagram.com/hugoandreass/"
          target="_blank"
          rel="noreferrer"
        >
          <SvgIcon path={instagram} fill={theme?.border} />
        </a>

        <a
          href="https://www.github.com/albrechthugo"
          target="_blank"
          rel="noreferrer"
        >
          <SvgIcon path={github} fill={theme?.border} />
        </a>

        <a
          href="https://www.linkedin.com/in/albrechthugo"
          target="_blank"
          rel="noreferrer"
        >
          <SvgIcon path={linkedin} fill={theme?.border} />
        </a>
      </S.SocialMediaContainer>
    </>
  );
};

export default SocialMedia;
