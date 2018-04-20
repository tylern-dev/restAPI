import React, { Fragment } from 'react';
import { createUser } from '../../utils/userAPI';

class Signup extends React.Component {

  state ={
    user: {}
  }


  submitUser = (event) => {
    event.preventDefault();

    const {email, password } = this.state.user
    // create the user and get the response back from the api
    createUser({email, password}, (response) =>{
      console.log('my callback',response)
    })
    event.currentTarget.reset();
  }


  changeField = (e) => {
    this.setState({user: {
      ...this.state.user,
      [e.currentTarget.name] : e.currentTarget.value
    }})
  }


  render() {
    return (
      <Fragment>
        <h1>Create Account</h1>
        <form onSubmit={this.submitUser}>
          <label htmlFor="email">Email</label>
            <input id="email"  type="text" name="email" onChange={this.changeField} value={this.state.email}  />

          <label htmlFor="password">password</label>
            <input id="password" type="password" name="password" onChange={this.changeField} value={this.state.password} />

          <label htmlFor="checkPassword">Confirm Password</label>
            <input id="checkPassword" type="password" name="checkPassword" onChange={this.changeField} value={this.state.checkPassword} />

          <button type="submit">Create Account</button>
        </form>
      </Fragment>

    );
  }
}

export default Signup;
