import React from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationPageLayout } from '@components';
import InputField from '@components/InputField';

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
          <form action="">
            <InputField
              type="email"
              label="email"
              placeholder="example@axe.com"
            />
          </form>
        </div>

        <button className="btn wide">send reset link</button>

        <Link to="/auth/sign-in" className="back-link" href="#">
          Back to sign in
        </Link>
      </div>
    </AuthenticationPageLayout>
  );
};

export default ForgotPassword;
