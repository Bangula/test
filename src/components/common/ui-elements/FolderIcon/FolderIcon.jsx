import React from 'react';

const FolderIcon = ({ name }) => {
  return (
    <div className="font-arial no-wrap overflow-hidden bg-grey-light text-black py-3 px-4 rounded">
      <i className="fa fa-folder mr-4" />
      {name}
    </div>
  );
};

export default FolderIcon;
