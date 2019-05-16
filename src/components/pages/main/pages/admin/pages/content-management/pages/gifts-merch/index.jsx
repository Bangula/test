import React from 'react';

import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';

import GiftForm from './GiftForm';
import MerchandiseForm from './MerchandiseForm';

const NewGiftMerch = props => {
  const [type, setType] = React.useState();
  return (
    <div>
      <h3 className="text-red">New Form</h3>
      <PrimaryTitle>Gifting & Merchandise</PrimaryTitle>
      <div className="font-arial mb-8">
        <label className="mx-4">
          <input
            onChange={() => setType('gift')}
            type="radio"
            value="gift"
            checked={type === 'gift'}
          />
          Gifting
        </label>
        <label className="mx-4">
          <input
            onChange={() => setType('merchandise')}
            type="radio"
            value="merchadise"
            checked={type === 'merchandise'}
          />
          Merchandise
        </label>
      </div>

      {type === 'gift' && <GiftForm />}
      {type === 'merchandise' && <MerchandiseForm />}
    </div>
  );
};

export default NewGiftMerch;
