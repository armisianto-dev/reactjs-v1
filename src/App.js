import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends Component {
    render() {
        return ( 
            <Router>
                <div className="wrapper">
                    <Sidebar/>
                    <Content/>
                </div>
            </Router>
        );
    }
}

export default App;