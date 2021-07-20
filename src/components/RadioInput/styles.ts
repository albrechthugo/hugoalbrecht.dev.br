import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  width: max-content;
  color: ${props => props.theme.text};

  & > input {
    margin-right: 0.5rem;
  }
`;
