import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import { getRequests } from '@endpoints/requests';

const LatestRequests = ({ match: { path } }) => {
  const columns = [
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Request</div>
      ),
      accessor: 'relatesTo.data.name',
    },
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Category</div>
      ),
      accessor: 'relatesTo.data.object',
    },
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Partnerships</div>
      ),
      accessor: 'artist.data.name',
    },
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Name</div>
      ),
      accessor: 'user.data.name',
    },
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Date</div>
      ),
      accessor: 'relatesTo.data.date',
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
  // const [artists, setArtists] = React.useState([]);
  const [data, setData] = React.useState([]);
  // React.useEffect(() => {
  //   const fetchArtists = async () => {
  //     try {
  //       const result = await http('/artists');

  //       setArtists(result.data.data);
  //       console.log(result.data.data);
  //     } catch (err) {
  //       console.log('Error fetching artists!');
  //     }
  //   };

  //   fetchArtists();
  // }, []);
  const doGetRequests = async () => {
    const { error, data } = await getRequests();
    if (!error) {
      setData(data.data.data);
    }
  };
  React.useEffect(() => {
    doGetRequests();
  }, []);
  return (
    <div>
      {/* {artists.length > 0 && (
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
      )} */}
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
