import React, { FormEvent } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { startSigningInWithEmailAndPassword, startSigningInWithGoogle } from '../../redux/action';
import { AuthType } from '../../redux/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './SignIn.scss';

type MyState = {
  email: string;
  password: string;
};

type MyProps = {
  handleSignInWithEmailAndPassword: (a: AuthType) => void;
  handleSignInWithGoogle: () => void;
};

class SignIn extends React.Component<MyProps, MyState> {
  state: MyState = {
    email: '',
    password: '',
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.handleSignInWithEmailAndPassword({ email, password });
    this.setState({ email: '', password: '' });
  };
  handleSignInWithGoogle = () => {
    this.props.handleSignInWithGoogle();
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" label="Email" handleChange={this.handleChange} value={this.state.email} />
          <FormInput name="password" type="password" label="Password" handleChange={this.handleChange} value={this.state.password} />

          <div className="buttons">
            <CustomButton type="submit" buttonType="default">
              Sign In
            </CustomButton>
            <CustomButton type="button" buttonType="isGoogleSignIn" onClick={this.handleSignInWithGoogle}>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleSignInWithEmailAndPassword: ({ email, password }: AuthType) => dispatch(startSigningInWithEmailAndPassword({ email, password })),
    handleSignInWithGoogle: () => dispatch(startSigningInWithGoogle()),
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
