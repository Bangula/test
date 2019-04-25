import React from 'react';
import { fetchUser } from '@endpoints/admin';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

const UserInfo = props => {
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
      <PrimaryTitle>User Management</PrimaryTitle>
    </div>
  );
};

export default UserInfo;
