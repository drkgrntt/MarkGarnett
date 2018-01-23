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
    return _.map(this.props.shortStories, (story) => {
      return (
        <li key={story.uid}>
          <div className="col s12 m6 l4">
            <div className="card hoverable">
              <div className="card-image">
                <img src={story.image} />
                <span className="card-title">{story.title}</span>
              </div>
              <div className="card-content">
                <span style={{ fontWeight: 'bold' }}>
                  {renderHTML(story.content.substring(0, 130))}...
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
        <h3>Short Stories</h3>
        <div className="card-panel row">
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
