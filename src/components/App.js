import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase';
import * as actions from '../actions';

import Landing from './Landing';
import Chapter1 from './Chapter1';
import Stories from './Stories';
import ShowShortStory from './ShowShortStory';
import ShowChapter from './ShowChapter';
import AboutTheAuthor from './AboutTheAuthor';
import MessageSent from './MessageSent';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';
import Success from './Success'
import UpdateShortStory from './UpdateShortStory';
import UpdateLongStory from './UpdateLongStory';
import UpdateChapter from './UpdateChapter';

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
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/chapter1" component={Chapter1} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/stories/short/:uid" component={ShowShortStory} />
            <Route exact path="/stories/long/:uid/chapters/:chapter_uid" component={ShowChapter} />
            <Route exact path="/about" component={AboutTheAuthor} />
            <Route exact path="/sent" component={MessageSent} />
            {/* ADMIN ROUTES */}
            <Route exact path="/admin/login" component={LoginForm} />
            <Route exact path="/admin/register" component={RegisterForm} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/success" component={Success} />
            <Route exact path="/admin/stories/short/:uid/update" component={UpdateShortStory} />
            <Route exact path="/admin/stories/long/:uid/update" component={UpdateLongStory} />
            <Route exact path="/admin/stories/long/:uid/chapters/:chapter_uid/update" component={UpdateChapter} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
