import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={themes.dark}>{children}</ThemeProvider>);
};
