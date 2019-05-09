import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Selection from './Selection/Selection';
import Home from './Home/Home';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/selection" component={Selection} />
    </Switch>
  );
};
