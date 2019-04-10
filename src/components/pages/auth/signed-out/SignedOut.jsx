import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationPageLayout from '@components/AuthenticationPageLayout';

const SignedOut = () => {
  return (
    <AuthenticationPageLayout>
      <div className="signed-out">
        <h1 className="title-primary">signed out</h1>
        <p className="title-subtext">
          You have successfully signed out <br /> of your account.
        </p>

        <Link to="/auth/sign-in">
          <button className="btn">sign in</button>
        </Link>
      </div>
    </AuthenticationPageLayout>
  );
};

export default SignedOut;
