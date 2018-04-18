import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

const styled = {
  color: 'blue',
};

class Nav extends React.Component {
  render() {
    return (
      <li>
        <NavLink activeStyle={styled} to={this.props.address}>{this.props.name}</NavLink>
      </li>
    );
  }
}


export default Nav;
