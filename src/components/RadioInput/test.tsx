import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithTheme } from '../../helpers/tests/renderWithTheme';
import RadioInput from '.';

describe('<RadioInput />', () => {
  it('should render a radio input component with props which was received', () => {
    const { container } = renderWithTheme(
      <RadioInput name="ptBr" value="ptBr" label="Português" />
    );

    expect(screen.getByText('Português')).toBeInTheDocument();
    expect(container.querySelector('input')).toHaveProperty('value', 'ptBr');
    expect(container.querySelector('input')).toHaveProperty('name', 'ptBr');
  });
});
