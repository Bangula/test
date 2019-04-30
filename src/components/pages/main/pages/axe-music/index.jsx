import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AxeMusic from './pages/AxeMusic';
import AxeMusicIntroduction from './pages/AxeMusicIntroduction';
import TemplateComponent from './pages/TemplateComponent';
import ManageSection from './pages/ManageSection';

const component = ({ match }) => (
  <div className="pt-12">
    <Switch>
      <Route
        path={`${match.url}/introduction`}
        component={AxeMusicIntroduction}
      />
      <Route
        path={`${match.url}/:page/manage-section/:id`}
        component={ManageSection}
      />
      <Route path={`${match.url}/:page`} component={TemplateComponent} />
      <Route path={`${match.url}/`} component={AxeMusic} />
    </Switch>
  </div>
);

export default component;
