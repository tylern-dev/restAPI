import React, { Fragment } from 'react';
import Error from '../components/Error';
import Navbar from '../components/navbar/Navbar';

class Login extends React.Component {
  submitUser = () => {

  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <h1>Login Page</h1>
        <form onSubmit={this.submitUser}>
          <label htmlFor="email">Email:
            <input id="email" type="text" name="email" />
          </label>
          <label htmlFor="password">Password:
            <input id="password" type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </form>
      </Fragment>
    );
  }
}

export default Login;
