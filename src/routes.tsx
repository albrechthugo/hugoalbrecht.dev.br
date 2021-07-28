import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import Home from './pages/Home';

export const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Container>
          <Route exact path="/" component={Home} />
        </Container>
      </Switch>
    </Router>
  );
};
