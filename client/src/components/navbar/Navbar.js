import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <h3>Logo</h3>

          <NavLink to="/signup">Signup</NavLink>

        </ul>
      </nav>
    );
  }
}

export default Navbar;
