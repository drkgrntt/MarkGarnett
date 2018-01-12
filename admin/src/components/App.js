import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase';
import * as actions from '../actions';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDZ_oonJb0kesyfLP7iC--Ws9P5kjyMk3w",
      authDomain: "markgarnettadmin.firebaseapp.com",
      databaseURL: "https://markgarnettadmin.firebaseio.com",
      projectId: "markgarnettadmin",
      storageBucket: "markgarnettadmin.appspot.com",
      messagingSenderId: "185255029898"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <a 
              href="https://markgarnettauthor.firebaseapp.com" 
              target="_blank"
              className="btn"
              style={{ margin: '10px' }}
            >
              View Website
            </a>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
