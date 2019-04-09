import React from 'react';
import { AuthenticationPageLayout } from '@components/index';

const SignIn: React.FC = () => {
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
          <a className="auth-link-text" href="#">
            Sign Up
          </a>
        </p>
      </div>
    </AuthenticationPageLayout>
  );
};

export default SignIn;
