import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { shortStoriesFetch } from '../actions';

class ShowShortStory extends Component {
  componentDidMount() {
    this.props.shortStoriesFetch();
  }
  render() {
    const { story } = this.props;

    if (!story) {
      return (
        <div style={{ marginTop: '100px' }} className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    return (
      <div>
        <Link style={{ margin: '10px' }} className="btn indigo lighten-1" to="/stories">
          Back
        </Link>
        <div className="chapter1background">
          <h3>{story.title}</h3>
          <img 
            className="chapter1banner"
            width="100%"
            height="auto"
            src={story.image} 
          />
          <div className="chapter1">
            {renderHTML(story.content)}
            <Link to="/stories" className="btn indigo lighten-1" style={{ float: 'right' }}>
              Back
            </Link>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({ shortStories }, ownProps) => {
  return { story: shortStories[ownProps.match.params.uid] };
};

export default connect(mapStateToProps, { shortStoriesFetch })(ShowShortStory);
