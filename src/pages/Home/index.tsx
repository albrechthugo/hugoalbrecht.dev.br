import React from 'react';
import useLanguage from '../../hooks/useLanguage';

const Home = (): JSX.Element => {
  const { language } = useLanguage();

  return (
    <>
      <h1>{language.teste}</h1>
    </>
  );
};

export default Home;
