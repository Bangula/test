import React, { lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AUTH_ROUTES } from '@constants/routes';

const AuthPages = ({ match: { path } }) => {
  return (
    <Switch>
      {AUTH_ROUTES.map(route => (
        <Route
          key={route.path}
          path={`${path}/${route.path}`}
          component={lazy(() => import(`./${route.path}`))}
        />
      ))}
    </Switch>
  );
};

export default withRouter(AuthPages);
