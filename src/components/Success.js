import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Success extends Component {
  render() {
    return (
      <div className="row">
        <div className="col m3"></div>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Success!</span>
              <p>Your changes have been successfully saved! Where would you like to go now?</p>
            </div>
            <div className="card-action">
              <Link to="/admin/dashboard">Dashboard</Link>
              <Link to="/">Main Web Page</Link>
            </div>
          </div>
        </div>
        <div className="col m3"></div>
      </div>
    );
  }
}

export default Success;
