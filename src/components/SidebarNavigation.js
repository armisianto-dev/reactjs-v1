import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import API from '../api';

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
  const liClassName = (props.navLink === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = (props.navLink === pageURI) ? "nav-link disabled" : "nav-link";

  const navChild = props.navChild;
  var navId = props.navId;
  var navDropdownTag = "#dropdown" + props.navId;
  var navDropdownId = "dropdown" + props.navId;
  var navLink = props.navLink;
  var navTitle = props.navTitle;
  var navIcon = props.navIcon;
  if (navChild > 0) {
    return (
      <li className={liClassName}>
        <a className={aClassName} data-toggle="collapse" href={navDropdownTag}>
          <i className={navIcon}></i>
          <p> {navTitle}
            <b className="caret"></b>
          </p>
        </a>
        <div id={navDropdownId} className="collapse">
          <NavItemChild parentId={navId} />
        </div>
      </li>
    );
  }

  return (
    <li className={liClassName}>
      <Link to={navLink} className={aClassName}>
        <i className={navIcon}></i>
        <p> {navTitle} </p>
      </Link>
    </li>
  );
}

class SidebarNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userImg: '',
      user: [],
      listMenu: [],
      childMenu: []
    }
  }

  componentDidMount() {
    API.get('staff-base/list_menu/134/0')
      .then(response => {
        const data = response.data;
        this.setState({
          listMenu: data.values
        })
      })

    API.get('users/134')
      .then(response => {
        const data = response.data;
        this.setState({
          user: data.values[0],
          userImg: "http://202.91.14.3/te/resource/doc/images/users/" + data.values[0].employee_img,
        })
      }).catch((error) => {
        console.log(error);
      })
  }

  render() {

    var { listMenu, user, userImg } = this.state;

    return (
      <div className="sidebar" data-color="azure" data-background-color="white" data-image={sidebar_img}>
        <div className="logo text-center">
          <a href="#" className="simple-text logo-normal">
            <img src={logo} alt="Logo" width="180" />
          </a>
        </div>
        <div className="sidebar-wrapper">
          <div className="user">
            <div className="photo">
              <img src={userImg} />
            </div>
            <div className="user-info">
              <a data-toggle="collapse" href="#collapseExample" className="username collapsed" aria-expanded="false">
                <span>
                  {user.full_name}
                  <b className="caret"></b>
                </span>
              </a>
              <div className="collapse" id="collapseExample">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="sidebar-mini"> <i className="fa fa-user mr-5"></i> </span>
                      <span className="sidebar-normal"> My Profile </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="sidebar-mini"> <i className="fa fa-user-edit mr-5"></i> </span>
                      <span className="sidebar-normal"> Edit Profile </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="sidebar-mini"> <i className="fa fa-cog mr-5"></i> </span>
                      <span className="sidebar-normal"> Settings </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-danger" href="#">
                      <span className="sidebar-mini"> <i className="fa fa-sign-out-alt mr-5"></i> </span>
                      <span className="sidebar-normal"> Sign Out </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav">
            {this.state.listMenu.map(menu =>
              <NavItem navChild={menu.total_child} navId={menu.nav_id} navTitle={menu.nav_title} navIcon={menu.nav_icon} navLink={menu.nav_url} />
            )}
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

class NavItemChild extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listMenu: []
    }
  }

  componentDidMount() {
    API.get('staff-base/list_menu/134/' + this.props.parentId)
      .then(response => {
        const data = response.data;
        this.setState({
          listMenu: data.values
        })
      })
  }

  render() {
    return (
      <ul className="nav pl-3">
        {this.state.listMenu.map(menu =>
          <NavItem navChild={menu.total_child} navId={menu.nav_id} navTitle={menu.nav_title} navIcon={menu.nav_icon} navLink={menu.nav_url} />
        )}
      </ul>
    );
  }
}

export default SidebarNavigation;