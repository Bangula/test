import React, { useState } from 'react';
import { getFileDownloadUrl } from '@endpoints/media-library';

const MediaCard = ({ file, object, onPreviewClick }) => {
  const [opened, toggle] = useState(false);
  const iconClasses = ['fa', 'ml-1'];
  if (opened) {
    iconClasses.push('fa-chevron-up');
  } else {
    iconClasses.push('fa-chevron-down');
  }
  const doGetDownloadUrl = React.useCallback(async id => {
    const { error, data } = await getFileDownloadUrl(id);
    if (!error) {
      window.open(data.data.url, '_blank');
    }
  });
  return (
    <div>
      <h3 className="font-thin text-2xl mb-1 truncate">{file.name}</h3>
      <div className="h-48 flex justify-center items-center mb-1 bg-grey-darker px-4">
        <img
          onClick={() => onPreviewClick(file)}
          src={file.url}
          alt=""
          className="max-w-full"
        />
      </div>
      <div>
        <div className="flex justify-between font-thin mb-2">
          <p>{object}</p>
          <p>
            {file.versions && file.versions.data.length ? (
              <span className="cursor-pointer" onClick={() => toggle(!opened)}>
                Multiple
                <i className={iconClasses.join(' ')} />
              </span>
            ) : (
              <span>{file.ext}</span>
            )}
          </p>
        </div>
        {file.versions && file.versions.data.length && opened ? (
          <div className="px-3">
            {file.versions.data.map(version => (
              <div className="flex justify-between mb-2" key={version.id}>
                <p className="font-arial text-sm">{version.filename}</p>
                <div>
                  <i
                    onClick={() => doGetDownloadUrl(version.id)}
                    className="fa fa-download text-sm" />
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <button
        onClick={() => doGetDownloadUrl(file.id)}
        className="bg-tirques px-5 pb-1 pt-2 tracking-wide text-xl w-full">
        <i className="fa fa-download mr-4" />
        Download
      </button>
    </div>
  );
};

export default MediaCard;
