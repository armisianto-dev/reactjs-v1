import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-stats">
            <div className="card-header card-header-info card-header-icon">
              <div className="card-icon">
                <i className="fa fa-file-text-o"></i>
              </div>
              <p className="card-category">Laporan Perjalanan Dinas</p>
              <h3 className="card-title">97/100
                <small> Lap</small>
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats float-right">
                <a href="#pablo">Detail...</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-stats">
            <div className="card-header card-header-warning card-header-icon">
              <div className="card-icon">
                <i className="fa fa-calendar"></i>
              </div>
              <p className="card-category">Cuti</p>
              <h3 className="card-title">9/12
                <small> Hari</small>
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats float-right">
                <a href="#pablo">Detail...</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-stats">
            <div className="card-header card-header-dark card-header-icon">
              <div className="card-icon">
                <i className="fa fa-sign-out"></i>
              </div>
              <p className="card-category">Izin</p>
              <h3 className="card-title">5
                <small> Hari</small>
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats float-right">
                <a href="#pablo">Detail...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;