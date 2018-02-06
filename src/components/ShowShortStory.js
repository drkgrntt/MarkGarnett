import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { shortStoriesFetch } from '../actions';

class ShowShortStory extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
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
        <Link style={{ margin: '10px 0' }} className="btn indigo lighten-1" to="/">
          Home
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
            <blockquote><i>
              <p>Forward:</p>
              {story.forward}
            </i></blockquote>
            {renderHTML(story.content)}
            <Link to="/stories" className="btn indigo lighten-1" style={{ float: 'right' }}>
              Stories
            </Link>
            <Link to="/" className="btn indigo lighten-1" style={{ float: 'left' }}>
              Home
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
