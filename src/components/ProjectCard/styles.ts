import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
`;

export const CardContainer = styled.section`
  width: 100%;
  height: 20rem;
  background-color: ${props => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.text};

  &:hover > article > h2 {
    color: ${props => props.theme.primary};
  }

  &:hover > article > p {
    color: ${props => props.theme.highlightText};
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const CardInfos = styled.article`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.highlightText};
  font-size: 2.4rem;
  margin-bottom: 1rem;
  transition: color 0.2s ease-in-out;
`;

export const Description = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.6rem;
  line-height: 2.2rem;
  margin-top: 1rem;
  transition: color 0.2s ease-in-out;
`;

export const CardStargazers = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  & span {
    width: 16.5rem;
    font-size: 1.24rem;
    font-weight: 300;
    margin-top: 0.8rem;
    color: ${props => props.theme.text};
  }

  @media (max-width: 1000px) {
    flex-direction: row;
    align-items: center;
    margin-top: 1.4rem;

    & span {
      margin-top: 0;
      margin-right: 0.6rem;
    }
  }
`;
