import React from 'react';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import { fetchAllUsers, deleteUser } from '@endpoints/user';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

import Modal from 'react-responsive-modal';

const UserManagement = ({ match: { path }, id }) => {
  const [data, setData] = React.useState([]);
  const [isModalOpen, setModal] = React.useState(false);
  const [ongoingAction, setOngoingAction] = React.useState(() => {});

  const columns = [
    {
      Header: props => (
        <div style={{ textAlign: 'left', width: '100%' }}>Id</div>
      ),
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
          {original.id !== id && (
            <i
              className="fas fa-trash"
              onClick={() => {
                openModal();
                setOngoingAction(() => async () => {
                  const { data: res, error } = await deleteUser(original.id);

                  if (res) {
                    Alert.success('Removed!');
                    setData(data.filter(i => i.id !== original.id));
                    closeModal();
                  } else {
                    Alert.error('Removal failed!');
                  }
                });
              }}
            />
          )}
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

  React.useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await fetchAllUsers();
      if (data) {
        setData(data.data.data);
      }
    };
    fetchUsers();
  }, []);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
    setOngoingAction(() => {});
  }
  return (
    <div className="container mx-auto">
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        classNames={{
          overlay: 'modal-overlay',
          modal: 'modal font-bebas',
          closeButton: 'modal-close-btn',
        }}
        center>
        <h1 className="text-center">Delete User?</h1>
        <div className="mt-8">
          <div className="flex">
            <button
              onClick={closeModal}
              className="text-white border-2 border-red rounded py-2 text-2xl"
              style={{ width: '172px' }}>
              no cancel
            </button>
            <button
              onClick={ongoingAction}
              className="text-white bg-red rounded py-2 ml-6 text-2xl border-2 border-red rounded"
              style={{ width: '172px' }}>
              delete user
            </button>
          </div>
        </div>
      </Modal>
      <div className="mb-10">
        <PrimaryTitle>User Management</PrimaryTitle>
      </div>
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

const mapStateToProps = state => ({
  id: Object.keys(state.user.info).length && state.user.info.id,
});

export default connect(mapStateToProps)(UserManagement);
