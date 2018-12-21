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

// const NavItem = props => {
//   const pageURI = window.location.pathname + window.location.search
//   const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
//   const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
//   return (
//     <li className={liClassName}>
//       <Link to={props.path} className={aClassName}>
//         <i className={props.icon}></i>
//         <p>{props.name}</p>
//         {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
//       </Link>
//     </li>
//   );
// }

const NavItemChild = props => {

  const parentId = props.parentId;
  let arrChild = [];

  fetch('http://localhost:3001/staff-base/list_menu/134/'+parentId)
    .then(response => response.json())
    .then(data => {
      arrChild = data.values;
    });

  console.log(JSON.stringify(arrChild));

  return (
    <ul className="nav">
      {arrChild.map(menu =>
        <NavItem navChild={menu.total_child} navId={menu.nav_id} navTitle={menu.nav_title} navIcon={menu.nav_icon} navLink={menu.nav_url} />
      )}
    </ul>
  )
}

const NavItem = props => {

  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.navLink === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"

  const navChild = props.navChild;
  var navId = props.navId;
  var navIdTag = "#" + props.navId;
  var navLink = props.navLink;
  var navTitle = props.navTitle;
  var navIcon = props.navIcon;
  if (navChild > 0) {
    return (
      <li className={liClassName}>
        <a className={aClassName} data-toggle="collapse" href={navIdTag}>
          <i className={navIcon}></i>
          <p> {navTitle}
            <b className="caret"></b>
          </p>
        </a>
        <div id={navId} className="collapse">
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
      listMenu: [],
      childMenu: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/staff-base/list_menu/134/0')
      .then(response => response.json())
      .then(data => {
        this.setState({
          listMenu: data.values
        })
      })
  }

  render() {

    var { listMenu } = this.state;

    return (
      <div className="sidebar" data-color="azure" data-background-color="white" data-image={sidebar_img}>
        <div className="logo text-center">
          <a href="http://www.creative-tim.com" className="simple-text logo-normal">
            <img src={logo} alt="Logo" width="180" />
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {/* {this.state.listMenu.map(menu =>
              <NavItem path={menu.nav_url} name={menu.nav_title} icon={menu.nav_icon}/>
            )} */}
            {this.state.listMenu.map(menu =>
              <NavItem navChild={menu.total_child} navId={menu.nav_id} navTitle={menu.nav_title} navIcon={menu.nav_icon} navLink={menu.nav_url} />
            )}
            <li className="nav-item ">
              <a className="nav-link" data-toggle="collapse" href="#componentsExamples">
                <i className="material-icons"></i>
                <p> Components
                <b className="caret"></b>
                </p>
              </a>
              <div className="collapse" id="componentsExamples">
                <ul className="nav">
                  <li className="nav-item ">
                    <a className="nav-link" data-toggle="collapse" href="#componentsCollapse">
                      <span className="sidebar-mini"> MLT </span>
                      <span className="sidebar-normal"> Multi Level Collapse
                      <b className="caret"></b>
                      </span>
                    </a>
                    <div className="collapse" id="componentsCollapse">
                      <ul className="nav">
                        <li className="nav-item ">
                          <a className="nav-link" href="#0">
                            <span className="sidebar-mini"> E </span>
                            <span className="sidebar-normal"> Example </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="../examples/components/buttons.html">
                      <span className="sidebar-mini"> B </span>
                      <span className="sidebar-normal"> Buttons </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="../examples/components/grid.html">
                      <span className="sidebar-mini"> GS </span>
                      <span className="sidebar-normal"> Grid System </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="../examples/components/panels.html">
                      <span className="sidebar-mini"> P </span>
                      <span className="sidebar-normal"> Panels </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="../examples/components/sweet-alert.html">
                      <span className="sidebar-mini"> SA </span>
                      <span className="sidebar-normal"> Sweet Alert </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="../examples/components/notifications.html">
                      <span className="sidebar-mini"> N </span>
                      <span className="sidebar-normal"> Notifications </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="../examples/components/icons.html">
                      <span className="sidebar-mini"> I </span>
                      <span className="sidebar-normal"> Icons </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="../examples/components/typography.html">
                      <span className="sidebar-mini"> T </span>
                      <span className="sidebar-normal"> Typography </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
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