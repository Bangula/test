import React from 'react';

const SelectField = ({
  options,
  label,
  placeholder,
  hasError,
  setFieldValue,
  name,
  ...props
}) => {
  return (
    <div className="input-field__holder">
      <label className="label">
        <span className="label-txt">{label}</span>
        <select
          onChange={e => setFieldValue(name, e.target.value)}
          className={`input-field${hasError ? ' input-error' : ''}`}>
          <option disabled selected>
            {placeholder}
          </option>
          {options.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>

        {hasError && <span className="input-error__sign">!</span>}
      </label>
    </div>
  );
};

export default SelectField;
