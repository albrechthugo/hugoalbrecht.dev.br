import { screen } from '@testing-library/react';
import React from 'react';
import SocialMedia from '.';
import { renderWithTheme } from '../../helpers/tests/renderWithTheme';

describe('<SocialMedia />', () => {
  it('should render a social media component with a three <a> ', () => {
    renderWithTheme(<SocialMedia />);

    expect(screen.getAllByRole('link')[0]).toHaveAttribute(
      'href',
      'https://www.instagram.com/hugoandreass/'
    );

    expect(screen.getAllByRole('link')[1]).toHaveAttribute(
      'href',
      'https://www.github.com/albrechthugo'
    );

    expect(screen.getAllByRole('link')[2]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/albrechthugo'
    );
  });
});
