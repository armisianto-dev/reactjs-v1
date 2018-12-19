import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from '../dist/images/logo-login.png';
import user_img from '../dist/images/default-user.png';
import sidebar_img from '../../node_modules/bootstrap/themes/material-dashboard/img/sidebar-3.jpg';

var positionX = {
  left: '0px',
  bottom: '0px',
};

var positionY = {
  right: '0px',
  top: '0px',
};

var sidebar_background = {
  backgroundImage: `url(${sidebar_img})`
};

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <Link to={props.path} className={aClassName}>
        <i className={props.icon}></i>
        <p>{props.name}</p>
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </Link>
    </li>
  );
}

class SidebarNavigation extends Component {
  render() {
    return (
      <div className="sidebar" data-color="azure" data-background-color="white" data-image={sidebar_img}>
        <div class="logo">
          <a href="http://www.creative-tim.com" className="simple-text logo-normal">
            <img src={logo} alt="Logo" width="180" />
          </a>
        </div>
        <div className="sidebar-wrapper ps-container ps-theme-default ps-active-y" data-ps-id="c2b4a67a-9eaf-095a-5f5f-f0bd3e253623">
          <ul className="nav">
            <NavItem path="/" name="Home" icon="fa fa-home"/>
            <NavItem path="/pengajuan" name="Pengajuan" icon="fa fa-edit" />
            <NavItem path="/monitoring" name="Monitoring" icon="fa fa-desktop" />
          </ul>
          <div className="ps-scrollbar-x-rail" style={positionX}>
            <div className="ps-scrollbar-x" tabindex="0" style={positionX}>
            </div>
          </div>
          <div className="ps-scrollbar-y-rail" style={positionY}>
            <div className="ps-scrollbar-y" tabindex="0" style={positionY}>
            </div>
          </div>
        </div>
        <div className="sidebar-background" style={sidebar_background}></div>
      </div>
    );
  }
}

export default SidebarNavigation;