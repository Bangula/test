import React from 'react';
import EventCard from '../../components/Card';
import ExtendedCard from '../../components/ExtendedCard';
import GridToListSwitch from '@components/ui-elements/GridToListSwitch/GridToListSwitch';
import { getEventsRequests } from '@endpoints/artists';

const Events = ({ artist }) => {
  const [view, toggleView] = React.useState(true);
  const [events, setEvents] = React.useState([]);
  const doGetData = async () => {
    const { error, data } = await getEventsRequests(artist);
    if (!error) {
      setEvents(data.data.data);
    }
  };
  React.useEffect(() => {
    doGetData();
  }, []);
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
