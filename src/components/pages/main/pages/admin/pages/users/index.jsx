import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserManagement from './pages/user-management/pages';
import EditUser from './pages/user-management/pages/edit-user';
import UserInfo from './pages/user-management/pages/user-info';

const Users = ({ match: { path } }) => {
  return (
    <div className="p-10">
      <h1>Users</h1>
      <Switch>
        <Route path={`${path}/:id/edit`} component={EditUser} />
        <Route path={`${path}/:id`} component={UserInfo} />
        <Route path={`${path}/`} component={UserManagement} />
      </Switch>
    </div>
  );
};

export default Users;
