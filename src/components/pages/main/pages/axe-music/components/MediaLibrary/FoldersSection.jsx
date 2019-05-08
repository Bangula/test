import React from 'react';
import { Link } from 'react-router-dom';
import FolderIcon from '@components/ui-elements/FolderIcon/FolderIcon';

const FoldersSection = ({ match, folders, id }) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl mb-3">Folders</h2>
        <div>
          <button className="uppercase text-white border rounded border-pink px-8 pb-1 pt-2 tracking-wide text-xl">
            New folder
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {folders.map(folder => {
          return (
            <div
              className="mb-4 pr-4"
              style={{ flexBasis: '33.33333%' }}
              key={folder.id}>
              <Link to={`${match.url}/${folder.name}`}>
                <FolderIcon name={folder.name} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FoldersSection;
