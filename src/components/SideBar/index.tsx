import React from 'react';
import { Link } from 'react-router-dom';
import { iconsPath } from '../../assets/icons/icons';
import useModal from '../../hooks/useModal';
import useTheme from '../../hooks/useTheme';
import SelectLanguageModal from '../SelectLanguageModal';
import SvgIcon from '../SvgIcon/index';
import * as S from './styles';

const SideBar = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const { isOpen, toggleModal } = useModal();
  const { home, lightOn, lightOff, language, book } = iconsPath;

  return (
    <>
      <S.SideBarWrapper>
        <S.IconsWrapper>
          <Link to="/">
            <SvgIcon
              path={home}
              fill={theme.primary}
              width={'30'}
              height={'30'}
            />
          </Link>

          <SvgIcon
            path={theme.isDark ? lightOn : lightOff}
            fill={theme.border}
            width={'30'}
            height={'30'}
            onClickAction={toggleTheme}
          />

          <SvgIcon
            path={language}
            fill={theme.border}
            width={'30'}
            height={'30'}
            onClickAction={toggleModal}
          />
        </S.IconsWrapper>
      </S.SideBarWrapper>

      <SelectLanguageModal isOpen={isOpen} setIsOpen={toggleModal} />
    </>
  );
};

export default SideBar;
