import { themes } from '../../styles/themes';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    theme.isDark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return { theme, toggleTheme };
};

export default useTheme;
