import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import API from '../api';

import StaffDashboard from './view/dashboard/Welcome';

const StaffTaskManager = () => <h2>Task Manager</h2>;
const StaffReport = () => <h2>Report</h2>;

class ContentDynamic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listMenu: []
    }
  }

  componentDidMount() {
  }

  render() {

    var { listMenu } = this.state;

    return (
      <div>
        <Switch>
          <Route path="/dashboard/welcome" exact component={StaffDashboard} />
          <Route path="/task/mytask" component={StaffTaskManager} />
          <Route path="/monitoring" component={StaffReport} />
        </Switch>
      </div>
    );
  }
}

export default ContentDynamic;