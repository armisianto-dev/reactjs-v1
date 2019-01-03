import React, { Component } from 'react';
import API from '../../api';

const user = JSON.parse(localStorage.getItem('user'));

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userImg: '',
            user_id: user.user_id,
            user: user
        }
    }

    componentDidMount() {

        API.get(`users/${user.user_id}`)
            .then(response => {
                const data = response.data;
                this.setState({
                    user: data.values[0],
                    userImg: "http://202.91.14.3/te/resource/doc/images/users/" + data.values[0].employee_img,
                })
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {

        var { user, userImg } = this.state;

        return (
            <div className="row">
                <div className="col-12">
                    <h3>My Profile</h3>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header card-header-icon card-header-info">
                            <div className="card-icon">
                                <i className="fa fa-user"></i>
                            </div>
                            <h4 className="card-title">Update Profil</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group bmd-form-group">
                                            <label className="bmd-label-floating">Nama Lengkap</label>
                                            <input type="text" className="form-control" name="full_name" value={user.full_name} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-profile">
                        <div className="card-avatar">
                            <a href="#pablo">
                                <img className="img" src={userImg} />
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category text-gray">{user.employee_position}</h6>
                            <h4 className="card-title">{user.full_name}</h4>
                            <p className="card-description">
                                Saya programmer, bekerja untuk membuat aplikasi yang dapat membantu dan bermanfaat bagi penggunanya...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;