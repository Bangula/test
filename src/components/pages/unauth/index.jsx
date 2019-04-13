import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AuthenticationPageLayout from './common/AuthenticationPageLayout';

import ConfirmationSent from './pages/confirmation-sent/ConfirmationSent';
import ConfirmationResent from './pages/confirmation-resent/ConfirmationResent';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import PasswordResetLinkSent from './pages/password-reset-link-sent/PasswordResetLinkSent';
import ResetPassword from './pages/reset-password/ResetPassword';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import SignedOut from './pages/signed-out/SignedOut';

const AuthPages = ({ match: { path } }) => {
  const root = path === '/' ? '' : path;
  return (
    <AuthenticationPageLayout>
      <Switch>
        <Route
          path={`${root}/confirmation-sent`}
          component={ConfirmationSent}
        />
        <Route
          path={`${root}/confirmation-resent`}
          component={ConfirmationResent}
        />
        <Route path={`${root}/forgot-password`} component={ForgotPassword} />
        <Route
          path={`${root}/password-reset-link-sent`}
          component={PasswordResetLinkSent}
        />
        <Route path={`${root}/reset-password`} component={ResetPassword} />
        <Route path={`${root}/`} component={SignIn} />
        <Route path={`${root}/sign-up`} component={SignUp} />
        <Route path={`${root}/signed-out`} component={SignedOut} />
        <Route component={() => <Redirect to={`${root}/sign-in`} />} />
      </Switch>
    </AuthenticationPageLayout>
  );
};

export default withRouter(AuthPages);
