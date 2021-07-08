import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
