import React, { lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { MAIN_ROUTES } from '@constants/routes';
import Header from '@components/Header';
import Footer from '@components/Footer';

const MainPage = ({ match: { path } }) => {
  return (
    <>
      <Header />
      <div className="main">
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
      <Footer />
    </>
  );
};

export default withRouter(MainPage);
