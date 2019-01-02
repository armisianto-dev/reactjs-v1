import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Pace from 'react-pace-progress';

import { auth } from '../../_helpers/auth';

import AdminBase from './admin/AdminBase';
import LoginAdminBase from './admin/Login';

class Base extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: [],
      isLogin: false
    }
  }

  componentDidMount() {
    this.setState({
      isLogin: auth.isLogin()
    })
  }

  render() {
    if (this.state.isLogin === true) return <AdminBase />
    return <LoginAdminBase />
  }
}

export default Base;