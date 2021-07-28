import React from 'react';
import { iconsPath } from '../../assets/icons/icons';
import useTheme from '../../hooks/useTheme';
import SvgIcon from '../SvgIcon';
import * as S from './styles';

const SocialMedia = (): JSX.Element => {
  const { theme } = useTheme();
  const { instagram, linkedin, github } = iconsPath;

  return (
    <>
      <S.SocialMediaContainer>
        <SvgIcon path={instagram} fill={theme.border} />
        <SvgIcon path={github} fill={theme.border} />
        <SvgIcon path={linkedin} fill={theme.border} />
      </S.SocialMediaContainer>
    </>
  );
};

export default SocialMedia;
