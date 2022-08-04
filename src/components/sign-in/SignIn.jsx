import React from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { startSigningInWithEmailAndPassword, startSigningInWithGoogle } from '../../redux/action';
import { connect } from 'react-redux';

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

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignInWithEmailAndPassword: ({ email, password }) => dispatch(startSigningInWithEmailAndPassword({ email, password })),
    handleSignInWithGoogle: () => dispatch(startSigningInWithGoogle()),
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
