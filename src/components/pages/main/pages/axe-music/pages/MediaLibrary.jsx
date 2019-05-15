import React from 'react';
import Aside from '../components/Aside';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Alert from 'react-s-alert';
import { getMediaLibrary } from '@endpoints/media-library';
import { Redirect } from 'react-router-dom';
import MediaLibraryComponent from '@components/MediaLibrary/MediaLibrary';

const MediaLibrary = ({ match, location }) => {
  const pathComponents = location.pathname.replace('/', '').split('/');
  const [data, setData] = React.useState({});
  async function fetchResource() {
    const { error, data } = await getMediaLibrary();
    if (!error) {
      const folders = data.data.data.folders.data;
      const pomData = {};
      pomData['pr-and-imagery'] = folders.filter(
        folder => folder.name === 'Pr & imagery',
      )[0];
      pomData['assets'] = folders.filter(folder => folder.name === 'Assets')[0];
      pomData['in-store-material'] = folders.filter(
        folder => folder.name === 'In-store material',
      )[0];
      setData(pomData);
    } else {
      Alert.error(error.response.data.message);
    }
  }
  React.useEffect(() => {
    fetchResource();
  }, []);
  return (
    <>
      {match.isExact ? (
        <Redirect to="/axe-music/media-library/pr-and-imagery" />
      ) : (
        <div className="max-w-content mx-auto pt-4 px-4 md:flex">
          <div className="md:w-64 md:mr-10 sm:mb-4">
            <Aside varibleContent="To read more on the best practices when using the AXE music imagery, visit the brand guidelines" />
          </div>
          <div className="flex-grow md:pl-10">
            {pathComponents.length <= 3 ? (
              <div className="mb-8">
                <PrimaryTitle>Media Library</PrimaryTitle>
              </div>
            ) : null}
            <MediaLibraryComponent
              manageSectionUrl={`${match.url}/manage`}
              baseUrl={match.url}
              data={data}
              showTabs={pathComponents.length <= 3}
              fetchData={fetchResource}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MediaLibrary;
