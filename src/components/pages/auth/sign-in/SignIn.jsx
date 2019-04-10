import React from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationPageLayout } from '@components';
import InputField from '@components/InputField';

const SignIn = () => {
  return (
    <AuthenticationPageLayout>
      <div className="sign-in">
        <h1 className="title-primary">sign in</h1>
        <p className="title-subtext">
          Enter your details to access Axe's <br />
          Passions Portal
        </p>

        <div className="form-holder">
          <form action="">
            <InputField label="email" placeholder="email" type="email" />
            <InputField
              label="password"
              placeholder="password"
              type="password"
            />
            <div className="forgot-pass">
              <Link to="/auth/forgot-password">Forgot Password?</Link>
            </div>
          </form>
        </div>

        <button className="btn">sign in</button>
        <p className="title-subtext confirmation">
          Don't have an account yet?&nbsp;
          <Link to="/auth/sign-up" className="auth-link-text">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthenticationPageLayout>
  );
};

export default SignIn;
