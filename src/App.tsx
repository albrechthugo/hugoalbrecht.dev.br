import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import { Routes } from './routes';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
