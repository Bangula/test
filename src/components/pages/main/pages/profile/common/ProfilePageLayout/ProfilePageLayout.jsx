import React from 'react';
import backgroundImage from '@images/profile-page.png';

const ProfilePageLayout = ({ children }) => {
  return (
    <div
      className="profile-page-layout content-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto">
        <div className="profile-content__holder">
          <div className="profile-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageLayout;
