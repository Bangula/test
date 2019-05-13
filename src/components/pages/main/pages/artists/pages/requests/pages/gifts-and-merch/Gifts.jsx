import React from 'react';

const gifts = [
  {
    image: '',
    id: '0',
    title: 'Axe regimen gift set',
    contents: 'Axe Apollo Set, 3 pc: Antip',
    price: '20',
  },
  {
    image: '',
    id: '1',
    title: 'Axe regimen gift set',
    contents: 'Axe Apollo Set, 3 pc: Antip',
    price: '20',
  },
  {
    image: '',
    id: '2',
    title: 'Axe regimen gift set',
    contents: 'Axe Apollo Set, 3 pc: Antip',
    price: '20',
  },
  {
    image: '',
    id: '3',
    title: 'Axe regimen gift set',
    contents: 'Axe Apollo Set, 3 pc: Antip',
    price: '20',
  },
];

const Gifts = () => {
  return (
    <div>
      <div className="max-w-md px-3 mb-8">
        <h1 className="mb-2">Gifting</h1>
        <p className="font-arial">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          aperiam dolorum unde. Ducimus, voluptates soluta. Nostrum quasi ab
          quam nihil voluptatum doloribus a aliquid sit voluptate, eligendi
          dolore earum quia!
        </p>
      </div>
      <div className="flex flex-wrap">
        {gifts.map(gift => (
          <div key={gift.id} className="w-1/3 px-3 mb-10">
            <div
              className="bg-grey-light mb-2"
              style={{ paddingBottom: '100%' }}
            />
            <h1 className="mb-4 font-2xl text-tirques">{gift.title}</h1>
            <div className="flex font-arial mb-2">
              <div className="mr-6" style={{ width: '73px' }}>
                Contents:
              </div>
              <div>{gift.contents}</div>
            </div>
            <div className="flex font-arial mb-6">
              <div className="mr-6" style={{ width: '73px' }}>
                Price:
              </div>
              <div>£{gift.price}</div>
            </div>
            <div className="flex justify-end">
              <button className="text-xl bg-tirques rounded px-8 pt-2 pb-1">
                Request
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gifts;
