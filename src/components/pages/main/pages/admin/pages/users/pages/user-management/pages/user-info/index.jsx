import React from 'react';
import { fetchUser } from '@endpoints/admin';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import {Link} from 'react-router-dom';

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
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-12">
        <PrimaryTitle>User Management</PrimaryTitle>
        <div className="flex">
          <button className="text-white border-2 border-pink rounded py-2 text-2xl" style={{width: '172px'}}>delete user</button>
          <Link to={`${props.location.pathname}/edit`}>
            <button className="text-white bg-pink rounded py-2 ml-6 text-2xl border-2 border-pink rounded" style={{width: '172px'}}>edit profile</button>
          </Link>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h3 className="text-4xl">Meg Rigden</h3>
          <p className="text-sm font-arial font-light">Last Activity: 18.01.2019 12:48:16</p>
        </div>

        <div className="flex justify-between">
          <div className="pr-6">
            <div className="mb-10">
              <h4 className="text-pink text-2xl mb-2">contact details:</h4>
              <div className="pl-2">
                <p className="font-arial py-2 font-light"><span className="font-bold mr-4">Email:</span> meg.rigden@example.com</p>
                <p className="font-arial py-2 font-light"><span className="font-bold mr-4">Phone Number:</span> +44 (0) 7123 456 7890</p>
              </div>
            </div>

            <div>
              <h4 className="text-pink text-2xl mb-2">User details:</h4>
              <div className="pl-2">
                <p className="font-arial py-2 font-light"><span className="font-bold mr-4">Job Title:</span> Lorem Ipsum</p>
                <p className="font-arial py-2 font-light"><span className="font-bold mr-4">Market:</span> Europe</p>
                <p className="font-arial py-2 font-light"><span className="font-bold mr-4">Role:</span> User Role 1</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-pink text-2xl mb-2">activity log:</h4>

            <div>table</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
