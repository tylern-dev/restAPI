import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <NavLink to="/"><h3>Logo</h3></NavLink>

          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/login">Login</NavLink>

        </ul>
      </nav>
    );
  }
}

export default Navbar;
