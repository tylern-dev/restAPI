import React from 'react';
import Nav from './Nav';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <h3>Logo</h3>
          <Nav address="/" name="Home" />
          <Nav address="/signup" name="Sign Up" />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
