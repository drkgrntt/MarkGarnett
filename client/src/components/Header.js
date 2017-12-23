import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <h1 className="title">MARK GARNETT</h1>
        <div className="linksDiv">
          <Link to="#" className="links">Link 1</Link>
          <Link to="#" className="links">Link 2</Link>
          <Link to="#" className="links">Link 3</Link>
        </div>
      </div>
    );
  }
}

export default Header;
