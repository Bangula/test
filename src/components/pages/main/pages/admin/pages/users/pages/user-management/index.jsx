import React from 'react';

import ReactTable from 'react-table';

import { fetchAllUsers } from '@endpoints/admin';
const columns = [
  {
    Header: props => (
      <div className="font-arial" style={{ textAlign: 'left', width: '100%' }}>
        Id
      </div>
    ),
    accessor: 'id',
  },
  {
    id: 'name',
    Header: props => (
      <div className="font-arial" style={{ textAlign: 'left', width: '100%' }}>
        Name
      </div>
    ),
    accessor: x => x.name + ' ' + x.surname,
  },

  {
    Header: props => (
      <div className="font-arial" style={{ textAlign: 'left', width: '100%' }}>
        Email
      </div>
    ),
    accessor: 'email',
  },

  {
    id: 'market',
    Header: props => (
      <div className="font-arial" style={{ textAlign: 'left', width: '100%' }}>
        Market
      </div>
    ),
    accessor: x => x.market || 'market',
  },

  {
    id: 'role',
    Header: props => (
      <div className="font-arial" style={{ textAlign: 'left', width: '100%' }}>
        Role
      </div>
    ),
    accessor: x => x.role || 'User Role 1',
  },

  {
    id: 'last_login',
    Header: props => (
      <div className="font-arial" style={{ textAlign: 'left', width: '100%' }}>
        Last Login
      </div>
    ),
    accessor: x => x.last_login || 'Last Login',
  },
];

const UserManagement = ({ match: { path } }) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await fetchAllUsers();
      if (data) {
        setData(data.data.data);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>User Management</h2>
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

export default UserManagement;
