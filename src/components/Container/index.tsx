import React from 'react';
import { Props } from '../../types/types';
import SideBar from '../SideBar';
import * as S from './styles';

const Container: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <>
      <S.Wrapper>
        <SideBar />
        {children}
      </S.Wrapper>
    </>
  );
};

export default Container;
