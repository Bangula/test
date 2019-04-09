import React from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationPageLayout } from '@components';

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
          <form action="">form</form>
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
