import React, { Component } from 'react';
import Header from './Header';
import FromScatteredAshes from './FromScatteredAshes';
import FeatureStory from './FeatureStory';

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div>
        <Header />
        <FromScatteredAshes />
        <hr /><hr />
        <FeatureStory />
      </div>
    );
  }
}

export default Landing;
