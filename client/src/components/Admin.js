import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
  render() {
    return (
      <div className="row" style={{ margin: '50px' }}>
        <div className="col m3"></div>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Admin Page</span>
              <p>This way to become an admin.</p>
            </div>
            <div className="card-action">
              <Link to="/admin/register">Register</Link>
              <Link to="/admin/login">Login</Link>
              <Link to="/" className="right">Home</Link>
            </div>
          </div>
        </div>
        <div className="col m3"></div>
      </div>
    );
  }
}

export default Admin;
