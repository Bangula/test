import React from 'react';

const ViewSwitch = ({ view, toggleView }) => {
  const iconsClasses = {
    list: ['fa', 'fa-list', 'text-3xl'],
    grid: ['fa', 'fa-th', 'text-3xl', 'ml-3'],
  };
  if (!view) {
    iconsClasses.list.push('text-grey-darker');
    iconsClasses.list.push('cursor-pointer');
  } else {
    iconsClasses.grid.push('text-grey-darker');
    iconsClasses.grid.push('cursor-pointer');
  }
  return (
    <div className="flex">
      <i
        className={iconsClasses.list.join(' ')}
        onClick={() => toggleView(true)}
      />
      <i
        className={iconsClasses.grid.join(' ')}
        onClick={() => toggleView(false)}
      />
    </div>
  );
};

export default ViewSwitch;
