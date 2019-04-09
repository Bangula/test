import React from 'react';
import { AuthenticationPageLayout } from '@components/index';

const SignedOut: React.FC = () => {
  return (
    <AuthenticationPageLayout>
      <div className="signed-out">
        <h1 className="title-primary">signed out</h1>
        <p className="title-subtext">
          You have successfully signed out <br /> of your account.
        </p>

        <button className="btn">sign in</button>
      </div>
    </AuthenticationPageLayout>
  );
};

export default SignedOut;
