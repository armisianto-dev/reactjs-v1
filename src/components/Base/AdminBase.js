import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import {history} from '../../utils/helpers/history';

import API from '../../api';

import Loadable from 'react-loadable';
import Pace from 'react-pace-progress';

import SidebarNav from '../../components/Sidebar/AdminSideBar';

const user = JSON.parse(localStorage.getItem('user'));
const isAuthenticated = (user) ? true : false;

const PrivateRoute = ({
    component: Component,
    ...rest
}) => ( <
    Route { ...rest }
    render = {
        (props) => (
            isAuthenticated === true ? < Component { ...props } /> : <Redirect to = '/auth/login' />
        )
    }/>
)

class AdminBase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: user,
            listMenu: [],
            isLogin: isAuthenticated
        }
    }

    componentDidMount() {
        API.get(`staff-base/list_menu_all_child/${user.user_id}`)
            .then(response => {
                const data = response.data;
                this.setState({
                    listMenu: data.values
                })
            })
    }

    render() {

        var {listMenu,isLogin} = this.state;
        const PaceLoading = () => < Pace color = "#00b2f6" height = "10px" / > ;
        return (
            <div>
                < SidebarNav/>
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
                    <div className="content mt-1 pt-1">
                        <div className="container-fluid">

                                <Switch>
                                    {/* Static Link/Route */}
                                    < PrivateRoute path = "/" exact component = {
                                        Loadable({
                                            loader: () => import('../../containers/Dashboard/Welcome'),
                                            loading: PaceLoading
                                        })
                                    }
                                    />
                                    < PrivateRoute path = "/home/profile" exact component = {
                                        Loadable({
                                            loader: () => import('../../containers/Home/Profile'),
                                            loading: PaceLoading
                                        })
                                    }
                                    />

                                    {this.state.listMenu.map(menu =>
                                        <PrivateRoute path = {menu.nav_url}
                                            component = {
                                                Loadable({
                                                    loader: () => import(`../../containers/${menu.nav_component}`),
                                                    loading: PaceLoading
                                                })
                                            }
                                        />
                                    )}
                                </Switch>

                        </div>
                    </div>
                    {/* End of dynamic content */}
                </div>
        </div>
        );
    }
}

export default AdminBase;