import React from 'react';
import Gifts from './Gifts';
import Merchandise from './Merchandise';

const GiftsAndMerchandise = () => {
  return (
    <>
      <div className="mb-12">
        <Gifts />
      </div>
      <div>
        <Merchandise />
      </div>
    </>
  );
};

export default GiftsAndMerchandise;
