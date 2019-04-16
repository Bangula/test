import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import UnauthPages from './unauth';
import SelectionPage from './selection/Selection';
import MainPages from './main';

const Pages = ({ isAuthenticated }) => {
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

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Pages);
