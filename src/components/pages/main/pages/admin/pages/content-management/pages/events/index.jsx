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

import { dateRegEx, timeRegEx } from '@constants/regex';
import { IMAGE_SIZE, SUPPORTED_FORMATS } from '@constants/images';

const requiredFieldsByStep = {
  1: [
    'name',
    'date',
    'time',
    'venue',
    'location',
    'order_date_from',
    'order_date_to',
    'description',
  ],
  2: ['general_admission', 'hospitality_tickets'],
  3: ['image'],
  4: ['permissions'],
};

const EventSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('required'),
  date: Yup.string()
    .matches(dateRegEx)
    .required('required'),
  time: Yup.string()
    .matches(timeRegEx)
    .required('required'),
  venue: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
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
  description: Yup.string().max(300),
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
  date: '',
  time: '',
  venue: '',
  location: '',
  order_date_from: '',
  order_date_to: '',
  description: '',
  general_admission: 1,
  hospitality_tickets: 1,
  image: null,
  permissions: [],
};

const submitNewEvent = (artist_id, inventory) => async values => {
  const permissions = values.permissions.map(x => x.id);

  const payload = new FormData();

  for (const field in values) {
    if (field === 'permissions') {
      for (let i = 0; i < permissions.length; i++) {
        payload.append('permissions[]', permissions[i]);
      }
    } else {
      payload.append(field, values[field]);
    }
  }
  payload.append('artist_id', artist_id);
  payload.append('date_time', values.date + ' ' + values.time);

  for (let i = 0; i < inventory.length; i++) {
    payload.append(`tickets[${i}][ticket_type_id]`, inventory[i].id);
    payload.append(`tickets[${i}][amount]`, values[inventory[i].name]);
  }

  try {
    await http.post('/events', payload);
    Alert.success('Success!');
    history.goBack();
  } catch (err) {
    console.log(err);
    Alert.error('Error');
  }
};

const NewEvent = props => {
  const [permissions, setPermissions] = React.useState([]);
  const [inventory, setInventory] = React.useState([]);

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

  React.useEffect(() => {
    const fetchInventory = async () => {
      try {
        const result = await http('/ticket-types/models/event');

        setInventory(result.data.data);
        console.log(result.data.data);
      } catch (err) {
        console.log('Error fetching inventory!');
      }
    };

    fetchInventory();
  }, []);
  return (
    <div>
      <h3 className="text-red">New Event Form</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={EventSchema}
        onSubmit={submitNewEvent(props.match.params.artist_id, inventory)}>
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
            <div className="flex">
              <div className="w-2/3">
                <Steps>
                  <Step>
                    {ctx => (
                      <div>
                        <PrimaryTitle>Event Details</PrimaryTitle>
                        <div className="flex justify-between">
                          <Field
                            name="name"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Event"
                                placeholder="Event Name"
                                hasError={touched.name && errors.name}
                              />
                            )}
                          />
                        </div>
                        <div className="flex justify-between">
                          <Field
                            name="date"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Date"
                                placeholder="DD/MM/YYY"
                                hasError={touched.date && errors.date}
                              />
                            )}
                          />
                          <div className="w-1/3">
                            <Field
                              name="time"
                              render={({ field }) => (
                                <InputField
                                  {...field}
                                  label="Time"
                                  placeholder="00:00"
                                  hasError={touched.time && errors.time}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <Field
                            name="venue"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Venue"
                                placeholder="Venue"
                                hasError={touched.venue && errors.venue}
                              />
                            )}
                          />

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
                                  event:
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
                        <Counter
                          onChange={v =>
                            setFieldValue('hospitality_tickets', v)
                          }
                          color="red"
                          label="Hospitality Tickets"
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

export default NewEvent;
