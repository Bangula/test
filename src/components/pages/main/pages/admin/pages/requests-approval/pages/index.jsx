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

  const [data, setData] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    total_pages: 1,
    current_page: 1,
    per_page: 10,
  });

  const doGetRequests = async args => {
    if (args) {
      const { error, data } = await getRequests(args.page + 1);
      if (!error) {
        setData(data.data.data);
        setPagination(data.data.meta.pagination);
      }
    }
  };
  React.useEffect(() => {
    doGetRequests();
  }, []);
  return (
    <div>
      <PrimaryTitle>Latest Requests</PrimaryTitle>
      <ReactTable
        manual
        noDataText="No Requests"
        className="custom-ReactTable"
        pageSize={Math.min(data.length, pagination.per_page)}
        showPagination
        showPageSizeOptions={false}
        data={data}
        columns={columns}
        resizable={false}
        onFetchData={doGetRequests}
        pages={pagination.total_pages}
      />
    </div>
  );
};

export default LatestRequests;
