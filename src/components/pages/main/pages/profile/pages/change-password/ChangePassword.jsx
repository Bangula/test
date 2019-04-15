import React from 'react';
import InputField from '@components/InputField/InputField';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  return (
    <div className="change-password">
      <div className="profile__title-holder">
        <h1 className="title-primary">change password</h1>
      </div>
      <div className="profile__content-holder">
        <div className="profile__content--left">
          <InputField label="Old PASSWORD:" type="password" />
        </div>

        <div className="profile__content--right">
          <InputField label="New Password:" type="password" />
          <InputField label="Confirm New Password:" type="password" />
        </div>
      </div>

      <div className="my-profile__buttons">
        <Link className="btn wide dark">cancel</Link>
        <Link className="btn wide tirques">change password</Link>
      </div>
    </div>
  );
};

export default ChangePassword;
