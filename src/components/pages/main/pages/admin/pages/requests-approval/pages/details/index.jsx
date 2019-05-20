import React from 'react';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Counter from '@components/Counter/Counter';
import { Link } from 'react-router-dom';
import Alert from 'react-s-alert';

import http from '@services/http';

const Details = props => {
  const [tickets, setTickets] = React.useState([]);
  const [details, setDetails] = React.useState({});
  let initialTickets;
  const updateTickets = (type, value) => {
    setTickets(
      tickets.map(t => (t.label === type ? { label: type, value } : t)),
    );
  };

  console.log(tickets);

  React.useEffect(() => {
    const fetchRequest = async () => {
      try {
        const result = await http(
          `/requests/${
            props.match.params.id
          }?include=relatesTo,objectives,user.market,requested_tickets,artist,tickets`,
        );

        console.log(result.data.data);
        setDetails(result.data.data);
        initialTickets = result.data.data.requested_tickets.data.map(t => ({
          label: t.ticket.data.name,
          value: t.requested_amount,
        }));

        setTickets(initialTickets);
      } catch (err) {
        console.log('Error fetching request!');
      }
    };

    fetchRequest();
  }, []);

  const processRequest = async () => {
    let status;
    const initialTickets = details.requested_tickets.data.map(t => ({
      label: t.ticket.data.name,
      value: t.requested_amount,
    }));
    if (JSON.stringify(initialTickets) === JSON.stringify(tickets)) {
      status = 'approved';
    } else if (tickets.reduce((a, c) => a + c.value, 0)) {
      status = 'reallocation';
    } else {
      status = 'rejected';
    }

    const payload = new FormData();

    payload.append('status', status);

    details.requested_tickets.data.forEach((t, i) => {
      payload.append(`tickets[${i}][ticket_type_id]`, t.ticket.data.id);
      payload.append(`tickets[${i}][approved_amount]`, tickets[i].value);

      console.log(
        `tickets[${i}][id]`,
        t.ticket.data.id,
        `tickets[${i}][requested_amount]`,
        tickets[i].value,
      );
    });

    console.log('processing...', tickets, status);

    try {
      await http.post(`/request/${props.match.params.id}/admin`, payload);
      Alert.success('Success!');
      props.history.goBack();
    } catch (err) {
      console.log(err);
      Alert.error('Error');
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex-1">
        <Link to="/admin/requests-approval">
          <button className="text-xl mb-8 px-4 pt-2 pb-1 border border-pink rounded text-white">
            &larr; Go back
          </button>
        </Link>
        {Object.keys(details).length > 0 && (
          <>
            <div className="mb-8">
              <PrimaryTitle>{details.relatesTo.data.name}</PrimaryTitle>
            </div>
            {details.user.data.market && (
              <div className="mb-8">
                <h3 className="mb-4 text-pink">Reqeusted by:</h3>
                <div className="pl-4 flex font-arial mb-2">
                  <div className="font-bold mr-6" style={{ width: '125px' }}>
                    Full Name:
                  </div>
                  <div className="font-arial">
                    {details.user.data.name} {details.user.data.surname}
                  </div>
                </div>
                <div className="pl-4 flex font-arial">
                  <div className="font-bold mr-6" style={{ width: '125px' }}>
                    Market:
                  </div>
                  <div className="font-arial">
                    {details.user.data.market.data.name}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div className="mb-8">
          <h3 className="mb-4 text-pink">Reqeusted quantity:</h3>

          {tickets.map(t => (
            <div className="pl-4 flex items-center font-arial mb-8">
              <div
                className="font-bold mr-6"
                style={{ width: '125px', textTransform: 'capitalize' }}>
                {t.label.split('_').join(' ')}:
              </div>
              <div className="font-arial mr-8" style={{ width: '105px' }}>
                {t.value} Tickets
              </div>
              <div>
                <Counter
                  color="pink"
                  initialValue={t.value}
                  min={0}
                  onChange={value => updateTickets(t.label, value)}
                />
              </div>
            </div>
          ))}
        </div>
        {Object.keys(details).length > 0 && (
          <>
            <div className="mb-8">
              <h3 className="mb-4 text-pink">Request purpose:</h3>
              <div className="pl-4 flex font-arial mb-4">
                <div className="font-bold mr-6" style={{ width: '125px' }}>
                  Objectives:
                </div>
                <div className="font-arial">
                  {details.objectives.data.map(o => o.name).join(', ')}
                </div>
              </div>
              <div className="font-arial pl-4">
                <div className="font-bold mb-2">Business Case:</div>
                <p className="max-w-md" style={{ overflowWrap: 'break-word' }}>
                  {details.business_case}
                </p>
              </div>
            </div>
            {details.file && (
              <div className="mb-4">
                <h3 className="mb-4 text-pink">Supporting document:</h3>
                <div className="pl-4 font-arial">
                  <p className="mb-2">
                    <span className="mr-8">{details.file}</span>
                    <a
                      href={details.file_url}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fa fa-download" />
                    </a>
                  </p>
                </div>
              </div>
            )}
            <div className="flex">
              <button
                className="btn font-bebas text-2xl text-white border-solid border-red border py-2 my-4 rounded"
                onClick={processRequest}>
                Proccess
              </button>
            </div>
          </>
        )}
      </div>
      <div className="flex-1" />
    </div>
  );
};

export default Details;
