import React from 'react';

const ProfilePageLayout = ({ children }) => {
  return (
    <div className="profile-page-layout">
      <div className="profile-layout-bg" />
      <div className="profile-layout-content">{children}</div>
    </div>
  );
};

export default ProfilePageLayout;
