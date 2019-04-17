import React from 'react';
import { Link } from 'react-router-dom';

const PasswordResetLinkSent = () => {
  return (
    <div className="password-reset">
      <h1 className="title-primary">Check your inbox!</h1>
      <p className="title-subtext bold">A password reset link has been sent.</p>

      <p className="title-subtext">
        Click the reset link in your inbox. This will allow you <br /> to choose
        a new password for your account.
      </p>

      <Link to="/auth/reset-password">
        <button className="btn wide">done</button>
      </Link>

      <Link to="/auth/sign-in" className="back-link" href="#">
        Back to sign in
      </Link>
    </div>
  );
};

export default PasswordResetLinkSent;
