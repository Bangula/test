import React from 'react';
import { Link } from 'react-router-dom';
import FolderIcon from '@components/ui-elements/FolderIcon/FolderIcon';
import NewFolder from '@components/NewFolder/NewFolder';
import { createFolder } from '@endpoints/media-library';
import { MediaLibraryContext } from '../MediaLibrary';

const FoldersSection = ({
  match,
  folders,
  folderId,
  libraryId,
  showAdminFeatures,
  preventAddingNewFolders,
}) => {
  const [addFolderModal, toggleAddFolderModal] = React.useState(false);
  const context = React.useContext(MediaLibraryContext);
  const closeModal = () => {
    toggleAddFolderModal(false);
  };
  const onAddFolder = async name => {
    const payload = { parent_id: folderId, library_id: libraryId, name };
    const { error } = await createFolder(payload);
    if (!error) {
      context.fetchData();
    }
  };
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl mb-3">Folders</h2>
        {showAdminFeatures && !preventAddingNewFolders ? (
          <div>
            <button
              onClick={() => toggleAddFolderModal(true)}
              className="uppercase text-white border rounded border-pink px-8 pb-1 pt-2 tracking-wide text-xl">
              New folder
            </button>
          </div>
        ) : null}
      </div>
      {folders.length ? (
        <div className="flex flex-wrap">
          {folders.map(folder => {
            return (
              <div
                className="mb-4 pr-4"
                style={{ flexBasis: '33.33333%' }}
                key={folder.id}>
                <Link to={`${match.url}/${folder.id}`}>
                  <FolderIcon name={folder.name} />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="font-arial">No folders.</p>
      )}
      <NewFolder
        type={'folder'}
        opened={addFolderModal}
        close={closeModal}
        onAddFolder={onAddFolder}
      />
    </section>
  );
};

export default FoldersSection;
