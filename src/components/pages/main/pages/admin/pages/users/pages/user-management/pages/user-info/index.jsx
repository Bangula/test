import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser, deleteUser } from '@endpoints/user';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Alert from 'react-s-alert';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

const UserInfo = props => {
  const userId = props.match.params.id;
  const [user, setUser] = React.useState({});
  const [isModalOpen, setModal] = React.useState(false);

  React.useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await fetchUser(userId);
      if (data) {
        setUser(data.data.data);
      }
    };

    loadUser();
  }, []);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-12">
        <PrimaryTitle>User Management</PrimaryTitle>
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
                no, cancel
              </button>
              <button
                onClick={async () => {
                  const { data: res, error } = await deleteUser(userId);

                  if (res) {
                    Alert.success('Removed!');
                    props.history.goBack();
                  } else {
                    Alert.error('Removal failed!');
                  }
                }}
                className="text-white bg-red rounded py-2 ml-6 text-2xl border-2 border-red rounded"
                style={{ width: '172px' }}>
                delete user
              </button>
            </div>
          </div>
        </Modal>
        <div className="flex">
          {userId !== props.currentUserId && (
            <button
              onClick={openModal}
              className="text-white border-2 border-pink rounded py-2 text-2xl"
              style={{ width: '172px' }}>
              delete user
            </button>
          )}
          <Link to={`${props.location.pathname}/edit`}>
            <button
              className="text-white bg-pink rounded py-2 ml-6 text-2xl border-2 border-pink rounded"
              style={{ width: '172px' }}>
              edit profile
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h3 className="text-4xl">
            {user.name} {user.surname}
          </h3>
          <p className="text-sm font-arial font-light text-red">
            {Object.keys(user).length > 0 &&
              !user.confirmed &&
              'This user has not signed up yet'}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="pr-6">
            <div className="mb-10">
              <h4 className="text-pink text-2xl mb-2">contact details:</h4>
              <div className="pl-2">
                <p className="font-arial py-2 font-light">
                  <span className="font-bold mr-4">Email:</span> {user.email}
                </p>
                <p className="font-arial py-2 font-light">
                  <span className="font-bold mr-4">Phone Number:</span>
                  {user.phone || 'No phone number provided'}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-pink text-2xl mb-2">User details:</h4>
              <div className="pl-2">
                <p className="font-arial py-2 font-light">
                  <span className="font-bold mr-4">Job Title:</span>{' '}
                  {user.job_title || 'No job title provided'}
                </p>
                <p className="font-arial py-2 font-light">
                  <span className="font-bold mr-4">Market:</span> Europe
                </p>
                <p className="font-arial py-2 font-light">
                  <span className="font-bold mr-4">Role:</span>{' '}
                  {user &&
                    user.roles &&
                    user.roles.data.length &&
                    user.roles.data[0].display_name}
                </p>
              </div>
            </div>
          </div>

          {/* <div>
            <h4 className="text-pink text-2xl mb-2">activity log:</h4>

            <div>table</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUserId: Object.keys(state.user.info).length && state.user.info.id,
});

export default connect(mapStateToProps)(UserInfo);
