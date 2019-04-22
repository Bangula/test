import React from 'react';
import { Link } from 'react-router-dom';

const SignedOut = () => {
  return (
    <div className="signed-out">
      <h1 className="title-primary">signed out</h1>
      <p className="title-subtext font-arial">
        You have successfully signed out <br /> of your account.
      </p>

      <Link to="/auth/sign-in">
        <button className="btn">sign in</button>
      </Link>
    </div>
  );
};

export default SignedOut;
