import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import { auth, createUserWithEmailAndPassword, updateProfile } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(user, {displayName});
      this.setState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }

    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="sign-up">
        <h2>Create an account</h2>
        <span className="subtitle">I do not have a account</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            label="Display Name"
            value={this.state.displayName}
            onChange={this.handleChange}
            type="text"
            autoComplete="username"
            required />

          <FormInput
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            autoComplete="email"
            required />

          <FormInput
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            autoComplete="new-password"
            required   />
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            autoComplete="new-password"
            required   />
          
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;