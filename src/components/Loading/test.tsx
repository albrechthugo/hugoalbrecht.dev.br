import React from 'react';
import { screen } from '@testing-library/react';
import 'jest-styled-components';
import { renderWithTheme } from '../../helpers/renderWithTheme';
import Loading from '.';

describe('<Loading />', () => {
  it('should render a loading container with property left: 0 by default ', () => {
    renderWithTheme(<Loading />);
    expect(screen.getByRole('main')).toHaveStyle({ left: 0 });
  });

  it(`should render a loading container with property left: 8rem and left: 0, bottom: 8rem
      when screen width is less equal than 1000px while isFullScreenLoading is false`, () => {
    renderWithTheme(<Loading isFullscreenLoading={false} />);
    expect(screen.getByRole('main')).toHaveStyle({ left: '8rem' });
    expect(screen.getByRole('main')).toHaveStyleRule('left', '0', {
      media: '(max-width: 1000px)',
    });

    expect(screen.getByRole('main')).toHaveStyleRule('bottom', '8rem', {
      media: '(max-width: 1000px)',
    });
  });
});
