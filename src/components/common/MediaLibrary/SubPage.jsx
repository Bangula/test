import React from 'react';
import FoldersSection from './utils/FoldersSection';
import FilesSection from './utils/FilesSection';
import Breadcrumbs from './utils/Breadcrumbs';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import { Route, Link } from 'react-router-dom';

const SubPage = ({
  match,
  location,
  foldersData,
  showAdminFeatures,
  manageSectionUrl,
}) => {
  const data = foldersData.folders.data.filter(
    folder => folder.name === match.params.folder,
  )[0];
  return data ? (
    <div>
      {match.isExact && (
        <>
          <div className="mb-8">
            <Breadcrumbs location={location} />
            <PrimaryTitle>{match.params.folder}</PrimaryTitle>
          </div>
          {showAdminFeatures ? (
            <div className="flex justify-end mb-4">
              <Link to={`${manageSectionUrl}/${data.id}`}>
                <button className="uppercase text-white border rounded border-pink px-8 pb-1 pt-2 tracking-wide text-xl">
                  Manage Assets
                </button>
              </Link>
            </div>
          ) : null}
          <div className="mb-8">
            <FoldersSection
              folders={data.folders.data}
              match={match}
              folderId={data.id}
              libraryId={data.library_id}
            />
          </div>
          {data.files.data.length ? (
            <FilesSection files={data.files.data} />
          ) : null}
        </>
      )}
      {data.folders.data.length ? (
        <Route
          path={`${match.url}/:folder`}
          component={props => (
            <SubPage
              {...props}
              foldersData={data}
              showAdminFeatures={showAdminFeatures}
            />
          )}
        />
      ) : null}
    </div>
  ) : null;
};

export default SubPage;
