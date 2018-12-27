import React, { Component } from 'react';
import API from '../api';

import ContentDynamic from './ContentDynamic';

import user_img from '../dist/images/default-user.png';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userImg: '',
      user: []
    }
  }

  componentDidMount() {
    API.get('users/134')
      .then(response => {
        const data = response.data;
        this.setState({
          user: data.values[0],
          userImg: "http://202.91.14.3/te/resource/doc/images/users/" + data.values[0].employee_img,
        })
      }).catch((error)=>{
        console.log(error);
      })
  }

  render() {

    var { user, userImg } = this.state;

    return (
      <div className="main-panel ps-container ps-theme-default ps-active-y" data-ps-id="f3e259fc-aa59-2422-b125-134102db0bc2">
        {/* Start of Navbar */}
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
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
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link" href="/" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={userImg} className="rounded-circle mr-2" alt="Logo" width="24" height="24" />
                    <p className="d-lg-none d-md-block">
                      {user.full_name}
                    </p>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                    <a className="dropdown-item" href="#">
                      <span>
                        {user.full_name}
                        <br />
                        <small className="text-default">{user.email_address}</small>
                      </span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Settings</a>
                    <div class="dropdown-divider"></div>
                    <a className="dropdown-item text-danger" href="#"> <i className="fa fa-sign-out mr-1"></i> Log out</a>
                  </div>
                </li>
              </ul>
            </div>
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