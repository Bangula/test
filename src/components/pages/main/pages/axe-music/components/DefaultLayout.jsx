import React, { useState, useEffect } from 'react';
import Aside from '../components/Aside';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Sections from './Sections';

export default ({ getData, page }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchResource() {
      const { error, data } = await getData();
      if (!error) {
        setData(data.data.data);
      }
    }
    fetchResource();
  }, [getData]);
  return (
    <div
      className="md:flex max-w-content mx-auto pt-4 px-4"
      style={{ paddingBottom: '80px' }}>
      <div className="md:w-64 md:mr-10 sm:mb-4">
        <Aside varibleContent="To read more on the best practices when using the AXE music logos, visit the brand guidelines." />
      </div>
      <div className="flex-grow md:pl-10">
        <div className="mb-5 px-4 flex justify-between items-center">
          <div>
            <PrimaryTitle>{page}</PrimaryTitle>
          </div>
          <div>
            <button className="uppercase text-white border rounded border-pink px-8 pb-1 pt-2 tracking-wide text-xl">
              <i className="fa fa-plus mr-4" />
              New section
            </button>
          </div>
        </div>
        {data.sections && data.sections.data.length ? (
          <Sections sections={data.sections.data} object={data.object} />
        ) : (
          <p className="font-arial px-4 text-xl">You have no {page}.</p>
        )}
      </div>
    </div>
  );
};
