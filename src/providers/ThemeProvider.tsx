import React, { createContext, useState } from 'react';
import { themes } from '../styles/themes';
import { Props } from '../types/types';

type ThemeType = {
  background: string;
  text: string;
  border: string;
  primary: string;
  isDark: boolean;
};

type ThemeContext = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

const DEFAULT_VALUE: ThemeContext = {
  theme: themes.dark,
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContext>(DEFAULT_VALUE);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(DEFAULT_VALUE.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
