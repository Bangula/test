import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LatestRequests from './pages';
import RequestDetails from './pages/request-details';

const Requests = ({ match: { path } }) => {
  return (
    <div>
      <Switch>
        <Route path={`${path}/:id`} component={RequestDetails} />
        <Route path={`${path}`} component={LatestRequests} />
      </Switch>
    </div>
  );
};

export default Requests;
