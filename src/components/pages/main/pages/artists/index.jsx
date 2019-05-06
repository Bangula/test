import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArtistsList from './pages';
import Artist from './pages/artist';
import Requests from './pages/requests';
import AssetHub from './pages/asset-hub';
import EventRequest from './pages/event-request';
import ExperienceRequest from './pages/experience-request';
import MerchandiseRequest from './pages/merchandise-request';

const Artists = ({ match: { path } }) => {
  return (
    <Switch>
      <Route path={`${path}/artist/event-request`} component={EventRequest} />
      <Route
        path={`${path}/artist/experience-request`}
        component={ExperienceRequest}
      />
      <Route
        path={`${path}/artist/merchandise-request`}
        component={MerchandiseRequest}
      />
      <Route path={`${path}/artist/requests`} component={Requests} />
      <Route path={`${path}/artist/asset-hub`} component={AssetHub} />
      <Route path={`${path}/artist`} component={Artist} />
      <Route exact path={`${path}/`} component={ArtistsList} />
    </Switch>
  );
};

export default Artists;
