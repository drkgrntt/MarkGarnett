import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Chapter1 from './Chapter1';

class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Chapter1" component={Chapter1} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
