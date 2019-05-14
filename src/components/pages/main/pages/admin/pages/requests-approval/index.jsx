import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Artist from './pages/artist';
import Details from './pages/details';
import LatestRequests from './pages';

const RequestApproval = ({ match: { path } }) => (
  <div className="container mx-auto">
    <Switch>
      <Route path={`${path}/artist/:artist_id`} component={Artist} />
      <Route path={`${path}/:id`} component={Details} />
      <Route path={`${path}`} component={LatestRequests} />
    </Switch>
  </div>
);

export default RequestApproval;
