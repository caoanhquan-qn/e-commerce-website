import React from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, signInWithGoogleRedirect, signInWithEmailAndPassword } from '../utils/fireBase';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = this.state;
      await signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert(`The password that you've entered is incorrect`);
          break;
        case 'auth/user-not-found':
          alert(`The email address you entered isn't connected to an account`);
          break;
        default:
          console.log(error);
      }
    }
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
            <CustomButton type="button" buttonType="isGoogleSignIn" onClick={signInWithGoogle}>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
