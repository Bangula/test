import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Users from './pages/users';

const Admin = ({ match: { path } }) => {
  return (
    <Switch>
      <Route path={`${path}/users`} component={Users} />
      <Route path={`${path}/`} component={Dashboard} />
    </Switch>
  );
};

export default Admin;
