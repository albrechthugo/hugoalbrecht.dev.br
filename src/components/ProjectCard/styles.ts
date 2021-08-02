import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 20rem;
  background-color: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.border};
  display: flex;
`;
