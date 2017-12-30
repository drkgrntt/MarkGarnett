import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Admin from './Admin';
import AdminRegister from './AdminRegister';
import AdminLogin from './AdminLogin';
import Chapter1 from './Chapter1';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderAdmin() {
    if (this.props.auth === true) {
      return (
        <div>Admin view enabled</div>
      );
    }

    return;
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {this.renderAdmin}
            <Route exact path="/" component={Landing} />
              <div className="container">
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/admin/register" component={AdminRegister} />
                <Route exact path="/admin/login" component={AdminLogin} />
                <Route exact path="/Chapter1" component={Chapter1} />
              </div>
            }
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
