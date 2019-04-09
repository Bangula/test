import React from 'react';
import { AuthenticationPageLayout } from '@components/index';

const SignUp: React.FC = () => {
  return (
    <AuthenticationPageLayout>
      <div className="sign-up">
        <h1 className="title-primary">Sign Up</h1>
        <p>
          Enter your details to sign up to Axe's <br /> Passions Portal.
        </p>
      </div>
    </AuthenticationPageLayout>
  );
};

export default SignUp;
