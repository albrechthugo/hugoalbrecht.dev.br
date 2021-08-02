import React from 'react';
import * as S from './styles';

const Loading = (): JSX.Element => {
  return (
    <S.LoadingContainer>
      <S.Spinner />
    </S.LoadingContainer>
  );
};

export default Loading;
