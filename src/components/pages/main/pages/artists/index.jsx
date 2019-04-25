import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArtistsList from './Artists';
const Artists = ({ match: { path } }) => {
  return (
    <Switch>
      <Route path={`${path}/`} component={ArtistsList} />
    </Switch>
  );
};

export default Artists;
