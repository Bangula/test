import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputField from '@components/InputField';

const PasswordResetSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const ResetPassword = () => {
  return (
    <Formik
      initialValues={{ password: '' }}
      validationSchema={PasswordResetSchema}
      onSubmit={values => console.log(values)}>
      >
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

export default ResetPassword;
