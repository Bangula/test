import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ProfilePageLayout from './common/ProfilePageLayout';

import ProfileInfo from './pages/profile-info/ProfileInfo';
import ChangePassword from './pages/change-password/ChangePassword';
import EditProfile from './pages/edit-profile/EditProfile';

const MyProfile = ({ match: { path } }) => {
  return (
    <ProfilePageLayout>
      <Switch>
        <Route path={`${path}/change-password`} component={ChangePassword} />
        <Route path={`${path}/edit`} component={EditProfile} />
        <Route path={`${path}/`} component={ProfileInfo} />
      </Switch>
    </ProfilePageLayout>
  );
};

export default withRouter(MyProfile);
