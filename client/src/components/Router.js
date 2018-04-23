import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import { isTokenExpired } from '../utils/authService';


class Router extends React.Component {
  state = {
  }

  componentDidMount() {
    isTokenExpired((res) => {
      if (res) {
        this.setState({ isAuthenticated: true });
      } else {
        this.setState({ isAuthenticated: false });
      }
    });
  }

  updateIsLoggedIn = () => {
    if (this.state.isAuthenticated === false) {
      this.setState({ isAuthenticated: true });
    }
    console.log(this.state.isAuthenticated);
  }
  // had to use render in order to pass props
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" render={props => <Signup {...props} updateIsLoggedIn={this.updateIsLoggedIn} />} />
          <Route path="/login" render={props => <Login {...props} updateIsLoggedIn={this.updateIsLoggedIn} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>


    );
  }
}

export default Router;
