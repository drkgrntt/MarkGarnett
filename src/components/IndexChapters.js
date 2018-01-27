import React, { Component } from 'react';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { chaptersFetch } from '../actions';

class IndexChapters extends Component {
  componentWillMount() {
    const { chaptersFetch, uid } = this.props;

    chaptersFetch(uid);
  }

  renderChapterCard() {
    if (this.props.longStories == false) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    return _.map(this.props.chapters, (chapter) => {
      return (
        <li key={chapter.uid}>
          <div className="row">
            <Link 
              className="chapter"
              to={`/stories/long/${this.props.uid}/chapters/${chapter.uid}`}
            >
              <i>{chapter.chapterTitle}</i>
            </Link>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="right">
        <h5 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Chapters</h5>
        {this.renderChapterCard()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const chapters = _.map(state.chapters, (val, uid) => {
    return { ...val, uid };
  });

  return { chapters };
};

export default connect(mapStateToProps, { chaptersFetch })(withRouter(IndexChapters));
