import styled from 'styled-components';

export const Container = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem 2rem 0rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  margin-bottom: 1.2rem;
`;

export const Name = styled.h1`
  color: ${props => props.theme.highlightText};
  font-weight: 700;
  font-size: 3rem;
`;

export const Dot = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: ${props => props.theme.border};
  margin-top: 1.6rem;
`;

export const Description = styled.span`
  color: ${props => props.theme.text};
  font-size: 1.6rem;
  font-weight: 300;
  margin-top: 1rem;
  text-align: center;
  line-height: 2.6rem;
`;
