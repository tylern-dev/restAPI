/* TODO: fix the nav bar so that it changes depending on if the user is logged in
*
*
*/

import React, { Fragment } from 'react';
import Error from '../components/Error';
import Navbar from '../components/navbar/Navbar';
import { signInUser } from '../utils/userAPI';
import { saveToken } from '../utils/authService';

class Login extends React.Component {
  state = {
    user: {},
    error: '',
  }

  changeValue = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.currentTarget.name]: event.currentTarget.value,
      },
    });
  }

  submitUser = (event) => {
    event.preventDefault();
    signInUser(this.state.user, (res) => {
      if (res.status !== 200) {
        this.setState({ error: res.data.message });
        console.log(this.state.error);
      } else {
        console.log(res);
        saveToken(res.data.ssid);
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <h1>Login Page</h1>
        <form onSubmit={this.submitUser}>
          <label htmlFor="email">Email:
            <input id="email" type="text" name="email" onChange={this.changeValue} value={this.state.email} />
          </label>
          <label htmlFor="password">Password:
            <input id="password" type="password" name="password" onChange={this.changeValue} value={this.state.password} />
          </label>
          <button type="submit">Log In</button>
        </form>
        <Error error={this.state.error} />
      </Fragment>
    );
  }
}

export default Login;
