import React, { Component } from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { longStoriesFetch } from '../actions';
import IndexChapters from './IndexChapters';

class IndexLongStories extends Component {
  componentWillMount() {
    this.props.longStoriesFetch();
  }

  renderStoryCard() {
    console.log(this.props.longStories);
    if (this.props.longStories == false) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    return _.map(this.props.longStories, (story) => {
      return (
        <li key={story.uid}>
          <div className="row">
            <hr />
            <div className="col m9 s12">
              <p style={{ fontSize: '25px', fontWeight: 'bold', fontStyle: 'italic' }}>
                {story.storyTitle}
              </p>
              <img
                className="storyImage"
                src={story.storyImage}
              />
            </div>
            <div className="col m3 s12">
              <IndexChapters uid={story.uid} />
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          <h4>Longer Stories</h4>
          {this.renderStoryCard()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const longStories = _.map(state.longStories, (val, uid) => {
    return { ...val, uid };
  });

  return { longStories };
};

export default connect(mapStateToProps, { longStoriesFetch })(withRouter(IndexLongStories));
