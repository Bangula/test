import React from 'react';
import Aside from '../components/Aside';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import MediaCard from '@components/ui-elements/MediaCard/MediaCard';

const mediaContent = {
  axe: [
    {
      title: 'Axe Music Primary',
      image: 'some_url_to_image',
      description: 'Logos',
      type: 'MULTIPLE',
    },
    {
      title: 'Axe Music Reversed',
      image: 'some_url_to_image',
      description: 'Logos',
      type: 'MULTIPLE',
    },
    {
      title: 'Axe Music Reversed',
      image: 'some_url_to_image',
      description: 'Logos',
      type: 'MULTIPLE',
    },
    {
      title: 'Axe Music Reversed',
      image: 'some_url_to_image',
      description: 'Logos',
      type: 'MULTIPLE',
    },
  ],
};

export default () => {
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
        <div className="flex items-center justify-between mb-5 px-4">
          <h1 className="uppercase">Axe music logos:</h1>
          <button className="uppercase text-white border rounded border-tirques px-5 pb-1 pt-2 tracking-wide text-xl">
            <i className="fa fa-download mr-4" />
            Download all
          </button>
        </div>
        <div className="flex flex-wrap">
          {mediaContent.axe.map((media, index) => (
            <div className="px-4" style={{ flexBasis: '25%' }} key={index}>
              <MediaCard media={media} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
