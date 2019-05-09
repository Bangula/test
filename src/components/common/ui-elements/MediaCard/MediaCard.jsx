import React, { useState } from 'react';

const MediaCard = ({ file, object }) => {
  const [opened, toggle] = useState(false);
  const iconClasses = ['fa', 'ml-1'];
  if (opened) {
    iconClasses.push('fa-chevron-up');
  } else {
    iconClasses.push('fa-chevron-down');
  }
  return (
    <div>
      <h3 className="font-thin text-2xl mb-1 truncate">{file.filename}</h3>
      <div className="h-48 flex justify-center items-center mb-1 bg-grey-darker px-4">
        <img src={file.url} alt="" className="max-w-full" />
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
                  <i className="fa fa-download text-sm" />
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <button className="bg-tirques px-5 pb-1 pt-2 tracking-wide text-xl w-full">
        <i className="fa fa-download mr-4" />
        Download
      </button>
    </div>
  );
};

export default MediaCard;
