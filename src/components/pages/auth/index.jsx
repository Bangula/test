import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { AUTH_ROUTES } from '@constants/routes';

const AuthPages = () => {
  return (
    <>
      {AUTH_ROUTES.map(route => (
        <Route
          path={`/auth/${route.path}`}
          component={lazy(() => import(`./${route.path}`))}
        />
      ))}
    </>
  );
};

export default AuthPages;
