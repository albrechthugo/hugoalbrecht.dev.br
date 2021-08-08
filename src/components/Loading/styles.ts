import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled('main')<{
  isFullscreenLoading: boolean;
}>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${props => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isFullscreenLoading }) =>
    !isFullscreenLoading &&
    `
    left: 8rem;

    @media (max-width: 1000px) {
      left: 0rem;
      bottom: 8rem;
    }
  `}
`;

export const Spinner = styled.div`
  margin: 6rem auto;
  font-size: 1rem;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid ${props => props.theme.border};
  border-right: 1.1em solid ${props => props.theme.border};
  border-bottom: 1.1em solid ${props => props.theme.border};
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  animation: ${rotate} 1s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-animation: ${rotate} 1s infinite linear;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;

  &::after {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }
`;
