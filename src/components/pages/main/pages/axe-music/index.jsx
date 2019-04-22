import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import AxeMusic from './pages/AxeMusic';
import Logos from './pages/Logos';

const component = props => (
  <Switch>
    <Route path={`${props.match.url}/logos`} component={Logos} />
    <Route path={`${props.match.url}/`} component={AxeMusic} />
  </Switch>
);

export default withRouter(component);
