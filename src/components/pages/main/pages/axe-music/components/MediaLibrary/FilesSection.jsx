import React, { useState } from 'react';
import ViewSwitch from './ViewSwitch';
import FilesGridView from './FilesGridView';
import FilesTableView from './FilesTableView';

const FilesSection = ({ files }) => {
  const [view, toggleView] = useState(true); // true: list, false: grid
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-3xl mb-3">Files</h2>
        <ViewSwitch view={view} toggleView={toggleView} />
      </div>
      {view ? (
        <FilesTableView files={files} />
      ) : (
        <FilesGridView files={files} />
      )}
    </section>
  );
};

export default FilesSection;
