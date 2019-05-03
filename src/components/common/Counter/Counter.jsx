import React from 'react';

const Counter = props => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div
      className="flex justify-between items-center my-6"
      style={{ width: '300px' }}>
      <span className="font-bebas text-tirques text-2xl">{props.label}:</span>
      <div
        className="border-b-4 border-tirques flex justify-between items-center"
        style={{
          width: '85px',
          height: '35px',
        }}>
        <span
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            } else {
              setCounter(0);
            }
          }}
          style={{ cursor: 'pointer', padding: '2px 4px' }}>
          <i className="fas fa-minus" />
        </span>
        <span style={{ cursor: 'default', fontSize: '24px' }}>{counter}</span>
        <span
          onClick={() => {
            setCounter(counter + 1);
          }}
          style={{ cursor: 'pointer', padding: '2px 4px' }}>
          <i className="fas fa-plus" />
        </span>
      </div>
    </div>
  );
};

export default Counter;
