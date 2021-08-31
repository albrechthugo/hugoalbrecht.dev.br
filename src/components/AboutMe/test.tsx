import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutMe from '.';
import 'jest-styled-components';
import { renderWithTheme } from '../../helpers/tests/renderWithTheme';

describe('<AboutMe />', () => {
  it('should render component', () => {
    const { container } = renderWithTheme(
      <BrowserRouter>
        <AboutMe />
      </BrowserRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render name correctly', () => {
    const { container } = renderWithTheme(
      <BrowserRouter>
        <AboutMe />
      </BrowserRouter>
    );

    expect(
      screen.getByRole(
        'heading',
        { level: 1 },
        { value: /hugo andreas albrecht/i }
      )
    ).toBeInTheDocument();
  });

  it('should render img in the document', () => {
    const { container } = renderWithTheme(
      <BrowserRouter>
        <AboutMe />
      </BrowserRouter>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should apply margin-top on avatar img when screen width is less than 376px', () => {
    const { container } = renderWithTheme(
      <BrowserRouter>
        <AboutMe />
      </BrowserRouter>
    );

    expect(screen.getByRole('img')).toHaveStyleRule('margin-top', '3rem', {
      media: '(max-width: 376px)',
    });
  });
});
