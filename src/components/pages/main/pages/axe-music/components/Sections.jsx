import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MediaCard from '@components/ui-elements/MediaCard/MediaCard';
import FilePreview from '@components/ui-elements/FilePreview/FilePreview';

const Sections = ({ sections, object, match, adminFeatures }) => {
  const [fileToPreview, setFileToPreview] = React.useState(null);
  const deployFilePreview = React.useCallback(file => {
    setFileToPreview(file);
  });
  const sectionsToRender = sections.map(section => {
    return (
      <section key={section.id} className="mb-8">
        <div className="flex items-center justify-between mb-5 px-4">
          <h1 className="uppercase">{section.name}:</h1>
          <div>
            {adminFeatures ? (
              <Link to={`/axe-music/manage/${section.id}`}>
                <button className="uppercase text-white border rounded border-pink px-5 pb-1 pt-2 tracking-wide text-xl">
                  Manage section
                </button>
              </Link>
            ) : null}
            {section.files.data.length ? (
              <button className="uppercase text-white border rounded border-tirques px-5 pb-1 pt-2 ml-2 tracking-wide text-xl">
                <i className="fa fa-download mr-4" />
                Download all
              </button>
            ) : null}
          </div>
        </div>
        <div className="flex flex-wrap">
          {section.files.data.map(file => (
            <div className="px-4 mb-5 w-1/4" key={file.id}>
              <MediaCard
                onPreviewClick={file => deployFilePreview(file)}
                file={file}
                object={object}
              />
            </div>
          ))}
        </div>
        <FilePreview
          close={() => setFileToPreview(null)}
          file={fileToPreview}
        />
      </section>
    );
  });
  return sectionsToRender;
};

export default withRouter(Sections);
