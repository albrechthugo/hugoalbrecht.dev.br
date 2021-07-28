import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 360px) {
    padding: 2rem 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;
