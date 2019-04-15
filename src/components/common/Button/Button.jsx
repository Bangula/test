import React from 'react';

const Button = ({
  text,
  textColor,
  bgColor,
  border,
  className,
  handleClick,
}) => {
  return (
    <button
      className={`btn ${border} ${textColor} ${bgColor} ${className}`}
      onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
