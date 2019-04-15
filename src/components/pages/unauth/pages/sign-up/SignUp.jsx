import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputField from '@components/InputField/InputField';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),

  surname: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),

  email: Yup.string()
    .email('Invalid Email')
    .required('Required'),

  phone_number: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required(),

  // market: Yup.string().required('Required'),

  password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const SignUp = ({ match: { url } }) => {
  const root = url === '/' ? '' : url;
  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        market: '',
        password: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => console.log(values)}>
      {({ errors, touched }) => (
        <div className="sign-up">
          <h1 className="title-primary">Sign Up</h1>
          <p className="title-subtext">
            Enter your details to sign up to Axe's <br /> Passions Portal.
          </p>

          <div className="form-holder">
            <Form>
              <Field
                name="name"
                type="text"
                render={({ field }) => (
                  <InputField
                    {...field}
                    type="text"
                    label="name"
                    placeholder="name"
                    hasError={touched.name && errors.name}
                  />
                )}
              />
              <Field
                name="surname"
                type="text"
                render={({ field }) => (
                  <InputField
                    {...field}
                    type="text"
                    label="surname"
                    placeholder="surname"
                    hasError={touched.surname && errors.surname}
                  />
                )}
              />
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
                name="phone_number"
                type="number"
                render={({ field }) => (
                  <InputField
                    {...field}
                    type="number"
                    label="phone number"
                    placeholder="+44 (0) 0000 000 000"
                    hasError={touched.phone_number && errors.phone_number}
                  />
                )}
              />

              <InputField type="text" label="market" placeholder="market" />
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
                sign up
              </button>
            </Form>
          </div>

          <p className="title-subtext confirmation">
            Already got an account?&nbsp;
            <Link to={`/`} className="auth-link-text">
              Sign In
            </Link>
          </p>
        </div>
      )}
    </Formik>
  );
};

export default withRouter(SignUp);
