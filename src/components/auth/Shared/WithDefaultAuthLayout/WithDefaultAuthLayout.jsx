import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default Component => {
  return () => {
    return (
      <>
        <Header />
        <Component />
        <Footer />
      </>
    );
  };
};
