import React, { Component } from 'react';
import Header from './Header';
import FromScatteredAshes from './FromScatteredAshes';

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div>
        <Header />
        <FromScatteredAshes />
      </div>
    );
  }
}

export default Landing;
