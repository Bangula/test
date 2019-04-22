import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import AxeMusic from './pages/AxeMusic';

const component = props => (
  <>
    <Route path={`${props.match.url}/`} component={AxeMusic} />
  </>
);

export default withRouter(component);
