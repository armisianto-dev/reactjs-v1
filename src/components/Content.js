import React, { Component } from 'react';

import ContentDynamic from './ContentDynamic';

import user_img from '../dist/images/default-user.png';

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown mr-4">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => { this.showDropdown(e) }}>
          <img src={user_img} className="rounded-circle mr-2" alt="Logo" width="24" />
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div className="main-panel ps-container ps-theme-default ps-active-y" data-ps-id="f3e259fc-aa59-2422-b125-134102db0bc2">
        {/* Start of Navbar */}
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <a className="navbar-brand" href="#pablo">Dashboard<div className="ripple-container"></div></a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
            </button>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link" href="/" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={user_img} className="rounded-circle mr-2" alt="Logo" width="24" />
                  <p className="d-lg-none d-md-block">
                    Armisianto
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                  <a className="dropdown-item" href="#">Profile</a>
                  <a className="dropdown-item" href="#">Settings</a>
                  <div class="dropdown-divider"></div>
                  <a className="dropdown-item text-danger" href="#"> <i className="fa fa-sign-out mr-1"></i> Log out</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/* End of navbar */}
        {/* Start of dynamic content */}
        <div className="content">
          <div className="container-fluid">
            <ContentDynamic/>
          </div>
        </div>
        {/* End of dynamic content */}
      </div>
    );
  }
}

export default Content;