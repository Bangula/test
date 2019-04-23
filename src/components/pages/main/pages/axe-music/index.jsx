import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import AxeMusic from './pages/AxeMusic';
import TemplateComponent from './pages/TemplateComponent';

const component = props => (
  <div className="pt-12">
    <Switch>
      <Route
        path={`${props.match.url}/creative-assets`}
        component={TemplateComponent}
      />
      <Route path={`${props.match.url}/fonts`} component={TemplateComponent} />
      <Route path={`${props.match.url}/logos`} component={TemplateComponent} />
      <Route path={`${props.match.url}/`} component={AxeMusic} />
    </Switch>
  </div>
);

export default withRouter(component);
