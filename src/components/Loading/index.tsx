import React from 'react';
import * as S from './styles';

type LoadingProps = { isFullscreenLoading?: boolean };

const Loading = ({ isFullscreenLoading = true }: LoadingProps): JSX.Element => {
  return (
    <S.LoadingContainer isFullscreenLoading={isFullscreenLoading}>
      <S.Spinner />
    </S.LoadingContainer>
  );
};

export default Loading;
