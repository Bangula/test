import React from 'react';
import InputField from '@components/InputField/InputField';
import { Link } from 'react-router-dom';
import Button from '@components/Button/Button';

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <div className="profile__title-holder">
        <h1 className="title-primary">edit profile</h1>
      </div>
      <div className="profile__content-holder">
        <div className="profile__content--left">
          <InputField label="name:" type="text" />
          <InputField label="surname:" type="text" />
          <InputField label="job title:" type="text" />
        </div>

        <div className="profile__content--right">
          <InputField label="email:" type="email" />
          <InputField label="phone number:" type="number" />
        </div>
      </div>

      <div className="my-profile__buttons">
        <Link to="/profile">
          <Button className="wide btn-bg-transparent btn-text-white btn-border-tirques">
            cancel
          </Button>
        </Link>
        <Button className="wide btn-bg-tirques btn-text-black ml-3">
          confirm changes
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
