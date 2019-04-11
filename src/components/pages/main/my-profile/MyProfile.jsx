import React, { lazy } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { MY_PROFILE_ROUTES } from '@constants/routes';
import ProfilePageLayout from './components/ProfilePageLayout';

const MyProfile = ({ match: { path } }) => {
  console.log(MY_PROFILE_ROUTES);
  return (
    <ProfilePageLayout>
      <Switch>
        {MY_PROFILE_ROUTES.map(route => (
          <Route
            key={route.path}
            path={`${path}/${route.path}`}
            component={lazy(() => import(`./pages/${route.path}`))}
          />
        ))}
      </Switch>
    </ProfilePageLayout>
  );
};

export default withRouter(MyProfile);
