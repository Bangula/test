import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, withRouter } from 'react-router-dom';

const ExtendedCard = ({ event, match }) => {
  return (
    <div className="flex">
      <div className="flex-1 pr-4">
        <h1 className="text-tirques">{event.artist.data.name}</h1>
        <h1 className="text-5xl mb-4">{event.name}</h1>
        <p className="font-arial mb-6">{event.description}</p>
        <div className="mb-4">
          <Tabs>
            <TabList>
              <Tab>Event Details</Tab>
              <Tab>Inventory</Tab>
              <Tab>Request Details</Tab>
            </TabList>
            <TabPanel>
              <div className="py-4">
                <div className="flex mb-2">
                  <div
                    style={{ width: '76px' }}
                    className="text-xl mr-6 text-tirques">
                    Event date:
                  </div>
                  <div className="font-arial">{event.date}</div>
                </div>
                <div className="flex mb-2">
                  <div
                    style={{ width: '76px' }}
                    className="text-xl mr-6 text-tirques">
                    Time:
                  </div>
                  <div className="font-arial">{event.time}</div>
                </div>
                <div className="flex mb-2">
                  <div
                    style={{ width: '76px' }}
                    className="text-xl mr-6 text-tirques">
                    Location:
                  </div>
                  <div className="font-arial">{event.location}</div>
                </div>
                <div className="flex mb-2">
                  <div
                    style={{ width: '76px' }}
                    className="text-xl mr-6 text-tirques">
                    Venue:
                  </div>
                  <div className="font-arial">{event.venue}</div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-4">
                <div className="flex mb-2">
                  <div
                    style={{ width: '120px' }}
                    className="text-xl mr-6 text-tirques">
                    Request deadline:
                  </div>
                  <div className="font-arial">12.06.2018.</div>
                </div>
                <div className="flex mb-2">
                  <div
                    style={{ width: '120px' }}
                    className="text-xl mr-6 text-tirques">
                    General Ticket:
                  </div>
                  <div className="font-arial">25 tickets available</div>
                </div>
                <div className="flex mb-2">
                  <div
                    style={{ width: '120px' }}
                    className="text-xl mr-6 text-tirques">
                    Vip Ticket:
                  </div>
                  <div className="font-arial">15 tickets available</div>
                </div>
                <div className="flex mb-2">
                  <div
                    style={{ width: '120px' }}
                    className="text-xl mr-6 text-tirques">
                    Meet & Greet:
                  </div>
                  <div className="font-arial">2 tickets available</div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-4">
                <div className="text-xl mb-2 text-tirques">
                  Required information:
                </div>
                <p className="font-arial">- Category and amount of tickets</p>
                <p className="font-arial">- Objective</p>
                <p className="font-arial">- Business case</p>
                <p className="font-arial mb-4">
                  - Brand representative (Meet & Greet only)
                </p>
                <p className="font-arial">
                  You will also be able to attach supporting documents, if
                  needed.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="flex justify-end">
          <Link to={`${match.url}/${event.id}`}>
            <button className="uppercase bg-tirques rounded px-6 pb-1 pt-2 tracking-wide text-xl">
              Request
            </button>
          </Link>
        </div>
      </div>
      <div className="w-2/3 bg-grey" style={{ maxHeight: '440px' }} />
    </div>
  );
};

export default withRouter(ExtendedCard);
