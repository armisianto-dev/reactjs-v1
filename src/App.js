import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Auth from './components/Login';



class App extends Component {
    render() {
        return ( 
            <Router>
                <Auth />
                {/* <div className="wrapper">
                    <Sidebar/>
                    <Content/>
                </div> */}
            </Router>
        );
    }
}

export default App;