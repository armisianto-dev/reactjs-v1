import React, { Component } from 'react';
import API from '../../api';

class welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lapJaldin: [],
            userLeave: []
        }
    }

    componentDidMount() {
        API.get('dashboard/lap_jaldin/134/2016')
            .then(response => {
                const data = response.data;
                this.setState({
                    lapJaldin: data.values[0],
                })
            })

        API.get('dashboard/user_leave/134/2016')
            .then(response => {
                const data = response.data;
                this.setState({
                    userLeave: data.values[0],
                })
            })
    }

    render() {

        var {
            lapJaldin,
            userLeave
        } = this.state;

        return (
            <div className="row">
                <div className="col-12">
                    <h3>Dashboard</h3>
                </div>
                <div className="col-md-4">
                                <div className="card card-stats">
                                    <div className="card-header card-header-info card-header-icon">
                                    <div className="card-icon">
                                        <i className="fa fa-file-invoice-dollar "></i>
                                    </div>
                                    <p className="card-category">Laporan Perjalanan Dinas</p>
                                    {lapJaldin &&
                                        <h3 className="card-title">{lapJaldin.lap_finish}/{lapJaldin.total_lap}
                                            <small> Lap</small>
                                        </h3>
                                    }
                                    {!lapJaldin &&
                                        <h3 className="card-title">0/0
                                            <small> Lap</small>
                                        </h3>
                                    }
                                    
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
                                    {userLeave && 
                                    <h3 className="card-title">{userLeave.total_cuti}/{userLeave.total_kuota_cuti}
                                        <small> Hari</small>
                                    </h3>
                                    }
                                    {!userLeave && 
                                    <h3 className="card-title">0/0
                                        <small> Hari</small>
                                    </h3>
                                    }
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
                                        <i className="fa fa-sign-out-alt"></i>
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

export default welcome;