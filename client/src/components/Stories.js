import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Stories extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="btn">Home</Link>
        <h1>Coming Soon!</h1>
      </div>
    );
  }
}

export default Stories;
