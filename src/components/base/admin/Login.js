import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { history } from '../../../_helpers/history';

import API from '../../../api';

import logo from '../../../dist/images/logo-login.png';
import user_img from '../../../dist/images/default-user.png';
import background_img from '../../../../node_modules/bootstrap/themes/material-dashboard/img/cover.jpg';

var background_img_style = {
  backgroundImage: `url(${background_img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',

};

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      alertMessage: '',
      alertType: '',
      alertStatus: false,
      isLoading: false,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ isLoading: true });
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if(username && password){
      this.setState({ isLoading: false });
      API.post('auth/login_process', {
        username: username,
        password: password
      })
        .then(response => {
          const data = response.data;
          if (data.status == 200) {
            this.setState({
              username: '',
              password: '',
              isLoading: false,
              submitted: false
            });

            if (data.values != '') {
              localStorage.setItem('user', JSON.stringify(data.values[0]));
              history.push('/dashboard/welcome');

            }else{
              this.setState({
                alertMessage: 'Username atau Password yang anda masukkan tidak ditemukan',
                alertType: 'danger',
                alertStatus: true
              });
            }
          }
        }).catch((error) => {
          console.log(error);
        })
    }else{
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, isLoading, submitted, alertMessage, alertStatus, alertType } = this.state;
    return (
      <div className="wrapper wrapper-full-page">
        <div className="page-header login-page header-filter" filter-color="black" style={background_img_style} >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                <form className="form" name="form" onSubmit={this.handleSubmit}>
                  <div className="card card-login">
                    <div className="card-header card-header-info text-center">
                      <h4 className="card-title">Login</h4>
                    </div>
                    <div className="card-body pr-2 pl-2">
                      {/* Alert Login */}
                      {alertStatus &&
                        <div className={'alert alert-' + alertType}>
                          <span>{alertMessage}</span>
                        </div>
                      }
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-user"></i>
                            </span>
                          </div>
                          <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Username..." />
                        </div>
                        {submitted && !username &&
                          <small className="text-danger pl-5">Username harus diisi !</small>
                        }
                      </span>
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-lock"></i>
                            </span>
                          </div>
                          <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Password..." />
                        </div>
                        {submitted && !password &&
                          <small className="text-danger pl-5">Password harus diisi !</small>
                        }
                      </span>
                    </div>
                    <div className="card-footer justify-content-center">
                      <button type="submit" className="btn btn-info btn-link btn-lg">
                        {isLoading &&
                          <i className="fa fa-spin fa-spinner mr-1"></i>
                        }
                        Sign In
                        </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;