import React, { Component } from 'react';
import Header from './Header';
import FromScatteredAshes from './FromScatteredAshes';

class Landing extends Component {
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
