import React from 'react';
import { Formik, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import Alert from 'react-s-alert';
import http from '@services/http';
import history from '@services/history';

import Dropzone from '@components/Dropzone/Dropzone';
import backgroundImage from '@images/concert-lights-music-1370545.png';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Counter from '@components/Counter/Counter';

const Request = props => {
  const [objectives, setObjectives] = React.useState([]);
  const [inventory, setInventory] = React.useState([]);
  const [details, setDetails] = React.useState({});
  const [request, setRequest] = React.useState({});

  let isFileDropped = false;

  const RequestSchema = Yup.object().shape({
    business_case: Yup.string()
      .max(300)
      .required('Required'),
  });

  const initialValues = {
    objectives: (request.objectives && request.objectives.data) || [],
    business_case: request.business_case || '',
    file: (request.file && { name: request.file }) || null,
  };

  inventory.forEach(i => (initialValues[i.ticket.data.name] = 1));

  React.useEffect(() => {
    const fetchRequest = async () => {
      try {
        const objectivesData = await http('/objectives');
        const result = await http(
          `/requests/${
            props.match.params.id
          }?include=relatesTo,objectives,user,requested_tickets,artist,tickets`,
        );

        const data = result.data.data;

        setRequest(data);
        setDetails(data.relatesTo.data);
        setInventory(data.requested_tickets.data);
        setObjectives(objectivesData.data.data);
        console.log(result.data.data);
      } catch (err) {
        console.log('Error fetching request!');
      }
    };

    fetchRequest();
  }, []);

  const submitNewRequest = async values => {
    const { id } = props.match.params;

    const payload = new FormData();

    for (const field in values) {
      if (field !== 'file') {
        payload.append(field, values[field]);
      }
    }

    console.log(inventory);

    for (let i = 0; i < inventory.length; i++) {
      payload.append(
        `tickets[${i}][ticket_type_id]`,
        inventory[i].ticket.data.id,
      );
      payload.append(
        `tickets[${i}][requested_amount]`,
        values[inventory[i].ticket.data.name],
      );
    }

    for (let i = 0; i < values.objectives.length; i++) {
      payload.append(`objectives[]`, values.objectives[i].id);
    }

    if (values.file && values.file.type && isFileDropped) {
      payload.append('file', values.file);
    }

    payload.append('_method', 'patch');

    try {
      await http.post(`/requests/${id}`, payload);
      Alert.success('Success!');
      history.goBack();
    } catch (err) {
      console.log(err);
      Alert.error('Error');
    }
  };

  return (
    <div
      className="content-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto flex justify-end">
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <div className="mb-12">
            <h4 className="text-red text-2xl"> Request</h4>
            <PrimaryTitle>{details.name}</PrimaryTitle>
          </div>

          <div>
            <div className="flex">
              <div className="font-bebas text-red text-2xl mb-2 mr-4">
                Status:
              </div>
              <div className="font-bebas text-white text-2xl mb-2">
                {request.status}
              </div>
            </div>
            <Tabs>
              <TabList>
                <Tab style={{ marginRight: '35px' }}>details</Tab>
                <Tab>Request Details</Tab>
                {request.status === 'pending' && <Tab>Edit Request</Tab>}
              </TabList>

              <TabPanel>
                <div className="font-arial py-6">
                  <div className="pr-12 mb-12">
                    <p>{details.description}</p>
                  </div>

                  <div className="mb-10">
                    <h5 className="font-bebas text-red text-2xl mb-2">
                      Details:
                    </h5>

                    <div>
                      {details.date && (
                        <p className="flex py-2">
                          <span style={{ width: '200px', fontWeight: 'bold' }}>
                            Date:
                          </span>
                          <span>{details.date}</span>
                        </p>
                      )}
                      {details.time && (
                        <p className="flex py-2">
                          <span style={{ width: '200px', fontWeight: 'bold' }}>
                            Time:
                          </span>
                          <span>{details.time}</span>
                        </p>
                      )}
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          Location:
                        </span>
                        <span>{details.location}</span>
                      </p>
                      {details.venue && (
                        <p className="flex py-2">
                          <span style={{ width: '200px', fontWeight: 'bold' }}>
                            Venue:
                          </span>
                          <span>{details.venue}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-10">
                    <h5 className="font-bebas text-red text-2xl mb-2">
                      Inventory:
                    </h5>

                    <div>
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          Request Deadline:
                        </span>
                        <span>{details.order_date_to}</span>
                      </p>
                      {details.tickets &&
                        details.tickets.data.map(t => (
                          <p className="flex py-2">
                            <span
                              style={{
                                width: '200px',
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                              }}>
                              {t.name.split('_').join(' ')}:
                            </span>
                            <span>{t.amount} Tickets Available</span>
                          </p>
                        ))}
                    </div>
                  </div>

                  <div className="mb-10">
                    <h5 className="font-bebas text-red text-2xl mb-2">
                      Submission information:
                    </h5>

                    <div>
                      <p>- Category &amp; Amount of tickets</p>
                      <p>- Objective</p>
                      <p>- Business Case</p>
                      <p>- Brand Representative (Meet &amp; Greet only)</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mb-10">
                  <h5 className="font-bebas text-red text-2xl mb-2">
                    Ticket Quantity:
                  </h5>

                  <div>
                    {inventory.map(t => (
                      <p className="flex py-2">
                        <span
                          style={{
                            width: '200px',
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                          }}>
                          {t.ticket.data.name.split('_').join(' ')}:
                        </span>
                        <span>{t.requested_amount} Tickets</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-bebas text-red text-2xl mb-2">
                    Request Purpouse:
                  </h5>
                  {request.business_case && (
                    <p className="flex py-2">
                      <p style={{ width: '200px', fontWeight: 'bold' }}>
                        Business Case:
                      </p>
                      <p>{request.business_case}</p>
                    </p>
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={RequestSchema}
                  onSubmit={submitNewRequest}>
                  {({ errors, touched, setFieldValue, values, submitForm }) => (
                    <div className="font-arial py-6">
                      <p className="mb-10">
                        Please fill in the following form to request your
                        tickets.
                        <br />
                        Click submit when you are done.
                      </p>

                      {inventory.map(x => (
                        <div key={x.id} className="mb-8">
                          <Counter
                            color="red"
                            label={x.ticket.data.name}
                            onChange={v => setFieldValue(x.ticket.data.name, v)}
                            initialValue={x.requested_amount}
                          />
                        </div>
                      ))}

                      <div className="mb-10">
                        <p className="font-bebas text-red text-2xl">
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
                                          if (e.target.checked) push(objective);
                                          else {
                                            // const idx = values.objectives.indexOf(
                                            //   objective,
                                            // );
                                            // remove(idx);

                                            setFieldValue(
                                              'objectives',
                                              values.objectives.filter(
                                                o => o.id !== objective.id,
                                              ),
                                            );
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
                        </div>
                      </div>

                      <div className="mb-10">
                        <p className="font-bebas text-red text-2xl mb-4">
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
                        </div>
                      </div>

                      <div className="mb-10">
                        <p className="font-bebas text-red text-2xl mb-4">
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
                            isFileDropped = true;
                            setFieldValue('file', x[0]);
                          }}
                        />
                        <div className="my-8 text-red">{errors.image}</div>
                        {values.file && !errors.file && (
                          <div className="mt-8">
                            <h3 className="text-red">File Upload</h3>
                            <div className="font-arial">
                              <i className="fas fa-check text-green" />
                              <span className="mx-4">{values.file.name}</span>
                              <i
                                onClick={() => setFieldValue('file', null)}
                                className="fas fa-times text-red"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-end">
                        <button
                          onClick={submitForm}
                          className="font-bebas text-2xl text-black bg-red py-2 rounded"
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
      </div>
    </div>
  );
};

export default Request;
