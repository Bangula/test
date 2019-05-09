import React from 'react';

const EventCard = ({ event }) => {
  return (
    <>
      <div className="h-64 w-full bg-grey" />
      <div className="pt-3 mb-3">
        <h3>{event.artist}</h3>
        <h1 className="text-4xl mb-4 text-tirques">{event.event}</h1>
        <div className="flex">
          <div style={{ width: '90px' }} className="mr-6">
            <p className="font-arial mb-2">Date:</p>
            <p className="font-arial mb-2">Location:</p>
            <p className="font-arial">Availiability:</p>
          </div>
          <div className="flex-1">
            <p className="font-arial mb-2">{event.date}</p>
            <p className="font-arial mb-2">{event.location}</p>
            <p className="font-arial">{event.availiability} tickets</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="text-xl bg-tirques rounded px-8 pt-2 pb-1">
          Request
        </button>
      </div>
    </>
  );
};

export default EventCard;
