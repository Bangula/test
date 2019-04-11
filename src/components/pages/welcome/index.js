import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Welcome';

const WelcomePage = () => <Route path="/welcome" component={Welcome} />;

export default WelcomePage;
