import React, { createContext } from 'react';
import useLocalStorage from '../hooks/local-storage/useLocalStorage';
import { themes } from '../styles/themes';
import { Props } from '../types/types';

type ThemeType = {
  background: string;
  highlightText: string;
  text: string;
  border: string;
  primary: string;
  isDark: boolean;
};

type ThemeContext = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useLocalStorage<ThemeType>('theme', themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
