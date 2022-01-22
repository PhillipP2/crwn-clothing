import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle, signInWithEmailAndPassword } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const { email, password } = this.state;
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({email: '', password:''});
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = evt => {
    const { value, name } = evt.target
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="subtitle">Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            required />

          <FormInput
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            autoComplete="password"
            required   />
          

          <div className="button-group">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isSignInWithGoogle>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;