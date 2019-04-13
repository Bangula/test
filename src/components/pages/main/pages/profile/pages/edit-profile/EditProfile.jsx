import React from 'react';
import InputField from '@components/InputField';
import { Link } from 'react-router-dom';

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
        <Link className="btn wide dark">cancel</Link>
        <Link className="btn wide tirques">confirm changes</Link>
      </div>
    </div>
  );
};

export default EditProfile;
