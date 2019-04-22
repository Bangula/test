import React, { useState } from 'react';
import placeholderLogo from '@images/logo.png';

const MediaCard = ({ media }) => {
  const [opened, toggle] = useState(false);
  const iconClasses = ['fa', 'ml-1'];
  if (opened) {
    iconClasses.push('fa-chevron-up');
  } else {
    iconClasses.push('fa-chevron-down');
  }
  return (
    <div>
      <h3 className="font-thin text-2xl mb-1">{media.title}</h3>
      <div className="h-48 flex justify-center items-center mb-1 bg-grey-darker">
        {/* <img src={media.image} alt="" className="max-w-full" /> */}
        <img src={placeholderLogo} alt="" className="max-w-full" />
      </div>
      <div>
        <div className="flex justify-between font-thin">
          <p>{media.description}</p>
          <p>
            {media.type === 'MULTIPLE' ? (
              <span className="cursor-pointer" onClick={() => toggle(!opened)}>
                Multiple
                <i className={iconClasses.join(' ')} />
              </span>
            ) : (
              <span>{media.type}</span>
            )}
          </p>
        </div>
      </div>
      <button className="bg-tirques px-5 pb-1 pt-2 tracking-wide text-xl w-full">
        <i className="fa fa-download mr-4" />
        Download
      </button>
    </div>
  );
};

export default MediaCard;
