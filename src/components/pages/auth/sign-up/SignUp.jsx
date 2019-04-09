import React from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationPageLayout } from '@components';

const SignUp = () => {
  return (
    <AuthenticationPageLayout>
      <div className="sign-up">
        <h1 className="title-primary">Sign Up</h1>
        <p className="title-subtext">
          Enter your details to sign up to Axe's <br /> Passions Portal.
        </p>

        <div className="form-holder">
          <form>form</form>
        </div>

        <button className="btn">sign up</button>

        <p className="title-subtext confirmation">
          Already got an account?&nbsp;
          <Link to="/auth/sign-in" className="auth-link-text">
            Sign In
          </Link>
        </p>
      </div>
    </AuthenticationPageLayout>
  );
};

export default SignUp;
