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
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
            </button>
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