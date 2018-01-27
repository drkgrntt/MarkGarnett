import React, { Component } from 'react';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteLongStory, longStoriesFetch } from '../actions';
import AdminChapterList from './AdminChapterList';
import UpdateLongStoryTitle from './UpdateLongStoryTitle';

class AdminLongStoryList extends Component {
  componentWillMount() {
    this.props.longStoriesFetch();
  }

  onDeleteClick(story) {
    const { deleteLongStory, history } = this.props;
    const { uid } = story;

    deleteLongStory(uid, history);
  }

  renderStoryCard() {
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
            <span style={{ fontSize: '17px', fontWeight: 'bold' }}>{story.storyTitle}</span>
            <a 
              onClick={this.onDeleteClick.bind(this, story)}
              className="btn right red"
            >
              Delete story
            </a>
            <Link 
              className="btn right orange" 
              to={`/admin/stories/long/${story.uid}/update`}
              style={{ marginRight: '15px' }}
            >
              Edit story title
            </Link>
          </div>
          <AdminChapterList uid={story.uid} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="card-panel">
          <ul>
            <h4>Long Stories</h4>
            {this.renderStoryCard()}
          </ul>
        </div>
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

export default connect(mapStateToProps, { deleteLongStory, longStoriesFetch })(withRouter(AdminLongStoryList));
