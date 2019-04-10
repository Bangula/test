import React from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationPageLayout } from '@components';
import InputField from '@components/InputField';

const SignUp = () => {
  return (
    <AuthenticationPageLayout>
      <div className="sign-up">
        <h1 className="title-primary">Sign Up</h1>
        <p className="title-subtext">
          Enter your details to sign up to Axe's <br /> Passions Portal.
        </p>

        <div className="form-holder">
          <form>
            <InputField type="text" label="name" placeholder="name" />
            <InputField type="text" label="surname" placeholder="surname" />
            <InputField
              type="email"
              label="email"
              placeholder="example@axe.com"
            />
            <InputField
              type="number"
              label="phone number"
              placeholder="+44 (0) 0000 000 000"
            />
            <InputField type="text" label="market" placeholder="market" />
            <InputField
              type="password"
              label="password"
              placeholder="password"
            />
            <button className="btn">sign up</button>
          </form>
        </div>

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
