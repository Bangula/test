import React from 'react';
import { Link } from 'react-router-dom';
import http from '@services/http';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

const LatestRequests = ({ match: { path } }) => {
  const [artists, setArtists] = React.useState([]);

  React.useEffect(() => {
    const fetchArtists = async () => {
      try {
        const result = await http('/artists');

        setArtists(result.data.data);
        console.log(result.data.data);
      } catch (err) {
        console.log('Error fetching artists!');
      }
    };

    fetchArtists();
  }, []);
  return (
    <div>
      {artists.length > 0 && (
        <div className="flex items-center">
          <div className="text-red">Partnerships:</div>
          {artists.map(x => (
            <Link
              className="border border-white mx-4 p-4 mb-8"
              to={`${path}/artist/${x.id}`}>
              {x.name}
            </Link>
          ))}
        </div>
      )}
      <PrimaryTitle>Latest Requests</PrimaryTitle>
    </div>
  );
};

export default LatestRequests;
