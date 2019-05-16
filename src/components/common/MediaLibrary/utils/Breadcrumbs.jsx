import React from 'react';
import { Link } from 'react-router-dom';

import { MediaLibraryContext } from '../MediaLibrary';

const Breadcrumbs = ({ location, currentFolder }) => {
  const context = React.useContext(MediaLibraryContext);
  const url = location.pathname.replace(`${context.baseUrl}/`, '');
  const components = url.split('/');
  components.pop();
  components.push(currentFolder.name);
  let previousBase = context.baseUrl;
  const renderData = [];
  components.forEach(component => {
    renderData.push({
      label: component,
      to: `${previousBase}/${component}`,
    });
    previousBase = `${previousBase}/${component}`;
  });
  return (
    <div className="flex mb-1">
      {renderData.map((data, index, array) => {
        return (
          <div key={index} className="text-xl">
            {index < array.length - 1 ? (
              <>
                <Link className="text-tirques font-bold mr-2" to={data.to}>
                  {data.label}
                </Link>
                <i className="fa fa-chevron-right text-tirques mr-2" />
              </>
            ) : (
              <div className="text-tirques font-bold">{data.label}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
