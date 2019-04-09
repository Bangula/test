import React from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationPageLayout } from '@components';

const ConfirmationSent = () => {
  return (
    <AuthenticationPageLayout>
      <div className="confirmation-email">
        <h1 className="title-primary">Welcome John!</h1>
        <p className="title-subtext bold">
          A confirmation email has been sent.
        </p>
        <p className="title-subtext welcome">
          Thank you for signing up to Axe Music Passions Portal. A confirmation
          email has been sent to the address you submitted. Please click the
          link in the email to complete your registration.
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

export default ConfirmationSent;
