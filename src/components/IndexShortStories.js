import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import { shortStoriesFetch } from '../actions';

class IndexShortStories extends Component {
  componentWillMount() {
    this.props.shortStoriesFetch();
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
          <div className="col s12 m6 l4">
            <div className="card hoverable">
              <div className="card-image">
                <img src={story.image} height="200" />
                <span className="card-title">{story.title}</span>
              </div>
              <div className="card-content">
                <span>
                  {renderHTML(story.content.substring(0, 110))}...
                </span>
              </div>
              <div className="card-action">
                <Link to={`/stories/short/${story.uid}`}>Read More</Link>
              </div>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <h4>Short Stories</h4>
          <hr />
          <ul>
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

export default connect(mapStateToProps, { shortStoriesFetch })(IndexShortStories);
