import React from 'react';

const Button = ({
  textColor,
  bgColor,
  border,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`btn ${border} ${textColor} ${bgColor} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
