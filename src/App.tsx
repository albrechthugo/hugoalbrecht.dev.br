import React from 'react';
import Container from './components/Container';
import LanguageProvider from './providers/LanguageProvider';
import ThemeProvider from './providers/ThemeProvider';
import { Routes } from './routes';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
