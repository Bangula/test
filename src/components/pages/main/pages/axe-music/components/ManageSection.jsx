import React from 'react';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

const ManageSection = ({ section }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-pink mb-1">Manage Section</h3>
          <PrimaryTitle>Axe music {section}</PrimaryTitle>
        </div>
        <div>
          <button
            className="text-xl w-32 border border-pink rounded text-white pt-2 pb-1">
            Cancel
          </button>
          <button
            className="text-xl w-32 bg-pink rounded text-white pt-2 pb-1 ml-3">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageSection;
