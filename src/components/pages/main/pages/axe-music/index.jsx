import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AxeMusic from './pages/AxeMusic';
import AxeMusicIntroduction from './pages/AxeMusicIntroduction';
import TemplateComponent from './pages/TemplateComponent';
import ManageFolder from '@components/ManageFolder/ManageFolder';
import MediaLibrary from './pages/MediaLibrary';

export default ({ match }) => (
  <div className="pt-12">
    <Switch>
      <Route
        path={`${match.url}/introduction`}
        component={AxeMusicIntroduction}
      />
      <Route
        path={`${match.url}/media-library/manage/:id`}
        render={props => <ManageFolder {...props} cancelUrl="/axe-music" />}
      />
      <Route path={`${match.url}/media-library`} component={MediaLibrary} />
      <Route path={`${match.url}/:page`} component={TemplateComponent} />
      <Route path={`${match.url}/`} component={AxeMusic} />
    </Switch>
  </div>
);
