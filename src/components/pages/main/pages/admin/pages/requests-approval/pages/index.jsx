import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import http from '@services/http';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

const event = {
  id: 'lasdlasjkdlasjd',
  request_name: 'Dreambeach Chile 2019',
  category: 'Event',
  partnerships: 'Martin Garrix',
  name: 'John Smith',
  market: 'Europe',
  date: '18.01.2019',
};

const data = Array(10)
  .fill(undefined)
  .map(x => event);

const LatestRequests = ({ match: { path } }) => {
  const [artists, setArtists] = React.useState([]);
  const columns = [
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Request</div>
      ),
      accessor: 'request_name',
    },
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Category</div>
      ),
      accessor: 'category',
    },
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Partnerships</div>
      ),
      accessor: 'partnerships',
    },
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Name</div>
      ),
      accessor: 'name',
    },
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Market</div>
      ),
      accessor: 'market',
    },
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Date</div>
      ),
      accessor: 'date',
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

  React.useEffect(() => {
    const fetchArtists = async () => {
      try {
        const result = await http('/artists');

        setArtists(result.data.data);
        console.log(result.data.data);
      } catch (err) {
        console.log('Error fetching artists!');
      }
    };

    fetchArtists();
  }, []);
  return (
    <div>
      {artists.length > 0 && (
        <div className="flex items-center">
          <div className="text-red">Partnerships:</div>
          {artists.map(x => (
            <Link
              className="border border-white mx-4 p-2 mb-8"
              to={`${path}/artist/${x.id}`}>
              {x.name}
            </Link>
          ))}
        </div>
      )}
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
  );
};

export default LatestRequests;
