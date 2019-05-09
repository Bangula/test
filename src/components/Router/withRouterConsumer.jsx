import React from 'react';
import ApplicationRouterContext from './Router';

export default Component => {
  return () => {
    return (
      <ApplicationRouterContext.Consumer>
        {context => <Component {...context} />}
      </ApplicationRouterContext.Consumer>
    );
  };
};
