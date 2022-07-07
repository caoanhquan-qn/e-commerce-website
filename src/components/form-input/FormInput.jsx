import React from 'react';
import './FormInput.scss';

function FormInput({ name, type, value, label, handleChange }) {
  return (
    <div className="group">
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        required
        max={type === 'password' ? 6 : undefined}
      />
      {label ? <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
    </div>
  );
}

export default FormInput;
