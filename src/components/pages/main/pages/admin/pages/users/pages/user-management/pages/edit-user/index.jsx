import React from 'react';
import { fetchUser } from '@endpoints/admin';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import InputField from '@components/InputField/InputField';

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
  return (
    <div>
      <PrimaryTitle>Edit Profile</PrimaryTitle>

      <div>
        <InputField label="Name" type="text" />
        <InputField label="Email" type="email" />
        <InputField label="Surname" type="text" />
        <InputField label="Job Title" type="text" />
      </div>
    </div>
  );
};

export default EditUser;
