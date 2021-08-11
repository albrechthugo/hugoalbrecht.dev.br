import React from 'react';
import { Props } from '../../types/types';
import { ThemeProvider } from 'styled-components';
import useTheme from '../../hooks/theme/useTheme';

const Theme = ({ children }: Props) => {
  const { theme } = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
