import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import Pace from 'react-pace-progress';

import API from '../api';

class ContentDynamic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listMenu: []
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
      <Switch>
        <Route path="/" exact component={
          Loadable({
            loader: () => import('./view/dashboard/Welcome'),
            loading: PaceLoading
          })
        } />

        {this.state.listMenu.map(menu =>
          // <RouteItem routePath={menu.nav_url} routeComponent={menu.nav_component} />
          <Route path={menu.nav_url} component={
            Loadable({
              loader: () => import(`./view/${menu.nav_component}`),
              loading: PaceLoading
            })
          } />
        )}
      </Switch>
    );
  }
}

export default ContentDynamic;