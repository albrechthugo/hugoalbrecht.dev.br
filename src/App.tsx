import React from 'react';
import Container from './components/Container';
import LanguageProvider from './providers/LanguageProvider';
import ThemeProvider from './providers/ThemeProvider';
import { Routes } from './routes';
import { GlobalStyles } from './styles/global';
import Theme from './components/Theme/index';

const App: React.FC = (): JSX.Element => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Theme>
          <Container>
            <Routes />
          </Container>
        </Theme>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
