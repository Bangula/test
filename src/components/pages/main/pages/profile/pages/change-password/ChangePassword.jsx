import React from 'react';
import InputField from '@components/InputField/InputField';
import { Link } from 'react-router-dom';
import Button from '@components/Button/Button';

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
        <Link to="/profile">
          <Button className="wide btn-bg-transparent btn-text-white btn-border-tirques">
            cancel
          </Button>
        </Link>
        <Button className="wide btn-bg-tirques btn-text-black ml-3">
          change password
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;
