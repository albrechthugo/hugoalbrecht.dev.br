import React from 'react';
import useTheme from '../../hooks/useTheme';
import { Props } from '../../types/types';
import SideBar from '../SideBar';
import * as S from './styles';

const Container = (props: Props): JSX.Element => {
  const { theme } = useTheme();

  return (
    <>
      <S.Wrapper theme={theme}>
        <SideBar />
        {props.children}
      </S.Wrapper>
    </>
  );
};

export default Container;
