import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import Wizard, { Step, Steps, WithWizard } from '../../../../components/Wizard';
import NextButton from '../../../../components/NextButton';
import InputField from '@components/InputField/InputField';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Counter from '@components/Counter/Counter';

const requiredFieldsByStep = {
  1: [
    'event_name',
    'date',
    'time',
    'venue',
    'location',
    'order_date',
    'event_description',
  ],
  2: ['general_admission', 'hospitality_tickets'],
  3: ['file'],
  4: ['permissions'],
};

const EventSchema = Yup.object().shape({
  event_name: Yup.string().required('required'),
  date: Yup.date().required('required'),
  time: Yup.string().required('required'),
  venue: Yup.string().required('required'),
  location: Yup.string().required('required'),
  order_date: Yup.string().required('required'),
});

const initialValues = {
  event_name: '',
  date: '',
  time: '',
  venue: '',
  location: '',
  order_date: '',
  event_description: '',
  general_admission: 0,
  hospitality_tickets: 0,
  file: '',
};

const NewEvent = () => {
  return (
    <div>
      <h3 className="text-red">New Event Form</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={EventSchema}
        onSubmit={values => console.log(values)}>
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
                            name="event_name"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Event"
                                placeholder="Event Name"
                                hasError={
                                  touched.event_name && errors.event_name
                                }
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
                          <div className="flex justify-between">
                            <Field
                              name="order_date"
                              render={({ field }) => (
                                <InputField
                                  {...field}
                                  label="Order Date"
                                  placeholder="DD/MM/YYYY - DD/MM/YYYY"
                                  hasError={
                                    touched.order_date && errors.order_date
                                  }
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <Field
                            name="event_description"
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
                        />
                        <Counter
                          onChange={v =>
                            setFieldValue('hospitality_tickets', v)
                          }
                          color="red"
                          label="Hospitality Tickets"
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
                      <p>File Size: </p>
                      <div className="mt-8">Dropzone</div>
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
                          {requiredFieldsByStep[3]
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
                            Permissions{' '}
                            <i
                              onClick={() => jump(4)}
                              className="fas fa-pen text-white ml-4 hover:cursor-pointer"
                            />
                          </h2>
                          {requiredFieldsByStep[4]
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
