import React from 'react';
import { Link } from 'react-router-dom';

import { MediaLibraryContext } from '../MediaLibrary';

const Breadcrumbs = ({ location }) => {
  const context = React.useContext(MediaLibraryContext);
  const url = location.pathname.replace(`${context.baseUrl}/`, '');
  const components = url.split('/');
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
          <div key={index}>
            <span className="mr-2 text-xl">
              <Link className="text-tirques font-bold" to={data.to}>
                {data.label}
              </Link>
            </span>
            {index < array.length - 1 ? (
              <i className="fa fa-chevron-right text-tirques text-xl mr-2" />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
