import React from 'react';
import MediaCard from '@components/ui-elements/MediaCard/MediaCard';

const LogosSections = ({ sections, object }) => {
  const sectionsToRender = sections.map(section => {
    return (
      <section key={section.id} className="mb-8">
        <div className="flex items-center justify-between mb-5 px-4">
          <h1 className="uppercase">{section.name}:</h1>
          <div>
            <button className="uppercase text-white border rounded border-pink px-5 pb-1 pt-2 tracking-wide text-xl">
              Manage section
            </button>
            <button className="uppercase text-white border rounded border-tirques px-5 pb-1 pt-2 ml-2 tracking-wide text-xl">
              <i className="fa fa-download mr-4" />
              Download all
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {section.files.data.map(file => (
            <div
              className="px-4 mb-5"
              style={{ flexBasis: '25%' }}
              key={file.id}>
              <MediaCard file={file} object={object} />
            </div>
          ))}
        </div>
      </section>
    );
  });
  return sectionsToRender;
};

export default LogosSections;
