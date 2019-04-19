import React from 'react';
import InputField from '@components/InputField/InputField';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import * as actions from '@state/actions';
import Button from '@components/Button/Button';

const EditProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required(),
  surname: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required(),

  job_title: Yup.string().required(),

  phone: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required(),

  email: Yup.string()
    .email('Invalid Email')
    .required('Required'),
});

const EditProfile = ({
  name,
  surname,
  email,
  phone,
  job_title,
  updateUser,
}) => {
  const initialValues = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    job_title: '',
  };

  const fieldsFromState = {
    ...(name && { name }),
    ...(surname && { surname }),
    ...(email && { email }),
    ...(phone && { phone }),
    ...(job_title && { job_title }),
  };
  return (
    <Formik
      validationSchema={EditProfileSchema}
      initialValues={{ ...initialValues, ...fieldsFromState }}
      enableReinitialize
      onSubmit={updateUser}>
      {({ errors, touched }) => (
        <Form>
          <div className="edit-profile">
            <div className="profile__title-holder">
              <h1 className="title-primary">edit profile</h1>
            </div>
            <div className="profile__content-holder">
              <div className="profile__content--left">
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
                  name="job_title"
                  type="text"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="text"
                      label="job title"
                      placeholder="job title"
                      hasError={touched.job_title && errors.job_title}
                    />
                  )}
                />
              </div>

              <div className="profile__content--right">
                <Field
                  name="email"
                  type="email"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="email"
                      label="email"
                      placeholder="email"
                      hasError={touched.email && errors.email}
                    />
                  )}
                />
                <Field
                  name="phone"
                  type="number"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="number"
                      label="phone"
                      placeholder="phone"
                      hasError={touched.phone && errors.phone}
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
                confirm changes
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = state => {
  const { name, surname, email, phone, job_title } = state.user.info;
  console.log({ name, surname, email });

  return { name, surname, email, phone, job_title };
};

export default connect(
  mapStateToProps,
  actions,
)(EditProfile);
