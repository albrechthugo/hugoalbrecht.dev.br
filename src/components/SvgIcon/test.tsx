import React from 'react';
import SvgIcon from '.';
import 'jest-styled-components';
import { renderWithTheme } from '../../helpers/renderWithTheme';

describe('<SvgIcon />', () => {
  it('should render a svg icon with a black color and 26px of width and height by default', () => {
    const { container } = renderWithTheme(<SvgIcon path={'mockPath'} />);

    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('svg')).toHaveAttribute('fill', '#000000');
    expect(container.querySelector('svg')).toHaveAttribute('width', '26px');
    expect(container.querySelector('svg')).toHaveAttribute('height', '26px');
  });

  it('should render a svg icon with properties which was passed from props', () => {
    const { container } = renderWithTheme(
      <SvgIcon path={'mockPath'} fill="#F22" width="30px" height="30px" />
    );

    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('svg')).toHaveAttribute('fill', '#F22');
    expect(container.querySelector('svg')).toHaveAttribute('width', '30px');
    expect(container.querySelector('svg')).toHaveAttribute('height', '30px');
  });

  it('should have a primary theme color when has hover atrribute', () => {
    const { container } = renderWithTheme(<SvgIcon path={'mockPath'} />);

    expect(container.querySelector('svg')).toHaveStyleRule('fill', '#91171F', {
      modifier: ':hover',
    });
  });
});
