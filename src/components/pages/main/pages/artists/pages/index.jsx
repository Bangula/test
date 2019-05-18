import React from 'react';
import backgroundImage from '@images/picture-1@2x.png';
import { Link } from 'react-router-dom';
import { getArtists } from '@endpoints/artists';

const ArtistsList = () => {
  const [artists, setArtists] = React.useState([]);
  const doGetArtists = async () => {
    const { error, data } = await getArtists();
    if (!error) {
      setArtists(data.data.data);
    }
  };
  React.useEffect(() => {
    doGetArtists();
  }, []);
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h1 className="title-primary mb-8 text-white text-left">
          Browse Artists:
        </h1>

        <div className="flex flex-wrap justify-between">
          {artists.map(artist => (
            <div
              key={artist.id}
              className="relative mr-4 mb-8"
              style={{
                maxWidth: '560px',
                width: '100%',
                height: '396px',
                background: `url(${backgroundImage}) no-repeat center`,
                backgroundSize: 'cover',
              }}>
              <div
                className="absolute pin-r"
                style={{ bottom: '40px', right: '-10px' }}>
                <div
                  className="p-4"
                  style={{ backgroundColor: 'rgba(0,0,0, .8)' }}>
                  <p
                    className="text-white font-arial"
                    style={{ fontSize: '17px' }}>
                    DJ / Record Producer
                  </p>
                  <p
                    className="text-tirques uppercase"
                    style={{ fontSize: '44px' }}>
                    {artist.name}
                  </p>

                  <Link
                    to={`/artists/${artist.id}`}
                    className="bg-tirques text-black font-arial font-bold py-2 px-6 text-base absolute pin-r"
                    style={{ right: '10px' }}>
                    <span className="mr-3">View Profile</span>
                    <span>
                      <i className="fas fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsList;
