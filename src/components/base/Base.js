import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Pace from 'react-pace-progress';

import AdminBase from './admin/AdminBase';
import LoginAdminBase from './admin/Login';

let user = JSON.parse(localStorage.getItem('user'));
let isAuthenticated = (user) ? true : false;

class Base extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogin: isAuthenticated
    }
  }

  render() {
    if (this.state.isLogin) return <AdminBase />
    return <LoginAdminBase />
  }
}

export default Base;