import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Props } from '../types/types';
import { themes } from '../styles/themes';

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={themes.dark}>{children}</ThemeProvider>);
};
