import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import AuthPages from './auth';

export default () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <AuthPages />
      </Switch>
    </Suspense>
  );
};
