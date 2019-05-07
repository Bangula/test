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
    'experience_name',
    'duration',
    'attendees',
    'location',
    'order_date',
    'experience_description',
  ],
  2: ['general_admission'],
  3: ['file'],
  4: ['permissions'],
};

const ExperienceSchema = Yup.object().shape({
  experience_name: Yup.string().required('required'),
  duration: Yup.string().required('required'),
  attendees: Yup.string().required('required'),
  location: Yup.string().required('required'),
  order_date: Yup.string().required('required'),
});

const initialValues = {
  experience_name: '',
  duration: '',
  attendees: '',
  location: '',
  order_date: '',
  experience_description: '',
  general_admission: 0,
  file: '',
};

const NewExperience = () => {
  return (
    <div>
      <h3 className="text-red">New Experience Form</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={ExperienceSchema}
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
          <Wizard startStep={2}>
            <div className="flex">
              <div className="w-2/3">
                <Steps>
                  <Step>
                    {ctx => (
                      <div>
                        <PrimaryTitle>Experience Details</PrimaryTitle>
                        <div className="flex">
                          <Field
                            name="experience_name"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Experience"
                                placeholder="Experience Name"
                                hasError={
                                  touched.experience_name &&
                                  errors.experience_name
                                }
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
                            name="experience_description"
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

export default NewExperience;
