import React from 'react';
import { AuthenticationPageLayout } from '@components/index';

const SignedOut: React.FC = () => {
  return (
    <AuthenticationPageLayout>
      <div>SignedOut</div>
    </AuthenticationPageLayout>
  );
};

export default SignedOut;
