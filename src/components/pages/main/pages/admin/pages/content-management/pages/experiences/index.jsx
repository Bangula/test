import React from 'react';
import { Formik, Field, FieldArray } from 'formik';
import * as Yup from 'yup';

import Alert from 'react-s-alert';
import http from '@services/http';
import history from '@services/history';

import Wizard, { Step, Steps, WithWizard } from '../../../../components/Wizard';
import NextButton from '../../../../components/NextButton';
import InputField from '@components/InputField/InputField';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Counter from '@components/Counter/Counter';
import Dropzone from '@components/Dropzone/Dropzone';

import { dateRegEx, durationRegEx } from '@constants/regex';
import { IMAGE_SIZE, SUPPORTED_FORMATS } from '@constants/images';

const requiredFieldsByStep = {
  1: [
    'name',
    'duration',
    'attendees',
    'location',
    'order_date_from',
    'order_date_to',
    'description',
  ],
  2: ['general_admission'],
  3: ['image'],
  4: ['permissions'],
};

const ExperienceSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('required'),
  duration: Yup.string()
    .matches(durationRegEx)
    .required('required'),
  attendees: Yup.number()
    .min(1)
    .required('required'),
  location: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('required'),
  order_date_from: Yup.string()
    .matches(dateRegEx)
    .required('required'),
  order_date_to: Yup.string()
    .matches(dateRegEx)
    .required('required'),
  description: Yup.string().max(255),
  image: Yup.mixed()
    .required('required')
    .test(
      'imageSize',
      'Image too large',
      value => value && value.size <= IMAGE_SIZE,
    )
    .test(
      'imageFormat',
      'Unsupported Format',
      value => value && SUPPORTED_FORMATS.includes(value.type),
    ),
  permissions: Yup.array()
    .min(1)
    .required('required'),
});

const initialValues = {
  name: '',
  location: '',
  attendees: 1,
  duration: '',
  order_date_from: '',
  order_date_to: '',
  description: '',
  general_admission: 1,
  image: null,
  permissions: [],
};

const submitNewExperience = artist_id => async values => {
  values.permissions = values.permissions.map(x => x.id);

  const payload = new FormData();

  for (const field in values) {
    if (field === 'permissions') {
      for (let i = 0; i < values.permissions.length; i++) {
        payload.append('permissions[]', values.permissions[i]);
      }
    } else {
      payload.append(field, values[field]);
    }
  }
  payload.append('artist_id', artist_id);
  payload.append('date_time', values.date + ' ' + values.time);

  try {
    await http.post('/experiences', payload);
    Alert.success('Success!');
    history.goBack();
  } catch (err) {
    console.log(err);
    Alert.error('Error');
  }
};

const NewExperience = props => {
  const [permissions, setPermissions] = React.useState([]);

  React.useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const result = await http('/markets');

        setPermissions(result.data.data);
        console.log(result.data.data);
      } catch (err) {
        console.log('Error fetching markets!');
      }
    };

    fetchMarkets();
  }, []);
  return (
    <div>
      <h3 className="text-red">New Experience Form</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={ExperienceSchema}
        onSubmit={submitNewExperience(props.match.params.artist_id)}>
        {({
          values,
          errors,
          touched,
          validateForm,
          setTouched,
          setFieldValue,
          submitForm,
        }) => (
          <Wizard startStep={1}>
            <div className="flex pb-4">
              <div className="w-2/3">
                <Steps>
                  <Step>
                    {ctx => (
                      <div>
                        <PrimaryTitle>Experience Details</PrimaryTitle>
                        <div className="flex">
                          <Field
                            name="name"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Experience"
                                placeholder="Experience Name"
                                hasError={touched.name && errors.name}
                              />
                            )}
                          />
                        </div>
                        <div className="flex">
                          <Field
                            name="location"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Location"
                                placeholder="Location"
                                hasError={touched.location && errors.location}
                              />
                            )}
                          />
                        </div>
                        <div className="flex">
                          <Field
                            name="attendees"
                            type="number"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Attendees"
                                placeholder="0"
                                hasError={touched.attendees && errors.attendees}
                              />
                            )}
                          />
                        </div>
                        <div className="flex">
                          <div className="w-1/3">
                            <Field
                              name="duration"
                              render={({ field }) => (
                                <InputField
                                  {...field}
                                  label="Duration"
                                  placeholder="00:00"
                                  hasError={touched.duration && errors.duration}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex">
                            <Field
                              name="order_date_from"
                              render={({ field }) => (
                                <InputField
                                  {...field}
                                  label="Order Date From"
                                  placeholder="DD/MM/YYYY"
                                  hasError={
                                    touched.order_date_from &&
                                    errors.order_date_from
                                  }
                                />
                              )}
                            />
                          </div>
                          <div className="flex">
                            <Field
                              name="order_date_to"
                              render={({ field }) => (
                                <InputField
                                  {...field}
                                  label="Order Date To"
                                  placeholder="DD/MM/YYYY"
                                  hasError={
                                    touched.order_date_to &&
                                    errors.order_date_to
                                  }
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <Field
                            name="description"
                            render={({ field }) => (
                              <div className="font-arial">
                                <p>
                                  Please provide a short description of the
                                  experience:
                                </p>
                                <textarea
                                  {...field}
                                  rows="6"
                                  className="bg-transparent border-2 border-solid border-white w-1/2 text-white mt-2"
                                />
                              </div>
                            )}
                          />
                        </div>
                      </div>
                    )}
                  </Step>
                  <Step>
                    <>
                      <PrimaryTitle>Inventory</PrimaryTitle>
                      <div className="mt-16">
                        <Counter
                          onChange={v => setFieldValue('general_admission', v)}
                          color="red"
                          label="General Admission"
                          initialValue={1}
                        />
                      </div>
                    </>
                  </Step>
                  <Step>
                    <PrimaryTitle>Images</PrimaryTitle>
                    <div className="mt-16">
                      <label className="text-red">File Upload:</label>
                      <p className="font-arial my-2">
                        Please upload any graphics you wish to use for this
                        event
                      </p>
                      {values.image && !errors.image && (
                        <p>File Size: {values.image.size}</p>
                      )}
                      <div className="mt-8 w-1/2">
                        <Dropzone
                          onDrop={x => {
                            console.log(x[0]);
                            setFieldValue('image', x[0]);
                          }}
                        />
                        <div className="my-8 text-red">{errors.image}</div>
                        {values.image && !errors.image && (
                          <div className="mt-8">
                            <h3 className="text-red">File Upload</h3>
                            <div className="font-arial">
                              <i className="fas fa-check text-green" />
                              <span className="mx-4">{values.image.name}</span>
                              <i
                                onClick={() => setFieldValue('image', null)}
                                className="fas fa-times text-red"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Step>
                  <Step>
                    <PrimaryTitle>Permissions</PrimaryTitle>
                    <div className="mt-16">
                      <label className="text-red">User Permissions:</label>
                      <p className="font-arial my-2">
                        Please select the relevant markets to provide theirs
                        users to access this event
                      </p>
                      <div>
                        <div>
                          <FieldArray
                            name="permissions"
                            render={({ push, remove }) => {
                              return (
                                <div className="flex flex-wrap items-center font-arial">
                                  {permissions.map(permission => (
                                    <label
                                      key={permission.id}
                                      className="m-2"
                                      style={{ minWidth: '140px' }}>
                                      <input
                                        className="mr-2"
                                        name="permissions"
                                        type="checkbox"
                                        value={permission}
                                        checked={
                                          !!values.permissions.find(
                                            x => x.id === permission.id,
                                          )
                                        }
                                        onChange={e => {
                                          if (e.target.checked)
                                            push(permission);
                                          else {
                                            const idx = values.permissions.indexOf(
                                              permission,
                                            );
                                            remove(idx);
                                          }
                                        }}
                                      />
                                      {permission.name}
                                    </label>
                                  ))}
                                </div>
                              );
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Step>
                  <Step>
                    {({ jump }) => (
                      <>
                        <PrimaryTitle>Review</PrimaryTitle>
                        <div className="mt-16">
                          <h2 className="text-red">
                            Event Details{' '}
                            <i
                              onClick={() => jump(1)}
                              className="fas fa-pen text-white ml-4 hover:cursor-pointer"
                            />
                          </h2>
                          {requiredFieldsByStep[1]
                            .map(x => ({
                              label: x.replace('_', ' '),
                              value: values[x],
                            }))
                            .map(field => (
                              <div
                                key={field.label}
                                className={`${
                                  field.value && field.value.length > 20
                                    ? 'flex flex-col'
                                    : 'flex items-center'
                                }`}>
                                <h4 className="my-2 mr-4">{field.label}: </h4>{' '}
                                <p className="font-arial">{field.value}</p>
                              </div>
                            ))}
                        </div>

                        <div className="mt-16">
                          <h2 className="text-red">
                            Inventory{' '}
                            <i
                              onClick={() => jump(2)}
                              className="fas fa-pen text-white ml-4 hover:cursor-pointer"
                            />
                          </h2>
                          {requiredFieldsByStep[2]
                            .map(x => ({
                              label: x.replace('_', ' '),
                              value: values[x],
                            }))
                            .map(field => (
                              <div
                                className={`${
                                  field.value && field.value.length > 20
                                    ? 'flex flex-col'
                                    : 'flex items-center'
                                }`}>
                                <h4 className="my-2 mr-4">{field.label}: </h4>{' '}
                                <p className="font-arial">{field.value}</p>
                              </div>
                            ))}
                        </div>

                        <div className="mt-16">
                          <h2 className="text-red">
                            Images{' '}
                            <i
                              onClick={() => jump(3)}
                              className="fas fa-pen text-white ml-4 hover:cursor-pointer"
                            />
                          </h2>
                          {requiredFieldsByStep[3].map(field => {
                            return (
                              <div className={`${'flex items-center'}`}>
                                <h4 className="my-2 mr-4">{field}: </h4>{' '}
                                <p className="font-arial">
                                  {values.image && values.image.name}
                                </p>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-16">
                          <h2 className="text-red">
                            Permissions{' '}
                            <i
                              onClick={() => jump(4)}
                              className="fas fa-pen text-white ml-4 hover:cursor-pointer"
                            />
                          </h2>
                          <div className="flex">
                            <h4 className="mr-4">Markets:</h4>
                            <div>
                              {values.permissions.map(x => (
                                <div className="font-arial mb-4">{x.name}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </Step>
                </Steps>
              </div>
              <WithWizard>
                {({ next, previous, currentStep, totalSteps }) => (
                  <div
                    className="w-1/3 flex flex-col items-center justify-between font-arial"
                    style={{ minHeight: '50vh' }}>
                    <div />
                    <div className="flex">
                      {currentStep > 1 && (
                        <button
                          onClick={previous}
                          className="btn border-2 border-pink border-solid text-white rounded py-2 text-2xl">
                          Previous Step
                        </button>
                      )}
                      {currentStep < totalSteps ? (
                        <NextButton
                          {...{ validateForm, next, setTouched }}
                          fields={requiredFieldsByStep[currentStep]}
                          className="btn border-2 border-pink bg-pink text-white rounded py-2 text-2xl ml-2">
                          Next Step
                        </NextButton>
                      ) : (
                        <button
                          onClick={submitForm}
                          className="btn border-2 border-pink bg-pink text-white rounded py-2 text-2xl ml-2">
                          Create Event
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </WithWizard>
            </div>
          </Wizard>
        )}
      </Formik>
    </div>
  );
};

export default NewExperience;
