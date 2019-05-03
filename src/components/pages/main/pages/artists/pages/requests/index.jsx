import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Events from './pages/events';
import Experiences from './pages/experiences';
import Merchandise from './pages/merchandise';

const Requests = ({ match: { path } }) => {
  return (
    <div>
      <div className="flex items-center pt-12">
        <h1 className="mr-8">Requests</h1>
        <div>
          <NavLink
            exact
            activeClassName="link-tab--selected-tirquise"
            className="link-tab"
            to={`${path}/`}>
            Events
          </NavLink>
          <NavLink
            activeClassName="link-tab--selected-tirquise"
            className="link-tab"
            to={`${path}/experiences`}>
            Experiences
          </NavLink>
          <NavLink
            activeClassName="link-tab--selected-tirquise"
            className="link-tab"
            to={`${path}/merchandise`}>
            Gifts & Merch
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route path={`${path}/experiences`} component={Experiences} />
        <Route path={`${path}/merchandise`} component={Merchandise} />
        <Route exact path={`${path}/`} component={Events} />
      </Switch>
    </div>
  );
};

export default Requests;
