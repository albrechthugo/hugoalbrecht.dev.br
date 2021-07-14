import React from 'react';
import Container from '../../components/Container/index';
import useLanguage from '../../hooks/useLanguage';

const Home = (): JSX.Element => {
  const { language } = useLanguage();

  return (
    <>
      <Container>
        <h1>{language.teste}</h1>
      </Container>
    </>
  );
};

export default Home;
