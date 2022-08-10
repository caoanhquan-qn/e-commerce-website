import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { startSigningUp } from '../../redux/action';
import './SignUp.scss';

const SignUp = () => {
  const initialFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('password does not match');
      return;
    }
    dispatch(startSigningUp({ email, password, displayName }));
    setFormFields(initialFormFields);
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput name="displayName" type="text" label="Display Name" value={displayName} handleChange={handleChange} />
        <FormInput name="email" type="email" label="Email" value={email} handleChange={handleChange} />
        <FormInput name="password" type="password" label="Password" value={password} handleChange={handleChange} />
        <FormInput name="confirmPassword" type="password" label="Confirm Password" value={confirmPassword} handleChange={handleChange} />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
