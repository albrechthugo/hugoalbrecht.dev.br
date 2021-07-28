import styled from 'styled-components';

export const Svg = styled.svg`
  cursor: pointer;
  transition: fill 0.4s ease-in-out;

  &:hover {
    fill: ${props => props.theme.primary};
  }
`;
