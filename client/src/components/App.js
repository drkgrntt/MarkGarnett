import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Chapter1 from './Chapter1';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter 
          onUpdate={() => window.scrollTo(0, 0)} 
        >
          <div>
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/Chapter1" component={Chapter1} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
