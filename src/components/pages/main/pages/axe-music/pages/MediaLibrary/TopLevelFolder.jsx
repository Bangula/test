import React from 'react';
import FoldersSection from '../../components/MediaLibrary/FoldersSection';
import FilesSection from '../../components/MediaLibrary/FilesSection';
import { Route, Link } from 'react-router-dom';
import SubPage from './SubPage';

const TopLevelFolder = ({ match, folders }) => {
  const data = folders[match.params.folder || '/'];
  console.log(data);
  return data ? (
    <>
      {match.isExact ? (
        <>
          <div className="flex justify-end mb-4">
            <Link to={`/axe-music/media-library/manage/${data.id}`}>
              <button className="uppercase text-white border rounded border-pink px-8 pb-1 pt-2 tracking-wide text-xl">
                Manage Assets
              </button>
            </Link>
          </div>
          <FoldersSection
            folders={data.folders.data}
            match={match}
            folderId={data.id}
            libraryId={data.library_id}
          />
          {data.files.data.length ? (
            <FilesSection files={data.files.data} />
          ) : null}
        </>
      ) : null}
      <Route
        path={`${match.url}/:folder`}
        component={props => <SubPage {...props} data={data} />}
      />
    </>
  ) : (
    <p className="font-arial">Loading...</p>
  );
};

export default TopLevelFolder;
