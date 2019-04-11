import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import AuthPages from './auth';
import SelectionPage from './selection';
import MainPages from './main';

const Pages = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/auth" component={AuthPages} />
      <Route path="/selection" component={SelectionPage} />
      <Route path="/main" component={MainPages} />
    </Suspense>
  );
};

export default Pages;
