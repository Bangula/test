import React from 'react';
import MediaCard from '@components/ui-elements/MediaCard/MediaCard';

const FilesGridView = ({ files, deployFilePreview }) => {
  return (
    <div className="flex flex-wrap">
      {files.map(file => (
        <div className="px-4 mb-5" style={{ flexBasis: '25%' }} key={file.id}>
          <MediaCard
            file={file}
            object={file.object}
            onPreviewClick={deployFilePreview}
          />
        </div>
      ))}
    </div>
  );
};

export default FilesGridView;
