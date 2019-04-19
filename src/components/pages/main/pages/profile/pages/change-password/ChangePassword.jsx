import React from 'react';
import InputField from '@components/InputField/InputField';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@components/Button/Button';

const ChangePasswordSchema = Yup.object({
  old_password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Old password is required'),
  new_password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('New password is required'),
  confirm_new_password: Yup.string()
    .oneOf([Yup.ref('new_password'), null])
    .required('Password confirm is required'),
});

const ChangePassword = () => {
  return (
    <Formik
      validationSchema={ChangePasswordSchema}
      initialValues={{
        old_password: '',
        new_password: '',
        confirm_new_password: '',
      }}
      onSubmit={values => console.log(values)}>
      {({ errors, touched }) => (
        <Form>
          <div className="change-password">
            <div className="profile__title-holder">
              <h1 className="title-primary">change password</h1>
            </div>
            <div className="profile__content-holder">
              <div className="profile__content--left">
                <Field
                  name="old_password"
                  type="password"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="password"
                      label="old password"
                      hasError={touched.old_password && errors.old_password}
                    />
                  )}
                />
              </div>

              <div className="profile__content--right">
                <Field
                  name="new_password"
                  type="password"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="password"
                      label="new password"
                      hasError={touched.new_password && errors.new_password}
                    />
                  )}
                />

                <Field
                  name="confirm_new_password"
                  type="password"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="password"
                      label="confirm new password"
                      hasError={
                        touched.confirm_new_password &&
                        errors.confirm_new_password
                      }
                    />
                  )}
                />
              </div>
            </div>

            <div className="my-profile__buttons">
              <Link to="/profile">
                <Button className="wide btn-bg-transparent btn-text-white btn-border-tirques">
                  cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className="wide btn-bg-tirques btn-text-black ml-3">
                change password
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePassword;
