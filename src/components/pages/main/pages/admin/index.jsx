import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Users from './pages/users';
import ContentManagement from './pages/content-management';
import RequestsApproval from './pages/requests-approval';

const Admin = ({ match: { path } }) => {
  return (
    <div className="admin pt-12">
      <Switch>
        <Route
          path={`${path}/requests-approval`}
          component={RequestsApproval}
        />
        <Route path={`${path}/users`} component={Users} />
        <Route
          path={`${path}/content-management`}
          component={ContentManagement}
        />
        <Route path={`${path}/`} component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Admin;
