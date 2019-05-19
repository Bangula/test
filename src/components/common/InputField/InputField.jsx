import React from 'react';

const InputField = ({ label, type, placeholder, hasError, ...props }) => {
  const [inputType, setInputType] = React.useState(type);

  return (
    <div className="input-field__holder">
      <label className="label">
        <span className="label-txt">{label}</span>
        <input
          className={`input-field${hasError ? ' input-error' : ''} font-arial`}
          type={inputType}
          placeholder={placeholder}
          {...props}
        />

        {hasError ? <span className="input-error__sign">!</span> : ''}

        {type === 'password' ? (
          <div
            className="password-eye"
            onClick={() => {
              setInputType(inputType === 'password' ? 'text' : 'password');
            }}>
            <i
              className={`${
                inputType === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash'
              }`}
            />
          </div>
        ) : (
          ''
        )}
      </label>
    </div>
  );
};

export default InputField;
