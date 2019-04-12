import React from 'react';
import logo from '@images/white-axe-logo@3x.png';

const AuthenticationPageLayout = ({ children }) => {
  return (
    <div className="auth-page-layout__wrapper">
      <div className="auth-page-layout__content">
        <div className="auth-page-layout__content--holder">{children}</div>
      </div>

      <div className="auth-logo">
        <img src={logo} alt="axe-logo" />
      </div>
    </div>
  );
};

export default AuthenticationPageLayout;
