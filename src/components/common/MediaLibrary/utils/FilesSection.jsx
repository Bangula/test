import React, { useState } from 'react';
import GridToListSwitch from '@components/ui-elements/GridToListSwitch/GridToListSwitch';
import FilesGridView from './FilesGridView';
import FilesTableView from './FilesTableView';
import FilePreview from '@components/ui-elements/FilePreview/FilePreview';

const FilesSection = ({ files }) => {
  const [view, toggleView] = useState(true);
  const [fileToPreview, setFileToPreview] = useState(null);
  const deployFilePreview = React.useCallback(file => {
    setFileToPreview(file);
  });
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-3xl mb-3">Files</h2>
        <GridToListSwitch view={view} toggleView={toggleView} />
      </div>
      {view ? (
        <FilesTableView files={files} deployFilePreview={deployFilePreview} />
      ) : (
        <FilesGridView files={files} deployFilePreview={deployFilePreview} />
      )}
      <FilePreview close={() => setFileToPreview(null)} file={fileToPreview} />
    </section>
  );
};

export default FilesSection;
