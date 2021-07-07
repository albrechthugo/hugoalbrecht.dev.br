import React from 'react';
import useTheme from './hooks/useTheme';
import ThemeProvider from './providers/ThemeProvider';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider>
      <h1 style={{ color: theme.text }}>A long time ago...</h1>
    </ThemeProvider>
  );
}

export default App;
