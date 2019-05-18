import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ details, type }) => {
  console.log(details);
  return (
    <div className="font-arial py-6">
      <div className="pr-12 mb-12">
        <p>{details.description}</p>
      </div>

      <div className="mb-10">
        <h5 className="font-bebas text-tirques text-2xl mb-2">
          {type} Details:
        </h5>

        <div>
          {details.date && (
            <p className="flex py-2">
              <span style={{ width: '200px', fontWeight: 'bold' }}>
                {type} Date:
              </span>
              <span>{details.date}</span>
            </p>
          )}
          {details.time && (
            <p className="flex py-2">
              <span style={{ width: '200px', fontWeight: 'bold' }}>Time:</span>
              <span>{details.time}</span>
            </p>
          )}
          {details.location && (
            <p className="flex py-2">
              <span style={{ width: '200px', fontWeight: 'bold' }}>
                Location:
              </span>
              <span>{details.location}</span>
            </p>
          )}
          {details.venue && (
            <p className="flex py-2">
              <span style={{ width: '200px', fontWeight: 'bold' }}>Venue:</span>
              <span>{details.venue}</span>
            </p>
          )}

          {details.price && (
            <p className="flex py-2">
              <span style={{ width: '200px', fontWeight: 'bold' }}>Price:</span>
              <span>{details.price}</span>
            </p>
          )}
        </div>
      </div>

      {details.tickets && (
        <div className="mb-10">
          <h5 className="font-bebas text-tirques text-2xl mb-2">Inventory:</h5>

          <div>
            {details.order_date_to && (
              <p className="flex py-2">
                <span style={{ width: '200px', fontWeight: 'bold' }}>
                  Request Deadline:
                </span>
                <span>{details.order_date_to}</span>
              </p>
            )}
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
      )}
      {type !== 'gift' && (
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
      )}

      <div className="flex">
        <Link className="mr-2">
          <button
            className="font-bebas text-2xl text-white py-2 rounded"
            style={{
              width: '175px',
              backgroundColor: '#323232',
            }}>
            View Inventory
          </button>
        </Link>

        <Link className="mr-2">
          <button
            className="font-bebas text-2xl text-white py-2 rounded"
            style={{
              width: '175px',
              backgroundColor: '#323232',
            }}>
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
  );
};

export default Details;
