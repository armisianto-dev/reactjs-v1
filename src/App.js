import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import {
    history
} from './utils/helpers/history';

import Loadable from 'react-loadable';
import Pace from 'react-pace-progress';

import API from './api';

import LoginAdminBase from '../src/containers/Login/AdminLogin';
import AdminBase from '../src/components/Base/AdminBase';

const user = JSON.parse(localStorage.getItem('user'));
const isAuthenticated = (user) ? true : false;

class App extends Component {

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
                console.log("ListMenu : " + JSON.stringify(data))
                this.setState({
                    listMenu: data.values
                })
            })
        
            const user = JSON.parse(localStorage.getItem('user'));
            const isAuthenticated = (user) ? true : false;
            this.setState({ isLogin: isAuthenticated  });
    }

    render() {

        var {listMenu, isLogin} = this.state;

        const PaceLoading = () => < Pace color = "#00b2f6" height = "10px" / > ;

        return ( 
            <div>
            {isLogin &&
            <Router>
                <AdminBase/>
            </Router>
            }

            {!isLogin &&
                <Router>
                    <Switch>
                        <Route path="/auth/login" component={LoginAdminBase} />
                        <Route component={LoginAdminBase} />
                    </Switch>
                </Router>
            }
            </div>
        );
    }
}

export default App;