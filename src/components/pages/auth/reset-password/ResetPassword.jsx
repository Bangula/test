import React from 'react';
import { AuthenticationPageLayout } from '@components';
import InputField from '@components/InputField';

const ResetPassword = () => {
  return (
    <AuthenticationPageLayout>
      <div className="reset-password">
        <h1 className="title-primary">reset password</h1>
        <p className="title-subtext">
          Choose a new password for your account. You will <br /> automatically
          be logged in once you submit it.
        </p>

        <div className="form-holder">
          <form>
            <InputField
              type="password"
              label="password"
              placeholder="password"
            />
            <button className="btn wide">reset and sign in</button>
          </form>
        </div>
      </div>
    </AuthenticationPageLayout>
  );
};

export default ResetPassword;
