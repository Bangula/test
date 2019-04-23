import React, { useState, useEffect } from 'react';
import Aside from '../components/Aside';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import LogosSections from '../components/LogosSections';

import { getLogos } from '@endpoints/music/logos';

export default () => {
  const [logos, setLogos] = useState({});
  useEffect(() => {
    async function getData() {
      const { data } = await getLogos();
      setLogos(data);
    }
    getData();
  });
  return (
    <div
      className="flex max-w-content mx-auto pt-8"
      style={{ paddingBottom: '80px' }}>
      <div className="w-64 mr-10">
        <Aside varibleContent="To read more on the best practices when using the AXE music logos, visit the brand guidelines" />
      </div>
      <div className="flex-grow pl-10">
        <div className="mb-5 px-4">
          <PrimaryTitle>Logos</PrimaryTitle>
        </div>
        {logos.sections && logos.sections.data.length ? (
          <LogosSections sections={logos.sections.data} object={logos.object} />
        ) : (
          <p className="font-arial px-4 text-xl">You have no logos.</p>
        )}
      </div>
    </div>
  );
};
