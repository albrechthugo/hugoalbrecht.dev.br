import React from 'react';
import * as S from './styles';

type SvgIconProps = {
  fill?: string;
  width?: string;
  height?: string;
  path: string;
  onClickAction?: () => void;
};

const SvgIcon: React.FC<SvgIconProps> = ({
  fill = '#000000',
  width = '26px',
  height = '26px',
  path,
  onClickAction,
}: SvgIconProps) => (
  <S.Svg
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    onClick={onClickAction}
  >
    <path d={path} />
  </S.Svg>
);

export default SvgIcon;
