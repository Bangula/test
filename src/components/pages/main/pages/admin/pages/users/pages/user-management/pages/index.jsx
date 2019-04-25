import React from 'react';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';

import { fetchAllUsers } from '@endpoints/admin';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

const columns = [
  {
    Header: props => <div style={{ textAlign: 'left', width: '100%' }}>Id</div>,
    accessor: 'id',
  },
  {
    id: 'name',
    Header: props => (
      <div style={{ textAlign: 'left', width: '100%' }}>Name</div>
    ),
    accessor: x => x.name + ' ' + x.surname,
  },

  {
    Header: props => (
      <div style={{ textAlign: 'left', width: '100%' }}>Email</div>
    ),
    accessor: 'email',
  },

  {
    id: 'market',
    Header: props => (
      <div style={{ textAlign: 'left', width: '100%' }}>Market</div>
    ),
    accessor: x => x.market || 'market',
  },

  {
    id: 'role',
    Header: props => (
      <div style={{ textAlign: 'left', width: '100%' }}>Role</div>
    ),
    accessor: x => x.role || 'User Role 1',
  },

  {
    id: 'last_login',
    Header: props => (
      <div style={{ textAlign: 'left', width: '100%' }}>Last Login</div>
    ),
    accessor: x => x.last_login || 'Last Login',
  },

  {
    id: 'edit',
    Cell: ({ original }) => (
      <div style={{ textAlign: 'left', width: '100%' }}>
        <Link to={`/admin/users/${original.id}/edit`}>
          <i className="fas fa-pen" />
        </Link>
      </div>
    ),
  },

  {
    id: 'delete',
    Cell: ({ original }) => (
      <div style={{ textAlign: 'left', width: '100%' }}>
        <i
          className="fas fa-trash"
          onClick={() => console.log('delete', original.id)}
        />
      </div>
    ),
  },

  {
    id: 'open',
    Cell: ({ original }) => (
      <div style={{ textAlign: 'left', width: '100%' }}>
        <Link to={`/admin/users/${original.id}`}>
          <i className="fas fa-arrow-right" />
        </Link>
      </div>
    ),
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
      <PrimaryTitle>User Management</PrimaryTitle>
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
