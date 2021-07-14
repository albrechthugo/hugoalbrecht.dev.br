import React from 'react';
import LanguageProvider from './providers/LanguageProvider';
import ThemeProvider from './providers/ThemeProvider';
import { Routes } from './routes';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
