import React from 'react';
import { AuthenticationPageLayout } from '@components';

const ForgotPassword = () => {
  return (
    <AuthenticationPageLayout>
      <div className="forgot-password">
        <h1 className="title-primary">Forgot your password?</h1>
        <p className="title-subtext">
          Enter the email address used for your account <br /> below and we will
          send you a password reset link.
        </p>

        <div className="form-holder">
          <form action="">form</form>
        </div>

        <button className="btn wide">send reset link</button>

        <a className="back-link" href="#">
          Back to sign in
        </a>
      </div>
    </AuthenticationPageLayout>
  );
};

export default ForgotPassword;
