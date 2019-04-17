import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import qs from 'query-string';

import { passwordReset } from '@services/http/endpoints/user';
import * as actions from '@state/actions';
import InputField from '@components/InputField/InputField';

const PasswordResetSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const ResetPassword = props => {
  return (
    <Formik
      initialValues={{ password: '' }}
      validationSchema={PasswordResetSchema}
      onSubmit={async values => {
        const queryParams = qs.parse(props.location.search);
        const { data, error } = await passwordReset({
          ...queryParams,
          ...values,
        });
        if (data) {
          await props.logIn({
            email: queryParams.email,
            password: values.password,
          });
        }
      }}>
      {({ errors, touched }) => (
        <div className="reset-password">
          <h1 className="title-primary">reset password</h1>
          <p className="title-subtext">
            Choose a new password for your account. You will <br />{' '}
            automatically be logged in once you submit it.
          </p>

          <div className="form-holder">
            <Form>
              <Field
                name="password"
                type="password"
                render={({ field }) => (
                  <InputField
                    {...field}
                    type="password"
                    label="password"
                    placeholder="password"
                    hasError={touched.password && errors.password}
                  />
                )}
              />
              <button type="submit" className="btn wide">
                reset and sign in
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default connect(
  null,
  actions,
)(ResetPassword);
