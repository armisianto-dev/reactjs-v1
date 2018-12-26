import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
    fetch('http://localhost:3001/staff-base/list_menu/134/0')
      .then(response => response.json())
      .then(data => {
        this.setState({
          listMenu: data.values
        })
      })
  }

  render() {

    var { listMenu } = this.state;

    return (
      <div>
        <Switch>
          <Route path="/" exact component={StaffDashboard} />
          <Route path="/task/mytask" component={StaffTaskManager} />
          <Route path="/monitoring" component={StaffReport} />
        </Switch>
      </div>
    );
  }
}

export default ContentDynamic;