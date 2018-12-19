import React, { Component } from 'react';

import HeaderNavigation from './HeaderNavigation';

class Header extends Component {
  render() {
    return (
      <header classname="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
        <HeaderNavigation/>
      </header>
    );
  }
}

export default Header;