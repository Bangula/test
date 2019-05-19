import React from 'react';
import { Link } from 'react-router-dom';
import http from '@services/http';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

const ContentManagementStart = ({ match: { path } }) => {
  const [selectedArtist, selectArtist] = React.useState();
  const [artists, setArtists] = React.useState([]);

  React.useEffect(() => {
    const fetchArtists = async () => {
      try {
        const result = await http('/artists?include=images');

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
      <div className="flex flex-row">
        <div className="w-1/3">
          <PrimaryTitle>Content Management</PrimaryTitle>
        </div>
        <div className="w-2/3" />
      </div>

      <div className="flex flex-row font-arial">
        <div className="w-1/3" />
        <div className="w-2/3">
          <p className="w-2/3">
            Lo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            eu augue ut lectus arcu.
          </p>

          <p className="my-8">Please select an artist:</p>
          {artists.map(artist => (
            // <div
            //   onClick={() => selectArtist(artist)}
            //   className={`p-2 ${
            //     selectedArtist && artist.id === selectedArtist.id
            //       ? 'text-tirques'
            //       : ''
            //   }`}>
            //   {artist.name}
            // </div>

            <img
              className={`rounded mx-4 rounded-full ${
                selectedArtist && artist.id === selectedArtist.id
                  ? 'border-2 border-tirques border-solid'
                  : ''
              }`}
              style={{ height: '70px', width: '70px' }}
              alt={artist.name}
              title={artist.name}
              src={artist.images.data.length && artist.images.data[0].path}
              onClick={() => selectArtist(artist)}
            />
          ))}

          {selectedArtist && (
            <div>
              {' '}
              <p className="my-8">Please select a type:</p>
              <div className="flex">
                <Link
                  to={`${path}events/${selectedArtist.id}`}
                  className="btn border-2 border-solid border-white text-white rounded py-2 text-2xl mr-5">
                  Events
                </Link>{' '}
                <Link
                  to={`${path}experiences/${selectedArtist.id}`}
                  className="btn border-2 border-solid border-white text-white rounded py-2 text-2xl mr-5">
                  Experiences
                </Link>
                <Link
                  to={`${path}gifts-merch/${selectedArtist.id}`}
                  className="btn border-2 border-solid border-white text-white rounded py-2 text-2xl">
                  Gifts and Merch
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentManagementStart;
