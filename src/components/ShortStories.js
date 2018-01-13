import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { shortStoriesFetch } from '../actions';

class ShortStories extends Component {
  componentWillMount() {
    this.props.shortStoriesFetch();
  }

  renderStoryCard() {
    return _.map(this.props.shortStories, (story) => {

      if (!this.props.shortStories) {
        return <h2>Loading...</h2>;
      }

      return (
        <li key={story.uid}>
          <div className="col s12 m6 l4">
            <div className="card hoverable">
              <div className="card-image">
                <img src={story.image} />
                <span className="card-title">{story.title}</span>
              </div>
              <div className="card-content">
                <p className="bold">{story.content.substring(0, 70)}...</p>
              </div>
              <div className="card-action">
                <Link to="#">Read More</Link>
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

const mapStateToProps = ({ shortStories }) => {
  return { shortStories };
};

export default connect(mapStateToProps, { shortStoriesFetch })(ShortStories);
