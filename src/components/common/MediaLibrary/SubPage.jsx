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
  previousFolders,
}) => {
  const data = foldersData.folders.data.filter(
    folder => folder.id === match.params.folder,
  )[0];
  return data ? (
    <div>
      {match.isExact && (
        <>
          <div className="mb-8">
            <Breadcrumbs
              match={match}
              previousFolders={previousFolders}
              currentFolder={data}
            />
            <PrimaryTitle>{data.name}</PrimaryTitle>
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
              showAdminFeatures={showAdminFeatures}
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
              previousFolders={[
                ...previousFolders,
                {
                  id: data.id,
                  name: data.name,
                  url: `${match.url}`,
                },
              ]}
            />
          )}
        />
      ) : null}
    </div>
  ) : null;
};

export default SubPage;
