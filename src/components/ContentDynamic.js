import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeDashboard from './view/home/Dashboard';

const Index = () => <HomeDashboard/>;
const Pengajuan = () => <h2>Pengajuan</h2>;
const Monitoring = () => <h2>Monitoring</h2>;

class ContentDynamic extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/pengajuan/" component={Pengajuan} />
        <Route path="/monitoring/" component={Monitoring} />
      </div>
    );
  }
}

export default ContentDynamic;