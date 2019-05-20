import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Alert from 'react-s-alert';
import { fetchUser } from '@endpoints/user';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import InputField from '@components/InputField/InputField';
import backgroundImage from '@images/2061080.png';
import SelectField from '@components/SelectField/SelectField';
import { updateUserInfo, getRoles } from '@endpoints/user';

import { phoneRegEx } from '@constants/regex';

const EditUserSchema = Yup.object().shape({
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
    .matches(phoneRegEx)
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required(),

  email: Yup.string()
    .email('Invalid Email')
    .required('Required'),

  role_id: Yup.string().required('Required'),
});

const EditUser = props => {
  const userId = props.match.params.id;
  const [user, setUser] = React.useState({});
  const [roles, setRoles] = React.useState([]);

  React.useEffect(() => {
    const loadRoles = async () => {
      const { data, error } = await getRoles();

      setRoles(data.data.data);
    };

    loadRoles();
  }, []);

  React.useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await fetchUser(userId);
      if (data) {
        setUser(data.data.data);
      }
    };

    loadUser();
  }, []);

  const { name, surname, email, phone, job_title } = user;

  const initialValues = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    job_title: '',
    role_id: '',
  };

  const fieldsFromUser = {
    ...(name && { name }),
    ...(surname && { surname }),
    ...(email && { email }),
    ...(phone && { phone }),
    ...(job_title && { job_title }),
  };

  return (
    <Formik
      validationSchema={EditUserSchema}
      onSubmit={async values => {
        const { data, error } = await updateUserInfo(userId, values);

        if (data) {
          console.log('success');
          Alert.success('User updated!');
        } else {
          console.log('error');
          Alert.error('User update failed!');
        }
      }}
      initialValues={{ ...initialValues, ...fieldsFromUser }}
      enableReinitialize>
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <div
            className="admin__edit content-bg"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'right top',
            }}>
            <div className="container mx-auto">
              <div style={{ maxWidth: '800px' }}>
                <div className="mb-10">
                  <PrimaryTitle>Edit Profile</PrimaryTitle>
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
                    onClick={props.history.goBack}
                    className="border-2 border-pink text-white rounded py-2 text-2xl"
                    style={{ width: '200px' }}>
                    cancel
                  </button>

                  <button
                    type="submit"
                    className="border-2 border-pink bg-pink text-white rounded py-2 text-2xl ml-2"
                    style={{ width: '200px' }}>
                    update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditUser;
