import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArtistsList from './Artists';
import Artist from './pages/artist';

const Artists = ({ match: { path } }) => {
  return (
    <Switch>
      <Route path={`${path}/artist`} component={Artist} />
      <Route exact path={`${path}/`} component={ArtistsList} />
    </Switch>
  );
};

export default Artists;
