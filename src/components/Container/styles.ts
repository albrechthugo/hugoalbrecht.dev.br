import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 8rem auto;
  grid-template-rows: 100%;
  grid-template-areas: 'sidebar main';

  @media (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-template-rows: auto 8rem;
    grid-template-areas: 'main' 'sidebar';
  }
`;
