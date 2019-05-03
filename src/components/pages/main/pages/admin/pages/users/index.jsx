import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import UserManagement from './pages/user-management/pages';
import EditUser from './pages/user-management/pages/edit-user';
import UserInfo from './pages/user-management/pages/user-info';
import NewUser from './pages/new/pages';

const Users = ({ match: { path } }) => {
  return (
    <div>
      <div className="container mx-auto">
        <NavLink exact to={`${path}/`}>
          User Management
        </NavLink>
        <NavLink to={`${path}/new`}>New User</NavLink>
      </div>
      <Switch>
        <Route path={`${path}/new`} component={NewUser} />
        <Route path={`${path}/:id/edit`} component={EditUser} />
        <Route path={`${path}/:id`} component={UserInfo} />
        <Route path={`${path}/`} component={UserManagement} />
      </Switch>
    </div>
  );
};

export default Users;
