import React from 'react';
import profileImg from '@images/oval@2x.png';
import { Link, Route } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AssetHub from '../asset-hub';
import { getArtist } from '@endpoints/artists';
import Alert from 'react-s-alert';
import MediaPreview from './components/MediaPreview';
import ToursSchedule from './components/ToursSchedule';

const Artist = ({ match }) => {
  const [artist, setArtist] = React.useState(null);
  const doGetArtist = async () => {
    const { error, data } = await getArtist(match.params.artist);
    if (!error) {
      setArtist(data.data.data);
    } else {
      Alert.error(error.response.data.message);
    }
  };
  React.useEffect(() => {
    doGetArtist();
  }, [match.params.artist]);
  return (
    <div className="container mx-auto pt-12">
      {artist ? (
        <div className="flex">
          <div className="mr-10" style={{ maxWidth: '200px' }}>
            <div className="mb-6 w-48 h-48 rounded-full overflow-hidden">
              <img src={profileImg} alt="Artist" />
            </div>
            <div className="mb-8 text-center">
              <h2 className="mb-1">{artist.name}</h2>
              <p className="text-tirques font-arial tracking-wide">
                DJ / Record Producer
              </p>
            </div>
            {match.isExact ? (
              <div>
                <Link to={`${match.url}/requests`} className="block mb-2">
                  <button
                    className="uppercase text-white border rounded border-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                    style={{ width: '200px' }}>
                    events
                  </button>
                </Link>

                <Link
                  to={`${match.url}/requests/experiences`}
                  className="block mb-2">
                  <button
                    className="uppercase text-white border rounded border-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                    style={{ width: '200px' }}>
                    Experiences
                  </button>
                </Link>

                <Link
                  to={`${match.url}/requests/merchandise`}
                  className="block mb-2">
                  <button
                    className="uppercase text-white border rounded border-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                    style={{ width: '200px' }}>
                    Merchandise
                  </button>
                </Link>

                <Link className="block mb-2" to={`${match.url}`}>
                  <button
                    className="uppercase text-black border rounded border-tirques bg-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                    style={{ width: '200px' }}>
                    Talent access
                  </button>
                </Link>
              </div>
            ) : null}
          </div>

          <div className="px-12 flex-1">
            {match.isExact ? (
              <Tabs>
                <TabList className="mb-8">
                  <Tab>Partnership information</Tab>
                  <Tab>Guidelines</Tab>
                  <Tab>Toolkits</Tab>
                  <Tab>Tour Schedule</Tab>
                </TabList>

                <TabPanel>
                  <div className="font-arial leading-tight">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Urna condimentum mattis. <br /> <br />
                      Pellentesque id nibh tortor. Lorem ipsum dolor sit amet
                      consectetur adipiscing elit ut aliquam. Mollis aliquam ut
                      porttitor leo a diam.
                      <br /> <br />
                      Lacinia at quis risus sed vulputate odio. Semper auctor
                      neque vitae tempus quam pellentesque nec nam. Congue nisi
                      vitae suscipit tellus mauris a diam maecenas sed. Pharetra
                      diam sit amet nisl suscipit adipiscing. Tortor at auctor
                      urna nunc id.
                    </p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>content 2</div>
                </TabPanel>
                <TabPanel>
                  <div>content 3</div>
                </TabPanel>
                <TabPanel>
                  <ToursSchedule artist={match.params.artist} />
                </TabPanel>
              </Tabs>
            ) : null}
            <Route
              path={`${match.url}/asset-hub`}
              component={props => (
                <AssetHub
                  {...props}
                  data={artist.mediaLibrary.data}
                  fetchData={doGetArtist}
                />
              )}
            />
          </div>
          {match.isExact ? (
            <div
              className="border-l-2 border-solid border-tirques pl-12"
              style={{ width: '330px' }}>
              <MediaPreview data={artist.mediaLibrary.data} match={match} />
            </div>
          ) : null}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Artist;
