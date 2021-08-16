import React from 'react';
import ProjectCard from '.';
import 'jest-styled-components';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../helpers/tests/renderWithTheme';

const props = {
  svn_url: 'http://mock.url',
  description: 'A repo',
  id: 1,
  name: 'Repo name',
  stargazers_count: 3,
  updated_at: '2020-09-17T03:00:00Z',
};

describe('<ProjectCard />', () => {
  it('should render ProjectCard component with props whic was received from parent component', () => {
    const { container } = renderWithTheme(<ProjectCard {...props} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', 'http://mock.url');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Repo name'
    );

    expect(container.querySelector('span')).toHaveTextContent(
      'Última atualização: 17/09/2020'
    );

    expect(container.querySelector('img')).toHaveAccessibleName(
      'GitHub Repo Stars'
    );

    expect(container.querySelector('img').src).toEqual(
      'https://img.shields.io/github/stars/albrechthugo/albrechthugo?style=social'
    );
  });

  it('should render a message with follow text: `A descrição não foi informada.` when !description', () => {
    const { container } = renderWithTheme(
      <ProjectCard
        svn_url="http://mock.url"
        description={null}
        id={1}
        name="Repo name"
        stargazers_count={3}
        updated_at="2020-09-17T03:00:00Z"
      />
    );

    expect(container.querySelector('p')).toHaveTextContent(
      'A descrição não foi informada.'
    );
  });

  it('should render component with correct styles when screen width is less than 1000px', () => {
    const { container } = renderWithTheme(<ProjectCard {...props} />);

    const cardContainer = container.querySelector('section');
    expect(cardContainer).toHaveStyleRule('flex-direction', 'column', {
      media: '(max-width: 1000px)',
    });

    const cardInfo = container.querySelector('article');
    expect(cardInfo).toHaveStyleRule('width', '100%', {
      media: '(max-width: 1000px)',
    });
  });
});
