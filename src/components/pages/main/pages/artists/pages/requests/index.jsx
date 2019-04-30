import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Events from './pages/events';
import Experiences from './pages/experiences';
import Merchandise from './pages/merchandise';

const Requests = ({ match: { path } }) => {
  return (
    <div>
      <div>Requests</div>
      <Switch>
        <Route path={`${path}/`} component={Events} />
        <Route path={`${path}/experiences`} component={Experiences} />
        <Route path={`${path}/merchandise`} component={Merchandise} />
      </Switch>
    </div>
  );
};

export default Requests;
