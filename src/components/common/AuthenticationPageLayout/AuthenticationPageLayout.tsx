import React from 'react';

const AuthenticationPageLayout: React.FC = ({ children }) => {
  return (
    <div className="auth-page-layout__wrapper">
      <div className="auth-page-layout__content">
        <div className="auth-page-layout__content--holder">{children}</div>
      </div>
    </div>
  );
};

export default AuthenticationPageLayout;
