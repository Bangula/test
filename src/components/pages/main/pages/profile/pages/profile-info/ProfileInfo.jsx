import React from 'react';
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
  return (
    <div className="my-profile">
      <div className="profile__title-holder">
        <div className="my-profile__title-holder">
          <h1 className="title-primary">my profile</h1>

          <div className="my-profile__buttons">
            <Link className="btn wide dark">Change Password</Link>
            <Link className="btn wide tirques">Edit Profile</Link>
          </div>
        </div>
      </div>
      <div className="profile__content-holder">
        <div className="profile__content--left">
          <div className="details-box">
            <p className="label">Profile details:</p>

            <div className="details-box__holder">
              <div className="details-box__left">
                <p className="profile-details__label">Name:</p>
                <p className="profile-details__label">Surname:</p>
                <p className="profile-details__label">Job Title:</p>
              </div>

              <div className="details-box__right">
                <p className="profile-details__name">Meg</p>
                <p className="profile-details__name">Rigden</p>
                <p className="profile-details__name">Lorem Ipsum</p>
              </div>
            </div>
          </div>

          <div className="details-box">
            <p className="label">User Role:</p>

            <div className="details-box__holder">
              <div className="details-box__left">
                <p className="profile-details__label">Role:</p>
              </div>

              <div className="details-box__right">
                <p className="profile-details__name">User Role 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile__content--right">
          <div className="details-box">
            <p className="label">Contact details:</p>

            <div className="details-box__holder">
              <div className="details-box__left">
                <p className="profile-details__label">Email:</p>
                <p className="profile-details__label">Phone Number:</p>
              </div>

              <div className="details-box__right">
                <p className="profile-details__name">meg.rigden@example.com</p>
                <p className="profile-details__name">+44 (0) 7123 456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
