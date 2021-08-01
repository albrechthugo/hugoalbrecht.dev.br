import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './components/Container';

export const Routes = (): JSX.Element => {
  const Home = lazy(() => import('./pages/Home/'));
  const Projects = lazy(() => import('./pages/Projects/'));

  return (
    <Router>
      <Switch>
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
          </Container>
        </Suspense>
      </Switch>
    </Router>
  );
};
