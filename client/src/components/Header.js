import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">MARK GARNETT</h1>
        <div className="linksDiv">
          <Link to="/stories" className="links">Short Stories by Mark</Link> | 
          <Link to="/about" className="links">About the Author</Link> | 
          <a href="https://www.amazon.com/Scattered-Ashes-Mark-Garnett/dp/1978355076/ref=sr_1_1?ie=UTF8&qid=1513826729&sr=8-1&keywords=from+scattered+ashes" className="links">
            From Scattered Ashes on Amazon
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
