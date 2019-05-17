import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ match, currentFolder, previousFolders }) => {
  const renderData = [
    ...previousFolders,
    { id: currentFolder.id, name: currentFolder.name, url: match.url },
  ];
  return (
    <div className="flex mb-1">
      {renderData.map((data, index, array) => {
        return (
          <div key={data.url} className="text-xl">
            <>
              <Link className="text-tirques font-bold mr-2" to={data.url}>
                {data.name}
              </Link>
              {index < array.length - 1 ? (
                <i className="fa fa-chevron-right text-tirques mr-2" />
              ) : null}
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
