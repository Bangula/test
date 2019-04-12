import React from 'react';
import withDefaultAuthLayout from '../Shared/WithDefaultAuthLayout/WithDefaultAuthLayout';

const Home = () => {
  return <div>Hello from Home page!</div>;
};

export default withDefaultAuthLayout(Home);
