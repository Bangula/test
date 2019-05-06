import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Alert from 'react-s-alert';
import backgroundImage from '@images/2061080.png';

import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import InputField from '@components/InputField/InputField';
import SelectField from '@components/SelectField/SelectField';
import { getRoles, createUser } from '@endpoints/user';

const NewUserSchema = Yup.object().shape({
  name: Yup.string()
    .strict()
    .trim()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required(),
  surname: Yup.string()
    .strict()
    .trim()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required(),

  job_title: Yup.string()
    .min(2, '2 characters min')
    .required(),

  phone: Yup.string()
    .matches(/^[0-9]+$/)
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required(),

  email: Yup.string()
    .email('Invalid Email')
    .required('Required'),

  role_id: Yup.string().required('Required'),
});

const NewUser = props => {
  const [roles, setRoles] = React.useState([]);
  const [createdUser, setCreatedUser] = React.useState(null);

  React.useEffect(() => {
    const loadRoles = async () => {
      const { data, error } = await getRoles();

      setRoles(data.data.data);
    };

    loadRoles();
  }, []);
  return (
    <div
      className="admin__edit content-bg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'right top',
      }}>
      <div className="container mx-auto">
        <div style={{ maxWidth: '800px' }}>
          {createdUser ? (
            <div>
              <div className="mb-10">
                <PrimaryTitle>Invite Sent</PrimaryTitle>
              </div>
              <p className="font-arial max-w-sm text-red">
                Your new user will soon receive their invitation to sign up.
              </p>
              <p className="font-arial max-w-sm my-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
                condimentum mattis.
              </p>
              <div className="flex justify-start">
                <Link to={`/admin/users/${createdUser.id}`}>
                  <button
                    className="border-2 border-pink text-white rounded py-2 text-2xl"
                    style={{ width: '200px' }}>
                    View User
                  </button>
                </Link>

                <button
                  onClick={() => setCreatedUser(null)}
                  className="border-2 border-pink bg-pink text-white rounded py-2 text-2xl ml-2"
                  style={{ width: '200px' }}>
                  Done
                </button>
              </div>
            </div>
          ) : (
            <Formik
              validationSchema={NewUserSchema}
              initialValues={{
                name: '',
                surname: '',
                email: '',
                phone: '',
                job_title: '',
                role_id: '',
              }}
              onSubmit={async values => {
                const { data, error } = await createUser(values);

                if (data) {
                  Alert.success('User Created');
                  setCreatedUser(data.data.data);
                } else {
                  Alert.error('Failed to create user!');
                }
              }}>
              {({ errors, touched, setFieldValue }) => (
                <Form>
                  <div className="mb-10">
                    <PrimaryTitle>New User</PrimaryTitle>
                  </div>
                  <div className="flex mb-12">
                    <div className="w-1/2 mr-16">
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
                      <SelectField
                        options={roles}
                        setFieldValue={setFieldValue}
                        label="role"
                        placeholder="role"
                        name="role_id"
                        hasError={touched.role_id && errors.role_id}
                      />
                    </div>
                    <div className="w-1/2 inputs-right">
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
                        name="phone"
                        type="number"
                        render={({ field }) => (
                          <InputField
                            {...field}
                            type="text"
                            label="phone number"
                            placeholder="+44 (0) 0000 000 000"
                            hasError={touched.phone && errors.phone}
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
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="border-2 border-pink bg-pink text-white rounded py-2 text-2xl ml-2"
                      style={{ width: '200px' }}>
                      Send Invite
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}{' '}
        </div>
      </div>
    </div>
  );
};

export default NewUser;
