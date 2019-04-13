import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';

import Artists from './pages/artists/Artists';
import AxeMusic from './pages/axe-music/AxeMusic';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

const MainPage = ({ match: { path } }) => {
  const root = path === '/' ? '' : path;
  return (
    <>
      <Header />
      <div className="main">
        <Switch>
          <Route path={`${root}/artists`} component={Artists} />
          <Route path={`${root}/axe-music`} component={AxeMusic} />
          <Route path={`${root}/profile`} component={Profile} />
          <Route path={`${root}/`} component={Home} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(MainPage);
