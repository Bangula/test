import React from 'react';

const InputField = ({ label, type, placeholder, hasError }) => {
  return (
    <div className="input-field__holder">
      <label className="label">
        <span className="label-txt">{label}</span>
        <input
          className={`input-field${hasError ? 'input-error' : ''}`}
          type={type}
          placeholder={placeholder}
        />
        {hasError ? <span className="input-error__sign">!</span> : ''}
      </label>
    </div>
  );
};

export default InputField;
