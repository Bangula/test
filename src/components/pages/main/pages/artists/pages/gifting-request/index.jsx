import React from 'react';
import bcg from '@images/merch-bg@3x.jpg';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Dropzone from '@components/Dropzone/Dropzone';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RequestSubmitted from './RequestSubmitted';

const GiftingRequest = () => {
  const [quantity, setQuantity] = React.useState(0);
  const [objective, setObjective] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <div
      className="bg-cover bg-center bg-fixed pt-12"
      style={{ backgroundImage: `url(${bcg})` }}>
      <div className="container mx-auto flex">
        <div className="flex-1" />
        {!submitted ? (
          <div className="flex-1">
            <h2 className="text-tirques">Gifting Request</h2>
            <div className="mb-4">
              <PrimaryTitle>Axe Regimen Gift Set</PrimaryTitle>
            </div>
            <Tabs>
              <TabList>
                <Tab>Product details</Tab>
                <Tab>Request form</Tab>
              </TabList>
              <TabPanel>Details</TabPanel>
              <TabPanel>
                <div className="pt-4">
                  <p className="font-arial mb-8">
                    Please fill in the following form to request your tickets.
                    Click submit when you are done.
                  </p>
                  <div className="flex mb-8">
                    <h3 className="text-tirques mr-6">Quantity:</h3>
                    <div className="border-tirques border-b-4 pb-1">
                      <i
                        className="fa fa-minus cursor-pointer"
                        onClick={() => setQuantity(quantity - 1)}
                      />
                      <span className="px-4 text-xl">{quantity}</span>
                      <i
                        className="fa fa-plus cursor-pointer"
                        onClick={() => setQuantity(quantity + 1)}
                      />
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-tirques mb-4">Objectives:</h3>
                    <div className="flex flex-wrap">
                      <div className="w-1/3 mb-2">
                        <input
                          className="mr-2"
                          id="lorem-1"
                          type="radio"
                          value="Lorem 1"
                          onChange={event => setObjective(event.target.value)}
                        />
                        <label className="font-arial" htmlFor="lorem-1">
                          Lorem ipsum 1
                        </label>
                      </div>
                      <div className="w-1/3">
                        <input
                          className="mr-2"
                          id="lorem-2"
                          type="radio"
                          value="Lorem 2"
                          onChange={event => setObjective(event.target.value)}
                        />
                        <label className="font-arial" htmlFor="lorem-2">
                          Lorem ipsum 1
                        </label>
                      </div>
                      <div className="w-1/3">
                        <input
                          className="mr-2"
                          id="lorem-3"
                          type="radio"
                          value="Lorem 3"
                          onChange={event => setObjective(event.target.value)}
                        />
                        <label className="font-arial" htmlFor="lorem-3">
                          Lorem ipsum 1
                        </label>
                      </div>
                      <div className="w-1/3">
                        <input
                          className="mr-2"
                          id="lorem-4"
                          type="radio"
                          value="Lorem 4"
                          onChange={event => setObjective(event.target.value)}
                        />
                        <label className="font-arial" htmlFor="lorem-4">
                          Lorem ipsum 1
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-tirques mb-4">Business Case:</h3>
                    <textarea
                      placeholder="Please add any additional details"
                      className="font-arial text-white bg-transparent w-full border border-white px-2 py-2"
                      rows="10"
                    />
                  </div>
                  <div className="mb-8">
                    <h3 className="text-tirques mb-4">Artwork:</h3>
                    <p className="font-arial mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Dropzone />
                  </div>
                  <div className="mb-8 flex justify-end">
                    <button className="uppercase bg-tirques rounded px-6 pb-1 pt-2 tracking-wide text-xl">
                      Submit
                    </button>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        ) : (
          <div className="flex-1">
            <RequestSubmitted />
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftingRequest;
