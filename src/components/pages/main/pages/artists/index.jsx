import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArtistsList from './pages';
import Artist from './pages/artist';
import Requests from './pages/requests';
import Request from './pages/request';
import MerchandiseRequest from './pages/merchandise-request';
import GiftingRequest from './pages/gifting-request';
import ManageFolder from '@components/ManageFolder/ManageFolder';

const Artists = ({ match: { path } }) => {
  return (
    <div className="relative">
      <Switch>
        {/* <Route path={`${path}/event-request`} component={EventRequest} /> */}
        {/* <Route
          path={`${path}/gifting-request/:id`}
          component={GiftingRequest}
        />
        <Route
          path={`${path}/merchandise-request`}
          component={MerchandiseRequest}
        /> */}
        {/* <Route
          path={`${path}/:artist_id/experience-request/:id`}
          component={ExperienceRequest}
        />
        <Route
          path={`${path}/:artist_id/event-request/:id`}
          component={ExperienceRequest}
        /> */}
        <Route
          path={`${path}/:artist/requests/events/:id`}
          render={props => <Request {...props} type="event" />}
        />
        <Route
          path={`${path}/:artist/requests/experiences/:id`}
          render={props => <Request {...props} type="experience" />}
        />
        <Route
          path={`${path}/:artist/requests/gifts/:id`}
          component={GiftingRequest}
        />
        <Route path={`${path}/:artist/requests`} component={Requests} />
        <Route
          path={`${path}/:artist/manage/:id`}
          render={props => {
            const propsToPass = { ...props, cancelUrl: '/artists' };
            return <ManageFolder {...propsToPass} />;
          }}
        />
        <Route path={`${path}/:artist`} component={Artist} />
        <Route exact path={`${path}/`} component={ArtistsList} />
      </Switch>
    </div>
  );
};

export default Artists;
