import React from 'react';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Counter from '@components/ui-elements/Counter/Counter';

const Details = () => {
  const [tickets, setTickets] = React.useState({
    general: 10,
    vip: 3,
    meetAndGreet: 2,
  });
  const updateTickets = React.useCallback((type, value) => {
    const pomTickets = { ...tickets };
    pomTickets[type] = value;
    setTickets(pomTickets);
  }, []);
  return (
    <div className="container mx-auto flex">
      <div className="flex-1">
        <button className="text-xl mb-8 px-4 pt-2 pb-1 border border-pink rounded text-white">
          &larr; Go back
        </button>
        <div className="mb-8">
          <PrimaryTitle>Dreambeach chile 2019</PrimaryTitle>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-pink">Reqeusted by:</h3>
          <div className="pl-4 flex font-arial mb-2">
            <div className="font-bold mr-6" style={{ width: '125px' }}>
              Full Name:
            </div>
            <div className="font-arial">John Smith</div>
          </div>
          <div className="pl-4 flex font-arial">
            <div className="font-bold mr-6" style={{ width: '125px' }}>
              Market:
            </div>
            <div className="font-arial">Europe</div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-pink">Reqeusted quantity:</h3>
          <div className="pl-4 flex items-center font-arial mb-8">
            <div className="font-bold mr-6" style={{ width: '125px' }}>
              General Ticket:
            </div>
            <div className="font-arial mr-8" style={{ width: '105px' }}>
              10 Tickets
            </div>
            <div>
              <Counter
                color="pink"
                value={tickets.general}
                setValue={value => updateTickets('general', value)}
              />
            </div>
          </div>
          <div className="pl-4 flex items-center font-arial mb-8">
            <div className="font-bold mr-6" style={{ width: '125px' }}>
              VIP Ticket:
            </div>
            <div className="font-arial mr-8" style={{ width: '105px' }}>
              10 Tickets
            </div>
            <div>
              <Counter
                color="pink"
                value={tickets.vip}
                setValue={value => updateTickets('vip', value)}
              />
            </div>
          </div>
          <div className="pl-4 flex items-center font-arial">
            <div className="font-bold mr-6" style={{ width: '125px' }}>
              Meet & Greet:
            </div>
            <div className="font-arial mr-8" style={{ width: '105px' }}>
              10 Tickets
            </div>
            <div>
              <Counter
                color="pink"
                value={tickets.meetAndGreet}
                setValue={value => updateTickets('meetAndGreet', value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-pink">Request purpose:</h3>
          <div className="pl-4 flex font-arial mb-4">
            <div className="font-bold mr-6" style={{ width: '125px' }}>
              Objective:
            </div>
            <div className="font-arial">Lorem ipsum</div>
          </div>
          <div className="font-arial pl-4">
            <div className="font-bold mb-2">Business Case:</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer vitae justo eget magna fermentum iaculis eu non. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="mb-4 text-pink">Supporting documents:</h3>
          <div className="pl-4 font-arial">
            <p className="mb-2">
              <span className="mr-8">Filename_Final Artwork.pdf</span>
              <i className="fa fa-download" />
            </p>
            <p>
              <span className="mr-8">Filename_Final Artwork.pdf</span>
              <i className="fa fa-download" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1" />
    </div>
  );
};

export default Details;
