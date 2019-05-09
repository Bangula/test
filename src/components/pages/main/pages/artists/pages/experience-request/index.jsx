import React from 'react';
import backgroundImage from '@images/concert-lights-music-1370545.png';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import Counter from '@components/Counter/Counter';

const ExperienceRequest = () => {
  return (
    <div
      className="content-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto flex justify-end">
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <div className="mb-12">
            <h4 className="text-tirques text-2xl">Experiences Request</h4>
            <PrimaryTitle>DreamBeach chile 2018</PrimaryTitle>
          </div>

          <div>
            <Tabs>
              <TabList>
                <Tab style={{ marginRight: '35px' }}>Event details</Tab>
                <Tab>Request Form</Tab>
              </TabList>

              <TabPanel>
                <div className="font-arial py-6">
                  <div className="pr-12 mb-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Urna condimentum mattis. <br /> <br /> Please fill
                      in the following form to request your tickets. Click
                      submit when you are done.
                    </p>
                  </div>

                  <div className="mb-10">
                    <h5 className="font-bebas text-tirques text-2xl mb-2">
                      Event Details:
                    </h5>

                    <div>
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          Event Date:
                        </span>
                        <span>06.01.2019</span>
                      </p>
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          Time:
                        </span>
                        <span>20:00</span>
                      </p>
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          Location:
                        </span>
                        <span>London, United Kingdom</span>
                      </p>
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          Venue:
                        </span>
                        <span>Boiler Room</span>
                      </p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h5 className="font-bebas text-tirques text-2xl mb-2">
                      Inventory:
                    </h5>

                    <div>
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          Request Deadline:
                        </span>
                        <span>06.12.2018</span>
                      </p>
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          General Ticket:
                        </span>
                        <span>25 Tickets Available</span>
                      </p>
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          VIP Ticket:
                        </span>
                        <span>15 Tickets Available</span>
                      </p>
                      <p className="flex py-2">
                        <span style={{ width: '200px', fontWeight: 'bold' }}>
                          Meet &amp; Greet:
                        </span>
                        <span>2 Tickets Available</span>
                      </p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h5 className="font-bebas text-tirques text-2xl mb-2">
                      Submission information:
                    </h5>

                    <div>
                      <p>- Category &amp; Amount of tickets</p>
                      <p>- Objective</p>
                      <p>- Business Case</p>
                      <p>- Brand Representative (Meet &amp; Greet only)</p>
                    </div>
                  </div>

                  <div className="flex">
                    <Link className="mr-2">
                      <button
                        className="font-bebas text-2xl text-white py-2 rounded"
                        style={{ width: '175px', backgroundColor: '#323232' }}>
                        View Inventory
                      </button>
                    </Link>

                    <Link className="mr-2">
                      <button
                        className="font-bebas text-2xl text-white py-2 rounded"
                        style={{ width: '175px', backgroundColor: '#323232' }}>
                        View Requests
                      </button>
                    </Link>

                    <Link>
                      <button
                        className="font-bebas text-2xl text-black bg-tirques py-2 rounded"
                        style={{ width: '175px' }}>
                        request
                      </button>
                    </Link>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="font-arial py-6">
                  <p className="mb-10">
                    Please fill in the following form to request your tickets.
                    <br />
                    Click submit when you are done.
                  </p>

                  <div className="mb-16">
                    <Counter label="General ticket" />
                    <Counter label="VIP ticket" />
                    <Counter label="Meet &amp; Greet Ticket:" />
                  </div>

                  <div className="mb-10">
                    <p className="font-bebas text-tirques text-2xl">
                      Objectives:
                    </p>

                    <ul className="flex flex-wrap py-4">
                      <li
                        className="flex items-center mb-4"
                        style={{ width: '30%', paddingRight: '5px' }}>
                        <span className="mr-4">
                          <i className="far fa-circle text-sm" />
                        </span>
                        <span>Lorem Ipsum</span>
                      </li>
                      <li
                        className="flex items-center mb-4"
                        style={{ width: '30%', paddingRight: '5px' }}>
                        <span className="mr-4">
                          <i className="far fa-circle text-sm" />
                        </span>
                        <span>Lorem Ipsum</span>
                      </li>
                      <li
                        className="flex items-center mb-4"
                        style={{ width: '30%', paddingRight: '5px' }}>
                        <span className="mr-4">
                          <i className="far fa-circle text-sm" />
                        </span>
                        <span>Lorem Ipsum</span>
                      </li>
                      <li
                        className="flex items-center mb-4"
                        style={{ width: '30%', paddingRight: '5px' }}>
                        <span className="mr-4">
                          <i className="far fa-circle text-sm" />
                        </span>
                        <span>Lorem Ipsum</span>
                      </li>
                      <li
                        className="flex items-center mb-4"
                        style={{ width: '30%', paddingRight: '5px' }}>
                        <span className="mr-4">
                          <i className="far fa-circle text-sm" />
                        </span>
                        <span>Lorem Ipsum</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-10">
                    <p className="font-bebas text-tirques text-2xl mb-4">
                      Business case:
                    </p>

                    <textarea
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
                    />
                  </div>

                  <div className="mb-10">
                    <p className="font-bebas text-tirques text-2xl mb-4">
                      Supporting documents:
                    </p>

                    <p className="mb-6">
                      If needed, you can upload any supporting documents <br />
                      you deem appropriate.
                    </p>

                    <div className="text-red uppercase">drag & drop here</div>
                  </div>

                  <div className="flex justify-end">
                    <Link>
                      <button
                        className="font-bebas text-2xl text-black bg-tirques py-2 rounded"
                        style={{ width: '175px' }}>
                        submit
                      </button>
                    </Link>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceRequest;
