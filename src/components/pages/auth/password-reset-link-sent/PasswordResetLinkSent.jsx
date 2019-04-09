import React from 'react';
import { AuthenticationPageLayout } from '@components';

const PasswordResetLinkSent = () => {
  return (
    <AuthenticationPageLayout>
      <div className="password-reset">
        <h1 className="title-primary">Check your inbox!</h1>
        <p className="title-subtext bold">
          A password reset link has been sent.
        </p>

        <p className="title-subtext">
          Click the reset link in your inbox. This will allow you <br /> to
          choose a new password for your account.
        </p>

        <button className="btn wide">done</button>

        <a className="back-link" href="#">
          Back to sign in
        </a>
      </div>
    </AuthenticationPageLayout>
  );
};

export default PasswordResetLinkSent;
