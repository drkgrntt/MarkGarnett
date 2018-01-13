import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase';
import * as actions from '../actions';

import Landing from './Landing';
import Chapter1 from './Chapter1';
import Stories from './Stories';
import AboutTheAuthor from './AboutTheAuthor';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';
import Success from './Success'

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBXciQgq-Ei9RNuGJaHcG03YCtZxmnZb2A",
      authDomain: "markgarnettauthor.firebaseapp.com",
      databaseURL: "https://markgarnettauthor.firebaseio.com",
      projectId: "markgarnettauthor",
      storageBucket: "markgarnettauthor.appspot.com",
      messagingSenderId: "978349701233"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <div>
        <BrowserRouter 
          onUpdate={() => window.scrollTo(0, 0)} 
        >
          <div>
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/chapter1" component={Chapter1} />
              <Route exact path="/stories" component={Stories} />
              <Route exact path="/about" component={AboutTheAuthor} />
              {/* ADMIN ROUTES */}
              <Route exact path="/admin/login" component={LoginForm} />
              <Route exact path="/admin/register" component={RegisterForm} />
              <Route exact path="/admin/dashboard" component={Dashboard} />
              <Route exact path="/admin/success" component={Success} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);