import React from 'react';
import backgroundImage from '@images/selection-page.png';
import logo2x from '@images/logo@2x.png';
import Button from '@components/Button/Button';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-auto">
        <div className="py-3 px-3 mb-5 flex">
          <div className="w-24 pr-3 border-r-2 border-grey-dark">
            <img src={logo2x} alt="AXE music logo" />
          </div>
          <div className="w-24 pl-3">
            <img src={logo2x} alt="AXE music logo" />
          </div>
        </div>
        <div className="flex justify-end pt-5">
          <div className="max-w-lg flex pt-5">
            <div>
              <h1
                className="uppercase font-bebas font-thin"
                style={{
                  fontSize: '82px',
                  lineHeight: '.9',
                }}>
                Welcome
                <br />
                to Axe 'Passions'
                <br />
                Portal
              </h1>
            </div>
            <div className="pt-5 px-5">
              <p className="font-arial text-2xl mb-5 py-5 px-5 leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestias saepe blanditiis atque voluptates culpa!
              </p>
              <p className="font-arial text-2xl px-5 mb-5 pb-5 leading-tight">
                Nihil quo soluta pariatur ipsam ab officiis. Nesciunt expedita
                dolores excepturi at eligendi assumenda nemo.
              </p>
              <div className="px-5">
                <div className="mb-5">
                  <Link to="/">
                    <Button className="w-48 font-hairline font-bebas text-2xl uppercase text-white leading-none pb-1 pt-1 btn-border-lightbrown">
                      axe music
                    </Button>
                  </Link>
                </div>
                <div>
                  <Button
                    disabled
                    border="btn-border-lightbrown"
                    className="opacity-25 w-48 font-hairline font-bebas text-2xl uppercase text-white border-2 leading-none pb-1 pt-1 border-lightbrown">
                    axe gaming
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-2/5 bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
    </div>
  );
};
