import React from 'react';
import backgroundImage from '@images/profile-page.png';

const ProfilePageLayout = ({ children }) => {
  return (
    <div
      className="w-screen bg-contain bg-no-repeat pt-5 profile-page-layout"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: `calc(100vh - 186px)`,
      }}>
      <div className="container">
        <div className="profile-content__holder">
          <div className="profile-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageLayout;
