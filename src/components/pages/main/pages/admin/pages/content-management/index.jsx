import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContentManagementStart from './pages';
import NewEvent from './pages/events';
import NewExperience from './pages/experiences';
import NewGiftsOrMerch from './pages/gifts-merch';

const ContentManagement = ({ match: { path } }) => {
  return (
    <div className="container mx-auto admin__edit">
      <Switch>
        <Route path={`${path}/events`} component={NewEvent} />
        <Route path={`${path}/experiences`} component={NewExperience} />
        <Route path={`${path}/gifts-merch`} component={NewGiftsOrMerch} />
        <Route path={`${path}/`} component={ContentManagementStart} />
      </Switch>
    </div>
  );
};

export default ContentManagement;
