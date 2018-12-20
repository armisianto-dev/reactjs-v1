import React, { Component } from 'react';

import logo from '../dist/images/logo-login.png';
import user_img from '../dist/images/default-user.png';

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}

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

class HeaderNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/users/134')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          user: json.value,
        })
      })
  }

  render() {

    var { isLoaded, user } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img src={logo} alt="Logo" width="180" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <NavItem path="/" name="Home" />
            <NavItem path="/page2" name="Page2" />
            <NavItem path="/page3" name="Disabled" disabled="true" />

          </ul>
          <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <NavDropdown name="Armisianto">
              <a className="dropdown-item" href="/">{user.full_name}</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Profile</a>
              <a className="dropdown-item" href="/">Account Settings</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-danger" href="/"> <i className="fa fa-sign-out mr-5"></i> Sign Out</a>
            </NavDropdown>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderNavigation;