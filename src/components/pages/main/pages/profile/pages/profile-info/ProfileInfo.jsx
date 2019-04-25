import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@components/Button/Button';

const ProfileInfo = ({ name, surname, job_title, email, phone }) => {
  return (
    <div className="my-profile">
      <div className="profile__title-holder">
        <div className="my-profile__title-holder">
          <h1 className="title-primary">my profile</h1>

          <div className="my-profile__buttons">
            <Link to="/profile/change-password">
              <Button
                className="wide"
                bgColor="btn-bg-transparent"
                border="btn-border-tirques"
                textColor="btn-text-white">
                change password
              </Button>
            </Link>
            <Link to="/profile/edit" className="ml-3">
              <Button
                className="wide"
                bgColor="btn-bg-tirques"
                border="btn-border-tirques"
                textColor="btn-text-black">
                edit profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="profile__content-holder">
        <div className="profile__content--left">
          <div className="details-box">
            <p className="label">Profile details:</p>

            <div className="details-box__holder font-arial">
              <div className="details-box__left">
                <p className="profile-details__label">Name:</p>
                <p className="profile-details__label">Surname:</p>
                <p className="profile-details__label">Job Title:</p>
              </div>

              <div className="details-box__right">
                <p className="profile-details__name">{name}</p>
                <p className="profile-details__name">{surname}</p>
                <p className="profile-details__name">{job_title}</p>
              </div>
            </div>
          </div>

          <div className="details-box">
            <p className="label">User Role:</p>

            <div className="details-box__holder font-arial">
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

            <div className="details-box__holder font-arial">
              <div className="details-box__left">
                <p className="profile-details__label">Email:</p>
                <p className="profile-details__label">Phone Number:</p>
              </div>

              <div className="details-box__right">
                <p className="profile-details__name">{email}</p>
                <p className="profile-details__name">{phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { name, surname, job_title, email, phone } = state.user.info;

  return { name, surname, job_title, email, phone };
};

export default connect(mapStateToProps)(ProfileInfo);
