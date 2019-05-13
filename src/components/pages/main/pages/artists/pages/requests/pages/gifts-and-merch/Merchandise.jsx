import React from 'react';

const merches = [
  {
    id: '4',
    image: '',
    title: 'Grey/Black Hoodie',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: '5',
    image: '',
    title: 'Grey/Black Hoodie',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: '6',
    image: '',
    title: 'Grey/Black Hoodie',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

const Merchandise = () => {
  return (
    <div>
      <div className="max-w-md px-3 mb-8">
        <h1>Merchandise</h1>
        <p className="font-arial">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          aperiam dolorum unde. Ducimus, voluptates soluta. Nostrum quasi ab
          quam nihil voluptatum doloribus a aliquid sit voluptate, eligendi
          dolore earum quia!
        </p>
      </div>
      <div className="flex flex-wrap">
        {merches.map(m => (
          <div key={m.id} className="w-1/3 px-3 mb-10">
            <div
              className="bg-grey-light mb-2"
              style={{ paddingBottom: '100%' }}
            />
            <h1 className="mb-4 font-2xl text-tirques">{m.title}</h1>
            <p className="font-arial">{m.desc}</p>
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

export default Merchandise;
