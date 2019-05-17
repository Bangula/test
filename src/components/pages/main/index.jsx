import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

import Artists from './pages/artists';
import AxeMusic from './pages/axe-music';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Admin from './pages/admin/index';
import Requests from './pages/requests';

const MainPage = ({ match: { path } }) => {
  const root = path === '/' ? '' : path;
  return (
    <>
      <div
        style={{ maxWidth: '1920px' }}
        className="mx-auto min-h-screen relative">
        <Header />
        <div className="main">
          <Switch>
            <Route path={`${root}/artists`} component={Artists} />
            <Route path={`${root}/axe-music`} component={AxeMusic} />
            <Route path={`${root}/profile`} component={Profile} />
            <Route path={`${root}/admin`} component={Admin} />
            <Route path={`${root}/requests`} component={Requests} />
            <Route exact path={`${root}/`} component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default withRouter(MainPage);
