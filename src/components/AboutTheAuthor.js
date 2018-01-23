import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutTheAuthor extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m7">
          <h2 className="header">About Mark</h2>
          <div className="card horizontal ATAbackground">
            <div className="card-image">
              <img src="https://i.imgur.com/UuQHIvn.jpg?1" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <span>Coming soon.</span>
              </div>
              <div className="card-action">
                <Link className="btn indigo lighten-1 right" to="/">Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutTheAuthor;
