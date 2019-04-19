import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '@state/actions';
import UnauthPages from './unauth';
import SelectionPage from './selection/Selection';
import MainPages from './main';

const Pages = ({ isAuthenticated, info, getUserInfo }) => {
  const ActiveRoutes = isAuthenticated ? MainPages : UnauthPages;

  React.useEffect(() => {
    console.log(isAuthenticated && Object.keys(info).length === 0);
    if (isAuthenticated && Object.keys(info).length === 0) {
      getUserInfo();
    }
  }, []);
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
  info: state.user.info,
});

export default connect(
  mapStateToProps,
  actions,
)(Pages);
