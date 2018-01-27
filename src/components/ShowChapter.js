import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { chaptersFetch } from '../actions';

class ShowChapter extends Component {
  componentDidMount() {
    const { chaptersFetch } = this.props;
    const { uid } = this.props.match.params;

    chaptersFetch(uid);
  }
  render() {
    const { chapter } = this.props;

    if (!chapter) {
      return (
        <div style={{ marginTop: '100px' }} className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    return (
      <div>
        <Link 
          style={{ margin: '10px' }} 
          className="btn indigo lighten-1" 
          to="/stories"
        >
          Back
        </Link>
        <div className="chapter1background">
          <h3>{chapter.chapterTitle}</h3>
          <img 
            className="chapter1banner"
            width="100%"
            height="auto"
            src={chapter.chapterImage} 
          />
          <div className="chapter1">
            {renderHTML(chapter.chapterContent)}
            <Link 
              to="/stories"
              className="btn indigo lighten-1" 
              style={{ float: 'right' }}
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ chapters }, ownProps) => {
  return { chapter: chapters[ownProps.match.params.chapter_uid] };
};

export default connect(mapStateToProps, { chaptersFetch })(ShowChapter);
