import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import UnauthPagesLayout from './common/UnauthPagesLayout/UnauthPagesLayout';

import ForgotPassword from './pages/forgot-password/ForgotPassword';
import ResetPassword from './pages/reset-password/ResetPassword';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import SignedOut from './pages/signed-out/SignedOut';
import ConfirmUser from './pages/confirm-user/ConfirmUser';

const AuthPages = ({ match: { path } }) => {
  const root = path === '/' ? '' : path;
  return (
    <UnauthPagesLayout>
      <Switch>
        <Route path={`${root}/forgot-password`} component={ForgotPassword} />
        <Route path={`${root}/reset-password`} component={ResetPassword} />
        <Route path={`${root}/sign-up`} component={SignUp} />
        <Route path={`${root}/signed-out`} component={SignedOut} />
        <Route path={`${root}/confirm-user`} component={ConfirmUser} />
        <Route exact path={`${root}/`} component={SignIn} />
        <Route component={() => <Redirect to={`${root}/`} />} />
      </Switch>
    </UnauthPagesLayout>
  );
};

export default withRouter(AuthPages);
