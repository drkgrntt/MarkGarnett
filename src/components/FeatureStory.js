import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import { shortStoriesFetch } from '../actions';

class FeatureStory extends Component {
  componentDidMount() {
    this.props.shortStoriesFetch();
  }

  render() {
    if (this.props.shortStories == false) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    return _.map(this.props.shortStories, (story) => {
      if (story.isFeature) {
        return (
          <div key={story.uid}>
            <div className="FSAbackground">
              <div className="row">
                <div className="col l8 m12">
                  <img className="FSA" style={{ width: '100%' }} src={story.image} />
                </div>
                <div className="col l4 m12">
                  <h3>{story.title}</h3>
                  {renderHTML(story.content.substring(0, 200))}...
                  <Link
                    className="btn indigo lighten-1"
                    to={`/stories/short/${story.uid}`}
                    style={{ display: 'block' }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  }
}

const mapStateToProps = (state) => {
  const shortStories = _.map(state.shortStories, (val, uid) => {
    return { ...val, uid };
  });

  return { shortStories };
};

export default connect(mapStateToProps, { shortStoriesFetch })(FeatureStory);
