import React from 'react';
import profileImg from '@images/oval@2x.png';
import { Link, Route } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AssetHub from '../asset-hub';
import { getArtist } from '@endpoints/artists';
import Alert from 'react-s-alert';
import MediaPreview from './components/MediaPreview';
import ToursSchedule from './components/ToursSchedule';
import { connect } from 'react-redux';
import { isAdminFeaturesEnabled } from '@state/user/selectors';

const mapStateToProps = state => {
  return {
    isAdminFeaturesEnabled: isAdminFeaturesEnabled(state),
  };
};

const Artist = ({ match, isAdminFeaturesEnabled }) => {
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
              <img
                src={
                  artist.images.data.length > 0 && artist.images.data[0].path
                }
                alt="Artist"
              />
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

                <Link to={`${match.url}/requests/gifts`} className="block mb-2">
                  <button
                    className="uppercase text-white border rounded border-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                    style={{ width: '200px' }}>
                    Gifts & Merch
                  </button>
                </Link>

                {/* <Link className="block mb-2" to={`${match.url}`}>
                  <button
                    className="uppercase text-black border rounded border-tirques bg-tirques px-8 pb-2 pt-2 tracking-wide text-2xl"
                    style={{ width: '200px' }}>
                    Talent access
                  </button>
                </Link> */}
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
                    <p>{artist.information}</p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>{artist.guidelines}</div>
                </TabPanel>
                <TabPanel>
                  <div>{artist.toolkits}</div>
                </TabPanel>
                <TabPanel>
                  <ToursSchedule
                    artist={match.params.artist}
                    isAdminFeaturesEnabled={isAdminFeaturesEnabled}
                  />
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

export default connect(mapStateToProps)(Artist);
