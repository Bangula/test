import React from 'react';
import image from '@images/music-aside-image.png';
import gradient from '@images/axe-logo-aside-gradient.png';

export default props => {
  return (
    <aside>
      <img
        className="hidden md:block"
        style={{ maxHeight: '200px', maxWidth: 'none', marginLeft: '-100px' }}
        src={gradient}
        alt="Aside gradient graphic"
      />
      <div className="md:-mt-8 sm:flex sm:justify-center md:block sm:pt-4 md:pt-0">
        <img
          className="md:w-full h-64 md:h-auto md:mb-3 sm:mr-3"
          src={image}
          alt="African american male"
        />
        <div className="sm:w-64 md:w-auto">
          <h3 className="font-thin">Logos</h3>
          <h2 className="font-thin text-tirques mb-3">Usage Example</h2>
          <p className="font-arial leading-tight">{props.varibleContent}</p>
        </div>
      </div>
    </aside>
  );
};
