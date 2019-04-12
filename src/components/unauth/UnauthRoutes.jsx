import React from 'react';
import { Route } from 'react-router-dom';
import UnauthDefaultLayout from './shared/UnauthDefaultLayout';
import Login from './Login/Login';
import Register from './Register/Register';

export default () => {
  return (
    <>
      <UnauthDefaultLayout>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </UnauthDefaultLayout>
    </>
  );
};
