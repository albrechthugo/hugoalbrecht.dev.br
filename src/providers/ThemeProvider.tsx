import React, { createContext, useState } from 'react';
import { themes } from '../shared/themes/themes';

type Props = {
  children: React.ReactNode;
};

type ThemeType = {
  background: string;
  text: string;
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

export default function ThemeProvider(props: Props) {
  const [theme, setTheme] = useState(DEFAULT_VALUE.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}