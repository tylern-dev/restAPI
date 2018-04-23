import React, { Fragment } from 'react';
import Navbar from '../components/navbar/Navbar';
import Error from '../components/Error';
import withAuth from '../helper/AuthHOC';
import PropTypes from 'prop-types';

const Signup = ({ signUpUser, changeValue, error }) => (
  <Fragment>
    <Navbar />
    <h1>Create Account</h1>
    <form onSubmit={signUpUser}>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" name="email" onChange={changeValue} required />

      <label htmlFor="password">password</label>
      <input id="password" type="password" name="password" onChange={changeValue} required />

      <label htmlFor="checkPassword">Confirm Password</label>
      <input id="checkPassword" type="password" name="checkPassword" onChange={changeValue} required />
      <button type="submit">Create Account</button>
    </form>
    <Error error={error} />
  </Fragment>
);


Signup.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  error: PropTypes.string,
};
export default withAuth(Signup);
