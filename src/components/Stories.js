import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IndexShortStories from './IndexShortStories';

class Stories extends Component {
  render() {
    return (
      <div>
        <Link 
          style={{ marginTop: '10px' }} 
          to="/" 
          className="btn indigo lighten-1"
        >
          Home
        </Link>
        <IndexShortStories />
      </div>
    );
  }
}

export default Stories;
