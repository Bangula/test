import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Users from './pages/users';

const Admin = ({ match: { path } }) => {
  return (
    <div className="admin pt-12">
      <Switch>
        <Route path={`${path}/users`} component={Users} />
        <Route path={`${path}/`} component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Admin;
