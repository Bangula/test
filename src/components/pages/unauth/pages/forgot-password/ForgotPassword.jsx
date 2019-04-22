import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import * as actions from '@state/actions';
import InputField from '@components/InputField/InputField';

import PasswordResetLinkSent from '../../common/password-reset-link-sent/PasswordResetLinkSent';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Required'),
});

const ForgotPassword = ({ passwordResetLinkSent, sendPasswordResetLink }) => {
  return passwordResetLinkSent ? (
    <PasswordResetLinkSent />
  ) : (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={sendPasswordResetLink}>
      {({ errors, touched }) => (
        <div className="forgot-password">
          <h1 className="title-primary">Forgot your password?</h1>
          <p className="title-subtext font-arial">
            Enter the email address used for your account <br /> below and we
            will send you a password reset link.
          </p>

          <div className="form-holder">
            <Form>
              <Field
                name="email"
                type="email"
                render={({ field }) => (
                  <InputField
                    {...field}
                    type="email"
                    label="email"
                    placeholder="example@axe.com"
                    hasError={touched.email && errors.email}
                  />
                )}
              />
              <button type="submit" className="btn wide">
                send reset link
              </button>
            </Form>
          </div>

          <Link to="/auth/sign-in" className="back-link font-arial" href="#">
            Back to sign in
          </Link>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = state => ({
  passwordResetLinkSent: state.user.passwordResetLinkSent,
});

export default connect(
  mapStateToProps,
  actions,
)(ForgotPassword);
