import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { withRouter } from 'react-router-dom';
import Alert from 'react-s-alert';
import http from '@services/http';
import history from '@services/history';

import Wizard, { Step, Steps, WithWizard } from '../../../../components/Wizard';
import NextButton from '../../../../components/NextButton';
import InputField from '@components/InputField/InputField';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Dropzone from '@components/Dropzone/Dropzone';

import { IMAGE_SIZE, SUPPORTED_FORMATS } from '@constants/images';

const requiredFieldsByStep = {
  1: ['name', 'image', 'content', 'price', 'description'],
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('required'),
  content: Yup.string().required('required'),
  price: Yup.number()
    .min(0)
    .max(999.99)
    .required('required'),
  description: Yup.string()
    .max(255)
    .required('required'),
  image: Yup.mixed()
    .required('required')
    // .test(
    //   'imageSize',
    //   'Image too large',
    //   value => value && value.size <= IMAGE_SIZE,
    // )
    .test(
      'imageFormat',
      'Unsupported Format',
      value => value && SUPPORTED_FORMATS.includes(value.type),
    ),
});

const initialValues = {
  name: '',
  content: '',
  price: '',
  description: '',
  image: null,
};

const submit = artist_id => async values => {
  console.log(values);
  const payload = new FormData();

  for (const field in values) {
    payload.append(field, values[field]);
  }
  payload.append('artist_id', artist_id);

  try {
    await http.post('/gifts', payload);
    Alert.success('Success!');
    history.goBack();
  } catch (err) {
    console.log(err);
    Alert.error('Error');
  }
};

const GiftForm = props => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={submit(props.match.params.artist_id)}>
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
                        <div className="flex">
                          <Field
                            name="name"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Product Name"
                                placeholder="Product Name"
                                hasError={touched.name && errors.name}
                              />
                            )}
                          />
                        </div>

                        <div>
                          <Field
                            name="description"
                            render={({ field }) => (
                              <div className="font-arial">
                                <p>Please provide a short description:</p>
                                <textarea
                                  {...field}
                                  rows="6"
                                  className="bg-transparent border-2 border-solid border-white w-1/2 text-white mt-2"
                                />
                                <div className="my-8 text-red font-bebas">
                                  {errors.description}
                                </div>
                              </div>
                            )}
                          />
                        </div>

                        <div className="flex">
                          <Field
                            name="content"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                label="Product Content"
                                placeholder="content"
                                hasError={touched.content && errors.content}
                              />
                            )}
                          />
                        </div>

                        <div className="flex">
                          <Field
                            name="price"
                            type="number"
                            render={({ field }) => (
                              <InputField
                                {...field}
                                type="number"
                                step="any"
                                label="Product Price"
                                placeholder="9.99"
                                hasError={touched.price && errors.price}
                              />
                            )}
                          />
                        </div>

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
                                  <span className="mx-4">
                                    {values.image.name}
                                  </span>
                                  <i
                                    onClick={() => setFieldValue('image', null)}
                                    className="fas fa-times text-red"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
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
                            .map(field => {
                              console.log(field);
                              if (field.label === 'image') {
                                return (
                                  <div className={`${'flex items-center'}`}>
                                    <h4 className="my-2 mr-4">
                                      {field.label}:{' '}
                                    </h4>{' '}
                                    <p className="font-arial">
                                      {values.image && values.image.name}
                                    </p>
                                  </div>
                                );
                              }
                              return (
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
                              );
                            })}
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
                          Create Gift
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

export default withRouter(GiftForm);
