import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputField from '@components/InputField';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export default () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInSchema}
      onSubmit={values => console.log(values)}>
      {({ errors, touched }) => (
        <div className="sign-in">
          <h1 className="title-primary">sign in</h1>
          <p className="title-subtext">
            Enter your details to access Axe's <br />
            Passions Portal
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
              <button type="submit" className="btn">
                sign in
              </button>
            </Form>
          </div>

          <p className="title-subtext confirmation">
            Don't have an account yet?&nbsp;
            <Link to="/register" className="auth-link-text">
              Sign Up
            </Link>
          </p>
        </div>
      )}
    </Formik>
  );
};
