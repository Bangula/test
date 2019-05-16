import React from 'react';

const Counter = ({ value = 0, setValue, color = 'white' }) => {
  const containerClasses = `flex items-center pb-2 border-b-4 border-${color}`;
  return (
    <div className={containerClasses}>
      <i className="fa fa-minus mr-4" onClick={() => setValue(value - 1)} />
      <span className="mr-4 text-xl font-bold">{value}</span>
      <i className="fa fa-plus" onClick={() => setValue(value + 1)} />
    </div>
  );
};

export default Counter;
