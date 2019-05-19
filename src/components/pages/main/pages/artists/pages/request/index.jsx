import React from 'react';
import { Formik, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import Alert from 'react-s-alert';
import http from '@services/http';
import history from '@services/history';

import InputField from '@components/InputField/InputField';

import RequestSubmitted from './RequestSubmitted';
import Details from './Details';

import Dropzone from '@components/Dropzone/Dropzone';
import backgroundImage from '@images/concert-lights-music-1370545.png';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import Counter from '@components/Counter/Counter';

import { IMAGE_SIZE, SUPPORTED_FORMATS } from '@constants/images';

const Request = ({ type, ...props }) => {
  const [objectives, setObjectives] = React.useState([]);
  const [inventory, setInventory] = React.useState([]);
  const [details, setDetails] = React.useState({});
  const [isSubmitted, setisSubmitted] = React.useState(false);

  const RequestSchema = Yup.object().shape({
    business_case: Yup.string()
      .max(300)
      .required('Required'),
    objectives: Yup.array()
      .min(1)
      .required('required'),
  });

  const initialValues = {
    objectives: [],
    business_case: '',
    file: null,
  };

  if (type === 'gift') {
    inventory.requested_amount = 1;
  } else {
    inventory.forEach(i => (initialValues[i.name] = 1));
  }

  React.useEffect(() => {
    const fetchObjectives = async () => {
      try {
        const result = await http('/objectives');

        setObjectives(result.data.data);
        console.log(result.data.data);
      } catch (err) {
        console.log('Error fetching objectives!');
      }
    };

    fetchObjectives();
  }, []);

  React.useEffect(() => {
    const fetchInventory = async () => {
      try {
        const result = await http(`/ticket-types/models/${type}`);

        setInventory(result.data.data);
        console.log(result.data.data);
      } catch (err) {
        console.log('Error fetching inventory!');
      }
    };

    if (type !== 'gift') {
      fetchInventory();
    }
  }, []);

  const submitNewRequest = async values => {
    const { artist: artist_id, id: type_id } = props.match.params;
    console.log(artist_id, type_id);
    const payload = new FormData();

    for (const field in values) {
      if (field !== 'file') {
        payload.append(field, values[field]);
      }
    }
    payload.append('artist_id', artist_id);

    for (let i = 0; i < inventory.length; i++) {
      payload.append(`tickets[${i}][ticket_type_id]`, inventory[i].id);
      payload.append(
        `tickets[${i}][requested_amount]`,
        values[inventory[i].name],
      );
    }

    for (let i = 0; i < values.objectives.length; i++) {
      payload.append(`objectives[]`, values.objectives[i].id);
    }

    payload.append('type', type);
    payload.append('type_id', type_id);
    payload.append('artist_id', artist_id);

    if (values.file) {
      payload.append('file', values.file);
    }

    try {
      await http.post(`/requests`, payload);
      Alert.success('Success!');
      // history.goBack();
      setisSubmitted(true);
    } catch (err) {
      console.log(err);
      Alert.error('Error');
    }
  };

  React.useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await http(
          `/${type}s/${props.match.params.id}?include=tickets`,
        );

        setDetails(result.data.data);
        console.log(result.data.data);
      } catch (err) {
        console.log('Error fetching details!');
      }
    };

    fetchDetails();
  }, []);
  console.log({ details });
  return (
    <div
      className="content-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto flex justify-end">
        {isSubmitted ? (
          <RequestSubmitted />
        ) : (
          <div style={{ maxWidth: '600px', width: '100%' }}>
            <div className="mb-12">
              <h4 className="text-tirques text-2xl">{type} Request</h4>
              <PrimaryTitle>{details.name}</PrimaryTitle>
            </div>

            <div>
              <Tabs>
                <TabList>
                  <Tab style={{ marginRight: '35px' }}>{type} details</Tab>
                  <Tab>Request Form</Tab>
                </TabList>

                <TabPanel>
                  <Details type={type} details={details} />{' '}
                </TabPanel>

                <TabPanel>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={RequestSchema}
                    onSubmit={submitNewRequest}>
                    {({
                      errors,
                      touched,
                      setFieldValue,
                      values,
                      submitForm,
                      isSubmitting,
                    }) => (
                      <div
                        className={`font-arial py-6 ${
                          isSubmitting ? 'opacity-50' : ''
                        }`}>
                        <p className="mb-10">
                          Please fill in the following form to request your
                          tickets.
                          <br />
                          Click submit when you are done.
                        </p>

                        {inventory.map(x => (
                          <div key={x.id} className="mb-8">
                            <Counter
                              label={x.name}
                              onChange={v => setFieldValue(x.name, v)}
                              initialValue={1}
                            />
                          </div>
                        ))}

                        {type === 'gift' && (
                          <Counter
                            label={'quantity'}
                            onChange={v => setFieldValue('requested_amount', v)}
                            initialValue={1}
                          />
                        )}

                        <div className="mb-10">
                          <p className="font-bebas text-tirques text-2xl">
                            Objectives:
                          </p>

                          <div>
                            <FieldArray
                              name="objectives"
                              render={({ push, remove }) => {
                                return (
                                  <div className="flex flex-wrap items-center font-arial">
                                    {objectives.map(objective => (
                                      <label
                                        key={objective.id}
                                        className="m-2"
                                        style={{ minWidth: '140px' }}>
                                        <input
                                          className="mr-2"
                                          name="objectives"
                                          type="checkbox"
                                          value={objective}
                                          checked={
                                            !!values.objectives.find(
                                              x => x.id === objective.id,
                                            )
                                          }
                                          onChange={e => {
                                            if (e.target.checked)
                                              push(objective);
                                            else {
                                              const idx = values.objectives.indexOf(
                                                objective,
                                              );
                                              remove(idx);
                                            }
                                          }}
                                        />
                                        {objective.name}
                                      </label>
                                    ))}
                                  </div>
                                );
                              }}
                            />
                            <div className="mb-8 text-red">
                              {errors.objectives}
                            </div>
                          </div>
                        </div>

                        <div className="mb-10">
                          <p className="font-bebas text-tirques text-2xl mb-4">
                            Business case:
                          </p>

                          <div>
                            <Field
                              name="business_case"
                              render={({ field }) => (
                                <div className="font-arial">
                                  <textarea
                                    {...field}
                                    rows="6"
                                    style={{
                                      width: '100%',
                                      minHeight: '165px',
                                      background: 'transparent',
                                      border: '1px solid white',
                                      padding: '15px',
                                      color: 'white',
                                      outline: '0',
                                      resize: 'none',
                                    }}
                                    placeholder="Please add any additional details"
                                    className="bg-transparent border-2 border-solid border-white w-1/2 text-white mt-2"
                                  />
                                </div>
                              )}
                            />
                            <div className="mb-8 text-red">
                              {touched.business_case && errors.business_case}
                            </div>
                          </div>
                        </div>

                        <div className="mb-10">
                          <p className="font-bebas text-tirques text-2xl mb-4">
                            Supporting documents:
                          </p>

                          <p className="mb-6">
                            If needed, you can upload any supporting documents{' '}
                            <br />
                            you deem appropriate.
                          </p>
                        </div>

                        <div className="mt-8">
                          <Dropzone
                            onDrop={x => {
                              console.log(x[0]);
                              setFieldValue('file', x[0]);
                            }}
                          />
                          <div className="mb-8 text-red">{errors.file}</div>
                          {values.file && !errors.file && (
                            <div className="mt-8">
                              <h3 className="text-red">File Upload</h3>
                              <div className="font-arial">
                                <i className="fas fa-check text-green" />
                                <span className="mx-4">{values.file.name}</span>
                                <i
                                  onClick={() => setFieldValue('image', null)}
                                  className="fas fa-times text-red"
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex justify-end">
                          <button
                            disabled={isSubmitting}
                            onClick={submitForm}
                            className="font-bebas text-2xl text-black bg-tirques py-2 rounded"
                            style={{ width: '175px' }}>
                            submit
                          </button>
                        </div>
                      </div>
                    )}
                  </Formik>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Request;
