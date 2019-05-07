import React from 'react';

const Counter = ({ color = 'tirques', ...props }) => {
  const [counter, setCounter] = React.useState(0);

  const updateCounter = val => {
    if (val >= 0) {
      setCounter(val);
    } else {
      setCounter(0);
    }
  };

  React.useEffect(() => {
    props.onChange(counter);
  }, [counter]);

  return (
    <div
      className="flex justify-between items-center my-4"
      style={{ width: '300px' }}>
      <span className={`font-bebas text-${color} text-2xl`}>
        {props.label}:
      </span>
      <div
        className={`border-b-4 border-${color} flex justify-between items-center`}
        style={{
          width: '85px',
          height: '35px',
        }}>
        <span style={{ cursor: 'pointer', padding: '2px 4px' }}>
          <i
            onClick={() => {
              updateCounter(counter - 1);
            }}
            className="fas fa-minus"
          />
        </span>
        <span style={{ cursor: 'default', fontSize: '24px' }}>{counter}</span>
        <span style={{ cursor: 'pointer', padding: '2px 4px' }}>
          <i
            onClick={() => {
              updateCounter(counter + 1);
            }}
            className="fas fa-plus"
          />
        </span>
      </div>
    </div>
  );
};

Counter.defaultProps = {
  onChange: () => {},
};

export default Counter;
