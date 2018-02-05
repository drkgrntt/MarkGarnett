import React, { Component } from 'react';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetFeature, deleteShortStory, shortStoriesFetch } from '../actions';

class AdminShortStoryList extends Component {
  componentWillMount() {
    this.props.shortStoriesFetch();
  }

  onDeleteClick(story) {
    const { deleteShortStory, history } = this.props;
    const { uid } = story;

    deleteShortStory(uid, history);
  }

  onFeatureClick(story) {
    const { shortStories, resetFeature, history } = this.props;

    resetFeature(shortStories, story, history);
  }

  renderStoryCard() {
    if (this.props.shortStories == false) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    return _.map(this.props.shortStories, (story) => {
      return (
        <li key={story.uid}>
          <div className="row">
            <hr />
            <span style={{ fontSize: '17px', fontWeight: 'bold' }}>{story.title}</span>
            <a 
              onClick={this.onDeleteClick.bind(this, story)}
              className="btn right red"
            >
              Delete
            </a>
            <Link 
              className="btn right orange" 
              to={`/admin/stories/short/${story.uid}/update`}
              style={{ marginRight: '15px' }}
            >
              Edit
            </Link>
            <a
              onClick={this.onFeatureClick.bind(this, story)}
              className="btn right green darken-4"
              style={{ marginRight: '15px' }}
            >
              Feature
            </a>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="card-panel">
          <ul>
            <h4>Short Stories</h4>
            {this.renderStoryCard()}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const shortStories = _.map(state.shortStories, (val, uid) => {
    return { ...val, uid };
  });

  return { shortStories };
};

export default connect(mapStateToProps, { resetFeature, deleteShortStory, shortStoriesFetch })(withRouter(AdminShortStoryList));
