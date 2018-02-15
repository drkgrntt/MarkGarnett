import React, { Component } from 'react';
import Header from './Header';
import FromScatteredAshes from './FromScatteredAshes';
import FeatureStory from './FeatureStory';
import Contact from './Contact';
import HoneyBadger from './HoneyBadger';

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
        <hr /><hr />
        <Contact />
        <hr /><hr />
        <HoneyBadger />
      </div>
    );
  }
}

export default Landing;
