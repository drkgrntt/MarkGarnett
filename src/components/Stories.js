import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShortStories from './ShortStories';

class Stories extends Component {
  render() {
    return (
      <div>
        <Link style={{ margin: '10px 0' }} to="/" className="btn">Home</Link>
        <ShortStories />
      </div>
    );
  }
}

export default Stories;
