import React from 'react';

const ExtendedCard = ({ event }) => {
  // const [tab, setTab] = React.useState('event-details');
  return (
    <div className="flex">
      <div className="flex-1 pr-4">
        <h1 className="text-tirques">{event.artist}</h1>
        <h1 className="text-5xl mb-4">{event.event}</h1>
        <p className="font-arial text-sm leading-normal mb-4">{event.desc}</p>
      </div>
      <div className="w-2/3 bg-grey" />
    </div>
  );
};

export default ExtendedCard;
