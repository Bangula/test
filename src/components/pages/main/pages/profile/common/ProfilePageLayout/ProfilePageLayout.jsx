import React from 'react';

const ProfilePageLayout = ({ children }) => {
  return (
    <div className="profile-page-layout">
      <div className="container">
        <div className="profile-content__holder">
          <div className="profile-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageLayout;
