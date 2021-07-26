import React from 'react';
import useModal from '../../hooks/useModal';
import useTheme from '../../hooks/useTheme';
import SelectLanguageModal from '../SelectLanguageModal';
import SvgIcon from '../SvgIcon/index';
import { iconsPath } from '../../assets/icons/icons';
import * as S from './styles';

const SideBar: React.FC = (): JSX.Element => {
  const { theme } = useTheme();
  const { isOpen, toggleModal, setIsOpen } = useModal();
  const { home, lightOn, lightOff, language } = iconsPath;

  return (
    <>
      <S.SideBarWrapper>
        <S.IconsWrapper>
          <SvgIcon
            path={home}
            fill={theme.primary}
            width={'30'}
            height={'30'}
          />

          <SvgIcon
            path={theme.isDark ? lightOn : lightOff}
            fill={theme.border}
            width={'30'}
            height={'30'}
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

      <SelectLanguageModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default SideBar;
