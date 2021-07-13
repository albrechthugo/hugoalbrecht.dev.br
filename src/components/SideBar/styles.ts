import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  background-color: ${props => props.theme.background};
  width: 8rem;
  grid-area: sidebar;
  border-right: 0.1rem solid ${props => props.theme.border};

  @media (max-width: 1000px) {
    width: 100%;
    height: 8rem;
    border-top: 0.1rem solid ${props => props.theme.border};
    border-right: none;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 25rem;
  width: 100%;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    flex-direction: row;
  }
`;
