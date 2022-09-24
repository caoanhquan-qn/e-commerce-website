import React, { ChangeEvent } from 'react';
import './FormInput.scss';

type formInputType = {
  name: string;
  type: string;
  value: string;
  label: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({ name, type, value, label, handleChange }: formInputType) {
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
