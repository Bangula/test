import React, { lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { MAIN_ROUTES } from '@constants/routes';
import Header from '@components/Header';

const MainPage = ({ match: { path } }) => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          {MAIN_ROUTES.map(route => (
            <Route
              key={route.path}
              path={`${path}/${route.path}`}
              component={lazy(() => import(`./${route.path}`))}
            />
          ))}
        </Switch>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default withRouter(MainPage);
