import React from 'react';

export default ({ label }) => (
  <div>
    <div
      className="relative"
      style={{
        background: 'linear-gradient(to bottom right, #6c3afa, #00c3ec)',
        height: '300px',
      }}>
      <div
        className="py-3 absolute flex justify-center align-center bg-grey-lightest"
        style={{ top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }}
      />
    </div>
    <div className="py-3 bg-white font-bold text-black uppercase text-2xl text-center">
      {label}
    </div>
  </div>
);
