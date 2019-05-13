import React from 'react';
import Aside from '../../components/Aside';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Alert from 'react-s-alert';
import { getMediaLibrary } from '@endpoints/media-library';
import { Route, NavLink, Redirect } from 'react-router-dom';
import TopLevelFolder from './TopLevelFolder';

export const MediaLibraryContext = React.createContext();

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
        <MediaLibraryContext.Provider value={{ fetchResource }}>
          <div className="max-w-content mx-auto pt-4 px-4 md:flex">
            <div className="md:w-64 md:mr-10 sm:mb-4">
              <Aside varibleContent="To read more on the best practices when using the AXE music imagery, visit the brand guidelines" />
            </div>
            <div className="flex-grow md:pl-10">
              {pathComponents.length <= 3 ? (
                <>
                  <div className="mb-8">
                    <PrimaryTitle>Media Library</PrimaryTitle>
                  </div>
                  <div className="flex mb-6">
                    <NavLink
                      exact
                      to={`${match.url}/pr-and-imagery`}
                      className="mr-4 text-xl border-b-3 border-transparent border-b pb-1"
                      activeClassName="border-tirques">
                      Pr & Imagery
                    </NavLink>
                    <NavLink
                      to={`${match.url}/assets`}
                      className="mr-4 text-xl border-b-3 border-transparent border-b pb-1"
                      activeClassName="border-tirques">
                      Assets
                    </NavLink>
                    <NavLink
                      to={`${match.url}/in-store-material`}
                      className="mr-4 text-xl border-b-3 border-transparent border-b pb-1"
                      activeClassName="border-tirques">
                      In-Store Material
                    </NavLink>
                  </div>
                </>
              ) : null}
              <Route
                path={`${match.url}/:folder?`}
                component={props => (
                  <TopLevelFolder {...props} folders={data} />
                )}
              />
            </div>
          </div>
        </MediaLibraryContext.Provider>
      )}
    </>
  );
};

export default MediaLibrary;
