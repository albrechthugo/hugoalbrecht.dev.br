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

  it('should render projects title correctly', () => {
    const { container } = renderWithTheme(
      <BrowserRouter>
        <AboutMe />
      </BrowserRouter>
    );

    const projects = container.querySelector('p');
    expect(projects).toHaveTextContent(/projetos/i);
  });

  it('should apply text underline and highlight color style when projects label is hovered', () => {
    const { container } = renderWithTheme(
      <BrowserRouter>
        <AboutMe />
      </BrowserRouter>
    );

    const projects = container.querySelector('p');

    expect(projects).toHaveStyle({ color: '#8899a6' });

    expect(projects).toHaveStyleRule('text-decoration', 'underline', {
      modifier: ':hover',
    });

    expect(projects).toHaveStyleRule('color', '#FFFBFC', {
      modifier: ':hover',
    });
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

    expect(screen.getByRole('img')).toHaveStyleRule('margin-top', '6rem', {
      media: '(max-width: 376px)',
    });
  });
});
