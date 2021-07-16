import styled from 'styled-components';

export const ModalContainer = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: visible;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalInfoWrapper = styled.div`
  width: 50rem;
  height: 25rem;
  background-color: #fffbfc;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.border};
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
  width: 2rem;
  height: 2rem;
  background-color: ${props => props.theme.primary};
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const ModalBody = styled.section`
  position: relative;
  padding-top: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  height: 100%;
`;
