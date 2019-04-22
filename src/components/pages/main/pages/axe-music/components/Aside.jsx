import React from 'react';
import image from '@images/music-aside-image.png';
import gradient from '@images/axe-logo-aside-gradient.png';

export default props => {
  return (
    <aside>
      <img
        style={{ maxHeight: '200px', maxWidth: 'none', marginLeft: '-100px' }}
        src={gradient}
        alt="Aside gradient graphic"
      />
      <div style={{ marginTop: '-3rem' }}>
        <img className="w-full mb-3" src={image} alt="African american male" />
        <h3 className="font-thin">Logos</h3>
        <h2 className="font-thin text-tirques mb-3">Usage Example</h2>
        <p className="font-arial leading-tight">{props.varibleContent}</p>
      </div>
    </aside>
  );
};
