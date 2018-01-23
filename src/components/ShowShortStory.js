import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { shortStoryFetch } from '../actions';

class ShowShortStory extends Component {
  componentDidMount() {
    this.props.shortStoryFetch();
  }
  render() {
    const { story } = this.props;
    console.log(story);

    return (
      <div>
        TEXT
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const shortStories = _.map(state.shortStories, (val, uid) => {
    return { ...val, uid };
  });

  return { story: shortStories };
};

export default connect(mapStateToProps, { shortStoryFetch })(ShowShortStory);
