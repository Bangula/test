import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import qs from 'query-string';

import * as actions from '@state/actions';

const ConfirmUser = props => {
  React.useEffect(() => {
    const values = qs.parse(props.location.search);
    console.log(values);
    props.verifyUser(values);
  }, []);
  return (
    <div className="confirmation-email">
      {props.isVerified ? (
        <>
          <h1 className="title-primary">Congrats!</h1>
          <p className="title-subtext bold">The user has been verified.</p>
          <p className="title-subtext welcome">
            Thank you for signing up to Axe Music Passions Portal. The account
            has been set up. You can now sign in and use the app.
          </p>

          <Link to="/auth/sign-in">
            <button className="btn">sign in</button>
          </Link>
        </>
      ) : (
        <div>User not verified</div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({ isVerified: state.user.isVerified });

export default connect(
  mapStateToProps,
  actions,
)(ConfirmUser);
