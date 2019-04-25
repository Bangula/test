import React from 'react';
import { fetchUser } from '@endpoints/admin';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import InputField from '@components/InputField/InputField';
import backgroundImage from '@images/2061080.png';
import SelectField from '@components/SelectField/SelectField';
import { Link } from 'react-router-dom';

const EditUser = props => {
  console.log(props);
  const userId = props.match.params.id;
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await fetchUser(userId);
      setUser(data.data.data);
    };

    loadUser();
  }, []);
  console.log(user);
  return (
    <div
      className="admin__edit content-bg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'right top',
      }}>
      <div className="container mx-auto">
        <div style={{ maxWidth: '800px' }}>
          <div className="mb-10">
            <PrimaryTitle>Edit Profile</PrimaryTitle>
          </div>
          <div className="flex mb-12">
            <div className="w-1/2 mr-16">
              <InputField label="Name" type="text" />
              <InputField
                label="Email"
                type="email"
                style={{ maxWidth: '300px', width: '100%' }}
              />
              <SelectField label="role" options={[]} />
            </div>
            <div className="w-1/2 inputs-right">
              <InputField label="Surname" type="text" />
              <InputField label="Job Title" type="text" />
            </div>
          </div>

          <div className="flex justify-end">
            <Link>
              <button
                className="border-2 border-pink text-white rounded py-2 text-2xl"
                style={{ width: '200px' }}>
                cancel
              </button>
            </Link>
            <Link>
              <button
                className="border-2 border-pink bg-pink text-white rounded py-2 text-2xl ml-2"
                style={{ width: '200px' }}>
                update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
