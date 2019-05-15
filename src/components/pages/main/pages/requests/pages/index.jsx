import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';

import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

import sideImg from '@images/axe-bg-02.png';

const event = {
  id: 'lasdlasjkdlasjd',
  request_name: 'Dreambeach Chile 2019',
  category: 'Event',
  partnerships: 'Martin Garrix',
  name: 'John Smith',
  market: 'Europe',
  date: '18.01.2019',
  status: 'Pending',
};

const data = Array(10)
  .fill(undefined)
  .map(x => event);

const LatestRequests = ({ match: { path } }) => {
  const columns = [
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Request</div>
      ),
      accessor: 'request_name',
    },

    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Partnerships</div>
      ),
      accessor: 'partnerships',
    },

    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Category</div>
      ),
      accessor: 'category',
    },

    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Status</div>
      ),
      accessor: 'status',
    },

    {
      id: 'open',
      Cell: ({ original }) => (
        <div style={{ textAlign: 'left', width: '100%' }}>
          <Link to={`${path}/${original.id}`}>
            View Request <i className="fas fa-arrow-right" />
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex">
        <div className="w-1/4 mr-8">
          <img
            className="hidden md:block"
            style={{
              maxHeight: '200px',
              maxWidth: 'none',
              marginLeft: '-100px',
            }}
            src={sideImg}
            alt="Aside gradient graphic"
          />
        </div>
        <div className="w-3/4">
          <PrimaryTitle>Latest Requests</PrimaryTitle>
          <ReactTable
            className="custom-ReactTable"
            pageSize={Math.min(data.length, 10)}
            showPagination
            showPageSizeOptions={false}
            data={data}
            columns={columns}
            resizable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default LatestRequests;
