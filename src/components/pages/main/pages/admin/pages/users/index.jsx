import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserManagement from './pages/user-management';

const Users = ({ match: { path } }) => {
  return (
    <div>
      <h1>Users</h1>
      <Switch>
        <Route path={`${path}/`} component={UserManagement} />
      </Switch>
    </div>
  );
};

export default Users;
