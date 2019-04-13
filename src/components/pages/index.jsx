import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UnauthPages from './unauth';
import SelectionPage from './selection/Selection';
import MainPages from './main';

const Pages = () => {
  const [isAuthenticated, setAuth] = React.useState(false);
  const ActiveRoutes = isAuthenticated ? MainPages : UnauthPages;
  return (
    <Switch>
      {isAuthenticated && (
        <Route exact path="/selection" component={SelectionPage} />
      )}
      <Route path="/" component={ActiveRoutes} />
    </Switch>
  );
};

export default Pages;
