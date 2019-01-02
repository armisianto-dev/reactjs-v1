import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from '../../../_helpers/history';
import Loadable from 'react-loadable';
import Pace from 'react-pace-progress';

import LoginAdminBase from './Login';
import SidebarNavigation from './AdminSideBar';

import API from '../../../api';

let user = JSON.parse(localStorage.getItem('user'));
let isAuthenticated = (user) ? true : false;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class AdminBase extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listMenu: [],
      isLogin: isAuthenticated
    }
  }

  componentDidMount() {
    API.get('staff-base/list_menu_all_child/134')
      .then(response => {
        const data = response.data;
        this.setState({
          listMenu: data.values
        })
      })
  }

  render() {

    var { listMenu } = this.state;

    const PaceLoading = () => <Pace color="#00b2f6" height="10px" />;

    return (
      <Router history={history}>
        <div>
          <SidebarNavigation />
          <div className="main-panel ps-container ps-theme-default ps-active-y">
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
                <Switch>
                  <Route path="/login" component={LoginAdminBase} />
                  <PrivateRoute path="/" exact component={
                    Loadable({
                      loader: () => import('../../view/dashboard/Welcome'),
                      loading: PaceLoading
                    })
                  } />

                  {this.state.listMenu.map(menu =>
                    // <RouteItem routePath={menu.nav_url} routeComponent={menu.nav_component} />
                    <PrivateRoute path={menu.nav_url} component={
                      Loadable({
                        loader: () => import(`../../view/${menu.nav_component}`),
                        loading: PaceLoading
                      })
                    } />
                  )}
                </Switch>
              </div>
            </div>
            {/* End of dynamic content */}
          </div>
        </div>
      </Router>
    );
  }
}

export default AdminBase;