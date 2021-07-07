import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

export default function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
