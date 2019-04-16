import React from 'react';
import backgroundImage from '@images/home-page.png';

const Home = () => (
  <>
    <div
      className="absolute pin-t- pin-b pin-l pin-r bg-contain bg-no-repeat pt-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: `calc(100vh - 186px)`,
      }}
    />
    <div
      className="flex justify-end mx-auto"
      style={{ maxWidth: '1200px', paddingTop: '4rem' }}>
      <div className="flex pt-5 max-w-lg">
        <div className="flex-none pr-5">
          <h1
            className="uppercase font-bebas text-right"
            style={{
              fontSize: '76px',
              lineHeight: '.88',
            }}>
            Welcome to
            <br />
            Axe Music
          </h1>
        </div>
        <div className="pt-5 w-64">
          <p className="px-5 pt-5 leading-tight">
            This is your dedicated portal to find all the information and
            support you need about the partnership, as well as access to
            available assets. Please check this portal regularly as we will be
            adding more information from time to time.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Home;
