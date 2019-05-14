import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import TopLevelFolder from './TopLevelFolder';

export const MediaLibraryContext = React.createContext();

const MediaLibrary = ({ baseUrl, data, fetchData }) => {
  const context = {
    fetchData,
    baseUrl,
  };
  return (
    <MediaLibraryContext.Provider value={context}>
      <div className="flex mb-6">
        <NavLink
          exact
          to={`${baseUrl}/pr-and-imagery`}
          className="mr-4 text-xl border-b-3 border-transparent border-b pb-1"
          activeClassName="border-tirques">
          Pr & Imagery
        </NavLink>
        <NavLink
          to={`${baseUrl}/assets`}
          className="mr-4 text-xl border-b-3 border-transparent border-b pb-1"
          activeClassName="border-tirques">
          Assets
        </NavLink>
        <NavLink
          to={`${baseUrl}/in-store-material`}
          className="mr-4 text-xl border-b-3 border-transparent border-b pb-1"
          activeClassName="border-tirques">
          In-Store Material
        </NavLink>
      </div>
      <Route
        path={`${baseUrl}/:folder?`}
        component={props => <TopLevelFolder {...props} folders={data} />}
      />
    </MediaLibraryContext.Provider>
  );
};

export default MediaLibrary;
