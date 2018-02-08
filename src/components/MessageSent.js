import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MessageSent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col m3"></div>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Success!</span>
              <p>Your message has successfully been sent to Mark! If applicable, he will be in touch soon!</p>
            </div>
            <div className="card-action">
              <Link to="/">Back to the site</Link>
            </div>
          </div>
        </div>
        <div className="col m3"></div>
      </div>
    );
  }
}

export default MessageSent;
