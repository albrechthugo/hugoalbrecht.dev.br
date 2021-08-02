import styled from 'styled-components';

export const ModalContainer = styled('main')<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  z-index: 1;

  ${({ isOpen }) =>
    isOpen &&
    `
    visibility: visible;
  `}
`;

export const ModalInfoWrapper = styled.div`
  width: 50rem;
  height: 25rem;
  z-index: 2;
  background-color: #fffbfc;
  border-radius: 0.5rem;
  border: 0.1rem solid ${props => props.theme.border};

  @media (max-width: 560px) {
    margin: 0 2rem;
  }
`;

export const ModalHeader = styled.header`
  position: relative;
  width: 100%;
  z-index: 10;
`;

export const ModalTitle = styled.h1`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: rgba(0, 0, 0, 0.7);
`;

export const ModalCloseButton = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  position: absolute;
  top: 1rem;
  right: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalBody = styled.section`
  position: relative;
  padding-top: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  height: 100%;
`;

export const ModalSaveButton = styled.button`
  width: 6rem;
  height: 3rem;
  background-color: ${props => props.theme.primary};
  box-shadow: 0.1rem 0.1rem 0.1rem ${props => props.theme.border};
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;
