import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import Pace from 'react-pace-progress'

import API from '../api';

const PaceLoading = () => <Pace color="#00b2f6" height="10" />;

// Load / Import Component
const StaffDashboard = Loadable({
  loader: () => import('./view/dashboard/Welcome'),
  loading: PaceLoading
});

const StaffReportJaldin = Loadable({
  loader: () => import('./view/report/Jaldin'),
  loading: PaceLoading
});


class ContentDynamic extends Component {

  render() {

    return (
      <Switch>
        <Route path="/" exact component={StaffDashboard} />

        <Route path="/dashboard/welcome" exact component={StaffDashboard} />
        <Route path="/report/jaldin" component={StaffReportJaldin} />
        {/* <Route path="/report/personel" component={StaffReportPersonal} />
        <Route path="/report/lembur" component={StaffReportLembur} />
        <Route path="/report/leave" component={StaffReportLeave} />
        <Route path="/report/ijin" component={StaffReportIjin} />
        <Route path="/report/presensi" component={StaffReportPresensi} />
        <Route path="/task/mytask" component={StaffTaskMyTask} />
        <Route path="/task/daily_notes" component={StaffTaskDailyNotes} />
        <Route path="/task/lpj" component={StaffTaskLpj} />
        <Route path="/analysis/kedisiplinan" component={StaffAnalysisKedisiplinan} />
        <Route path="/monitoring/jaldin" component={StaffMonitoringJaldin} />
        <Route path="/monitoring/overtime" component={StaffMonitoringOvertime} />
        <Route path="/monitoring/permit" component={StaffMonitoringPermit} />
        <Route path="/monitoring/leave" component={StaffMonitoringLeave} /> */}

      </Switch>
    );
  }
}

export default ContentDynamic;