import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { isAuthenticated } from '@helpers/auth';

import AuthRoutes from '../Auth/AuthRoutes';
import UnauthRoutes from '../Unauth/UnauthRoutes';

export const ApplicationRouterContext = React.createContext();

export default class ApplicationRouter extends Component {
  state = {
    authenticated: true,
  };
  componentWillMount() {
    // We need to check here if the user is authenticated
    // this.setState({ authenticated: isAuthenticated() });
  }
  render() {
    const ActiveRoutes = this.state.authenticated ? AuthRoutes : UnauthRoutes;
    return (
      <ApplicationRouterContext.Provider
        value={{
          methods: {
            login: this.login,
            logout: this.logout,
          },
        }}>
        <Router>
          <Switch>
            <ActiveRoutes />
          </Switch>
        </Router>
      </ApplicationRouterContext.Provider>
    );
  }
  login = () => {
    // Do what you need to login
  };
  logout = () => {
    // Do what you need to logout
  };
}
