import React from 'react';
import { Switch, Route, NavLink, Link } from 'react-router-dom';

import Events from './pages/events';
import Experiences from './pages/experiences';
import Merchandise from './pages/gifts-and-merch';

const Requests = ({ match }) => {
  return (
    <div className="container mx-auto pt-12">
      <div className="mb-6 px-2">
        <Link to={`/artists/${match.params.artist}`}>
          <button className="px-8 pt-2 pb-1 text-white border border-tirques rounded text-xl">
            <span className="mr-4">&larr;</span>
            Back
          </button>
        </Link>
      </div>
      <div className="flex items-center mb-8 px-2">
        <h1 className="mr-8 text-5xl">Requests</h1>
        <div>
          <NavLink
            exact
            activeClassName="link-tab--selected-tirquise"
            className="link-tab"
            to={`${match.url}`}>
            Events
          </NavLink>
          <NavLink
            activeClassName="link-tab--selected-tirquise"
            className="link-tab"
            to={`${match.url}/experiences`}>
            Experiences
          </NavLink>
          <NavLink
            activeClassName="link-tab--selected-tirquise"
            className="link-tab"
            to={`${match.url}/merchandise`}>
            Gifts & Merch
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route path={`${match.url}/experiences`} component={Experiences} />
        <Route path={`${match.url}/merchandise`} component={Merchandise} />
        <Route exact path={`${match.url}/`} component={Events} />
      </Switch>
    </div>
  );
};

export default Requests;
