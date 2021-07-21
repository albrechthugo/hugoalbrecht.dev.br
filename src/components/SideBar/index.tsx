import React from 'react';
import * as S from './styles';
import useTheme from '../../hooks/useTheme';
import useModal from '../../hooks/useModal';
import { BiHomeAlt as HomeIcon } from 'react-icons/bi';
import { MdLanguage as LanguageIcon } from 'react-icons/md';
import { HiOutlineLightBulb as LightIcon } from 'react-icons/hi';
import SelectLanguageModal from '../SelectLanguageModal';

const SideBar: React.FC = (): JSX.Element => {
  const { theme } = useTheme();
  const { isOpen, toggleModal, setIsOpen } = useModal();

  return (
    <>
      <S.SideBarWrapper>
        <S.IconsWrapper>
          <HomeIcon size={40} color={theme.primary} />
          <LightIcon size={40} color={theme.border} />
          <LanguageIcon size={40} color={theme.border} onClick={toggleModal} />
        </S.IconsWrapper>
      </S.SideBarWrapper>

      <SelectLanguageModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default SideBar;
