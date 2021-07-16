import React from 'react';
import * as S from './styles';
import useTheme from '../../hooks/useTheme';
import { BiHomeAlt as HomeIcon } from 'react-icons/bi';
import { MdLanguage as LanguageIcon } from 'react-icons/md';
import { HiOutlineLightBulb as LightIcon } from 'react-icons/hi';

const SideBar: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <S.SideBarWrapper>
      <S.IconsWrapper>
        <HomeIcon size={40} color={theme.primary} />
        <LightIcon size={40} color={theme.border} />
        <LanguageIcon size={40} color={theme.border} />
      </S.IconsWrapper>
    </S.SideBarWrapper>
  );
};

export default SideBar;
