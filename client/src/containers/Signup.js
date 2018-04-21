import React, { Fragment } from 'react';
import Navbar from '../components/navbar/Navbar';
import Error from '../components/Error';
import { createUserAPI } from '../utils/userAPI';
import { saveToken } from '../utils/authService';
import { passwordCheck } from '../helper/helperFunctions';

class Signup extends React.Component {
  state ={
    user: {},
    error: '',
  }


  submitUser = (event) => {
    event.preventDefault();

    const { email, password, checkPassword } = this.state.user;
    // check the password - if good create the user
    passwordCheck(password, checkPassword, (check) => {
      if (check) {
        createUserAPI({ email, password }, (response) => {
          if (response.status !== 201) {
            // console.log('err creating user-----', response);
            this.setState({ error: response.data.message });
            console.log(this.state.error);
          } else {
            saveToken(response.data.ssid);
          }
        });
      } else {
        this.setState({ error: 'Passwords Do Not Match' });
      }
    });


    event.currentTarget.reset();
    if (this.state.error) {
      this.setState({ error: '' });
    }
  }


  changeField = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  }


  render() {
    return (
      <Fragment>
        <Navbar />
        <h1>Create Account</h1>
        <form onSubmit={this.submitUser}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" onChange={this.changeField} value={this.state.email} required />

          <label htmlFor="password">password</label>
          <input id="password" type="password" name="password" onChange={this.changeField} value={this.state.password} required />

          <label htmlFor="checkPassword">Confirm Password</label>
          <input id="checkPassword" type="password" name="checkPassword" onChange={this.changeField} value={this.state.checkPassword} required />

          <button type="submit">Create Account</button>
        </form>
        { this.state.error ? <Error error={this.state.error} /> : null}
      </Fragment>

    );
  }
}

export default Signup;
