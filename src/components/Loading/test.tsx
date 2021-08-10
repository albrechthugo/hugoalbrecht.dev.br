import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../helpers/renderWithTheme';
import Loading from '.';

describe('<Loading />', () => {
  it('should render a loading container with property left: 0 by default ', () => {
    renderWithTheme(<Loading />);
    expect(screen.getByRole('main')).toHaveStyle({ left: 0 });
  });

  it('should render a loading container with property left: 8rem if isFullScreenLoading is false ', () => {
    renderWithTheme(<Loading isFullscreenLoading={false} />);
    expect(screen.getByRole('main')).toHaveStyle({ left: '8rem' });
  });
});
