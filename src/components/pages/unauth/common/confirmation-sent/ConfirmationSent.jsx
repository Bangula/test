import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '@state/actions';

const ConfirmationSent = ({ userName, resendConfirmationMail }) => {
  return (
    <div className="confirmation-email">
      <h1 className="title-primary">Welcome {userName}!</h1>
      <p className="title-subtext bold">A confirmation email has been sent.</p>
      <p className="title-subtext welcome">
        Thank you for signing up to Axe Music Passions Portal. A confirmation
        email has been sent to the address you submitted. Please click the link
        in the email to complete your registration.
      </p>

      <Link to="/auth/sign-in">
        <button className="btn">sign in</button>
      </Link>
      <p className="title-subtext confirmation">
        Did not receive an email?&nbsp;
        <button onClick={resendConfirmationMail} className="auth-link-text">
          Resend confirmation email
        </button>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: state.user.info.name,
});

export default connect(
  mapStateToProps,
  actions,
)(ConfirmationSent);
