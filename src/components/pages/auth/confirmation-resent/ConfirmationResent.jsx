import React from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationPageLayout } from '@components';
const ConfirmationResent = () => {
  return (
    <AuthenticationPageLayout>
      <div className="confirmation-resent">
        <h1 className="title-primary">
          Confirmation <br /> email sent
        </h1>
        <p className="title-subtext bold">
          A new confirmation email has been sent.
        </p>
        <p className="title-subtext welcome">
          This process should only take a few minutes. Please click on the link
          in the email to complete your registration.
        </p>

        <Link to="/auth/sign-in">
          <button className="btn">sign in</button>
        </Link>
        <p className="title-subtext confirmation">
          Did not receive an email?&nbsp;
          <a className="auth-link-text" href="#">
            Resend confirmation email
          </a>
        </p>
      </div>
    </AuthenticationPageLayout>
  );
};

export default ConfirmationResent;
