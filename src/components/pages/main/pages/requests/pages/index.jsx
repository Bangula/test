import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import sideImg from '@images/axe-bg-02.png';
import { connect } from 'react-redux';
import { userInfo } from '@state/user/selectors';
import { getRequestsForUser } from '@endpoints/requests';

const mapStateToProps = state => {
  return {
    user: userInfo(state),
  };
};

const LatestRequests = ({ match: { path }, user: { id } }) => {
  const [pagination, setPagination] = React.useState({
    total_pages: 1,
    current_page: 1,
    per_page: 10,
  });
  const columns = [
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Request</div>
      ),
      accessor: 'relatesTo.data.name',
    },

    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Partnerships</div>
      ),
      accessor: 'artist.data.name',
    },

    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Category</div>
      ),
      accessor: 'relatesTo.data.object',
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
  const doGetRequests = async args => {
    if (args) {
      const { error, data } = await getRequestsForUser(id, args.page + 1);
      if (!error) {
        setData(data.data.data);
        setPagination(data.data.meta.pagination);
      }
    }
  };
  React.useEffect(() => {
    if (id) {
      doGetRequests();
    }
  }, [id]);
  const [data, setData] = React.useState([]);
  return (
    <div className="container mx-auto mt-12">
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
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(LatestRequests);
