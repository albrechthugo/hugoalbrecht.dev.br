import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  *,
  button,
  input {
    font-family: 'Nunito', sans-serif;
    border: 0;
    outline: 0;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
}
`;
