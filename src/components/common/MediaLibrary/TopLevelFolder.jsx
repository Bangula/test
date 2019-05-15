import React from 'react';
import FoldersSection from './utils/FoldersSection';
import FilesSection from './utils/FilesSection';
import { Route, Link } from 'react-router-dom';
import SubPage from './SubPage';
import { connect } from 'react-redux';
import { showAdminFeatures } from '@state/user/selectors';
import { MediaLibraryContext } from './MediaLibrary';

const mapStateToProps = state => {
  return {
    showAdminFeatures: showAdminFeatures(state),
  };
};

const TopLevelFolder = ({
  match,
  folders,
  showAdminFeatures,
  manageSectionUrl,
}) => {
  const data = folders[match.params.folder];
  const context = React.useContext(MediaLibraryContext);
  return data ? (
    <>
      {match.isExact ? (
        <>
          {showAdminFeatures ? (
            <div className="flex justify-end mb-4">
              <Link to={`${manageSectionUrl}/${data.id}`}>
                <button className="uppercase text-white border rounded border-pink px-8 pb-1 pt-2 tracking-wide text-xl">
                  Manage Assets
                </button>
              </Link>
            </div>
          ) : null}
          <FoldersSection
            showAdminFeatures={showAdminFeatures}
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
      {data.folders.data.length ? (
        <Route
          path={`${match.url}/:folder`}
          component={props => (
            <SubPage
              {...props}
              foldersData={data}
              showAdminFeatures={showAdminFeatures}
              manageSectionUrl={manageSectionUrl}
            />
          )}
        />
      ) : null}
    </>
  ) : (
    <p className="font-arial">Loading...</p>
  );
};

export default connect(mapStateToProps)(TopLevelFolder);
