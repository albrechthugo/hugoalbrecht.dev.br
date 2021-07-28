import React from 'react';
import Theme from './components/Theme/index';
import LanguageProvider from './providers/LanguageProvider';
import ThemeProvider from './providers/ThemeProvider';
import { Routes } from './routes';
import { GlobalStyles } from './styles/global';

const App = (): JSX.Element => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Theme>
          <Routes />
        </Theme>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
