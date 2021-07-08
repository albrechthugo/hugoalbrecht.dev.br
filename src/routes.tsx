import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>A long time ago..</h1>
        </Route>
      </Switch>
    </Router>
  );
}
