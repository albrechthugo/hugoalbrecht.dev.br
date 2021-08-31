import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { iconsPath } from '../../assets/icons/icons';
import useModal from '../../hooks/modal/useModal';
import useTheme from '../../hooks/theme/useTheme';
import SelectLanguageModal from '../SelectLanguageModal';
import SvgIcon from '../SvgIcon/index';
import * as S from './styles';

const SideBar = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const { isOpen, toggleModal } = useModal();
  const { push } = useHistory();
  const { home, lightOn, lightOff, language, projects } = iconsPath;

  return (
    <>
      <S.SideBarWrapper>
        <S.IconsWrapper>
          <Link to="/">
            <SvgIcon
              path={home}
              fill={theme?.primary}
              width={'30'}
              height={'30'}
            />
          </Link>

          <SvgIcon
            path={theme?.isDark ? lightOn : lightOff}
            fill={theme?.border}
            width={'30'}
            height={'30'}
            onClickAction={toggleTheme}
          />

          <SvgIcon
            path={language}
            fill={theme?.border}
            width={'30'}
            height={'30'}
            onClickAction={toggleModal}
          />

          <SvgIcon
            path={projects}
            fill={theme?.border}
            width={'30'}
            height={'30'}
            onClickAction={() => push('/projects')}
          />
        </S.IconsWrapper>
      </S.SideBarWrapper>

      <SelectLanguageModal isOpen={isOpen} setIsOpen={toggleModal} />
    </>
  );
};

export default SideBar;
