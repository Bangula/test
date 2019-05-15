import React from 'react';
import EventCard from '../../components/Card';
import ExtendedCard from '../../components/ExtendedCard';
import GridToListSwitch from '@components/ui-elements/GridToListSwitch/GridToListSwitch';

const events = [
  {
    image: '',
    artist: 'Martin Garrix',
    event: 'Dreambeach chile 2019',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    id: '0',
    date: '06.12.2018',
    location: 'London, United Kingdom',
    availiability: 42,
  },
  {
    image: '',
    artist: 'Martin Garrix',
    event: 'Dreambeach chile 2019',
    id: '1',
    date: '06.12.2018',
    location: 'London, United Kingdom',
    availiability: 42,
  },
  {
    image: '',
    artist: 'Martin Garrix',
    event: 'Dreambeach chile 2019',
    id: '2',
    date: '06.12.2018',
    location: 'London, United Kingdom',
    availiability: 42,
  },
  {
    image: '',
    artist: 'Martin Garrix',
    event: 'Dreambeach chile 2019',
    id: '2',
    date: '06.12.2018',
    location: 'London, United Kingdom',
    availiability: 42,
  },
];

const Events = () => {
  const [view, toggleView] = React.useState(true);
  let eventsList = null;
  if (view) {
    eventsList = events.map(event => (
      <div key={event.id} className="w-1/3 px-3 mb-10">
        <EventCard event={event} />
      </div>
    ));
  } else {
    eventsList = events.map(event => (
      <div key={event.id} className="mb-12">
        <ExtendedCard event={event} />
      </div>
    ));
  }
  const containerClasses = view ? 'flex flex-wrap' : '';
  return (
    <div>
      <div className="flex justify-end pr-4 mb-4">
        <GridToListSwitch view={view} toggleView={toggleView} />
      </div>
      <div className={containerClasses}>{eventsList}</div>
    </div>
  );
};

export default Events;
