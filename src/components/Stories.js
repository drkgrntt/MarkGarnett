import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IndexShortStories from './IndexShortStories';
import IndexLongStories from './IndexLongStories';

class Stories extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
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
        <div className="card-panel">
          <IndexShortStories />
          <IndexLongStories />
        </div>
      </div>
    );
  }
}

export default Stories;
