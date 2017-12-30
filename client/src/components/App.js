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

  renderAdminContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <div style={{ fontStyle: 'italic', margin: '8px' }}>
            <span>Admin View Enabled</span>
            <a 
              style={{ cursor: 'pointer', color: 'black' }} 
              className="right" 
              href="/api/logout"
            >
              Logout
            </a>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter 
          onUpdate={() => window.scrollTo(0, 0)} 
        >
          <div>
            {this.renderAdminContent()}
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/admin/register" component={AdminRegister} />
              <Route exact path="/admin/login" component={AdminLogin} />
              <Route exact path="/Chapter1" component={Chapter1} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(App);
