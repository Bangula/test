import React from 'react';
import {
  getToursSchedule,
  getEventsRequests,
  assignTourToEvent,
} from '@endpoints/artists';
import ApplicationModal from '@components/ui-elements/ApplicationModal/ApplicationModal';
import Alert from 'react-s-alert';
import { withRouter, Link } from 'react-router-dom';

const ToursSchedule = ({ artist, isAdminFeaturesEnabled, ...props }) => {
  const [tours, setTours] = React.useState(null);
  const [events, setEvents] = React.useState([]);
  const [event, setEvent] = React.useState('');
  const [tourToLink, setTourToLink] = React.useState('');
  let years = [];
  if (tours) {
    years = Object.keys(tours);
  }
  const doGetData = async () => {
    console.log('getdata');
    try {
      const response = await Promise.all([
        getToursSchedule(artist),
        getEventsRequests(artist),
      ]);
      setTours(response[0].data.data);
      setEvents(response[1].data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    doGetData();
  }, [artist, tourToLink]);
  const doAssignTourToEvent = React.useCallback((tourId, eventId) => {
    if (eventId) {
      const assign = async () => {
        const { error } = await assignTourToEvent(tourId, eventId);
        if (!error) {
          setTourToLink('');
          setEvent('');
        } else {
          Alert.error(error.response.data.message);
        }
      };
      assign();
    } else {
      Alert.error('Please select an event.');
    }
  }, []);
  let renderData = null;
  if (years.length) {
    years.forEach(year => {
      const months = Object.keys(tours[year]);
      const tempData = months.map(month => {
        return (
          <div key={`${year}${month}`} className="mb-8">
            <h3 className="mb-4 pb-2 border-b border-tirques">
              {month} {year}
            </h3>
            {tours[year][month].data.map(tour => {
              const dateParams = tour.date.split('-');
              const date = new Date(
                dateParams[0],
                dateParams[1],
                dateParams[2],
              );
              let dayOfWeek = '';
              switch (date.getDay()) {
                case 0:
                  dayOfWeek = 'MON';
                  break;
                case 1:
                  dayOfWeek = 'TUE';
                  break;
                case 2:
                  dayOfWeek = 'WED';
                  break;
                case 3:
                  dayOfWeek = 'TUE';
                  break;
                case 4:
                  dayOfWeek = 'FRI';
                  break;
                case 5:
                  dayOfWeek = 'SAT';
                  break;
                default:
                  dayOfWeek = 'SUN';
                  break;
              }
              return (
                <div
                  className="font-arial text-sm pt-2 pb-3 border-b mb-2 flex justify-between pr-8"
                  key={tour.id}>
                  <div className="mr-4" style={{ width: '55px' }}>
                    {dayOfWeek} {date.getDate()}
                  </div>
                  <div className="flex-1">{tour.show}</div>
                  <div className="mr-2">
                    {tour.city}, {tour.state ? tour.state : tour.country}
                  </div>
                  {isAdminFeaturesEnabled ? (
                    <div>
                      <i
                        onClick={() => setTourToLink(tour.id)}
                        className="fa fa-link text-pink mx-4"
                      />
                    </div>
                  ) : null}
                  {tour.event && (
                    <Link
                      to={`${props.match.url}/requests/events/${
                        tour.event.data.id
                      }`}>
                      <i className="fa fa-arrow-right text-blue" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        );
      });
      renderData = tempData;
    });
  }
  return (
    <div style={{ maxHeight: '500px' }} className="overflow-auto">
      {renderData}
      {renderData ? (
        <ApplicationModal
          width="300px"
          open={!!tourToLink}
          close={() => setTourToLink('')}>
          <div className="pt-6">
            <h2 className="mb-6 text-center">Add link</h2>
            <p className="font-arial text-sm mb-6">
              You can link a tour date with an existing event that users can
              request, by selecting it in the list below.
            </p>
            <div style={{ maxHeight: '300px' }} className="mb-8">
              {events.map(ev => {
                return (
                  <div className="flex" key={ev.id}>
                    <input
                      id={ev.id}
                      onChange={e => setEvent(ev.id)}
                      className="mr-4"
                      type="radio"
                      value={ev.name}
                      checked={ev.id === event}
                    />
                    <label htmlFor={ev.id} className="text-sm font-arial">
                      {ev.name}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-end">
              <button
                onClick={() => doAssignTourToEvent(tourToLink, event)}
                className="text-white rounded uppercase bg-pink px-6 pt-2 pb-3">
                Save
              </button>
            </div>
          </div>
        </ApplicationModal>
      ) : null}
    </div>
  );
};

export default withRouter(ToursSchedule);
