import React, { Component } from 'react';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteChapter, chaptersFetch } from '../actions';
import ChapterForm from './ChapterForm';

class AdminChapterList extends Component {
  componentWillMount() {
    const { uid, chaptersFetch } = this.props;

    chaptersFetch(uid);
  }

  onDeleteClick(chapter) {
    const { deleteChapter, uid, history } = this.props;
    const chapter_uid = chapter.uid;

    deleteChapter(uid, chapter_uid, history);
  }

  renderChapterCard() {
    if (this.props.chapters == false) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    return _.map(this.props.chapters, (chapter, i) => {
      return (
        <li key={chapter.uid}>
          <div className="row">
            <hr />
            <span style={{ fontSize: '17px', fontWeight: 'bold' }}>{i+1}. {chapter.chapterTitle}</span>
            <a 
              onClick={this.onDeleteClick.bind(this, chapter)}
              className="btn right red"
            >
              Delete chapter
            </a>
            <Link 
              className="btn right orange" 
              to={`/admin/stories/long/${this.props.uid}/chapters/${chapter.uid}/update`}
              style={{ marginRight: '15px' }}
            >
              Edit chapter
            </Link>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="card-panel">
        <ul>
          <h5>Chapters</h5>
          {this.renderChapterCard()}
        </ul>
        <ChapterForm uid={this.props.uid} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const chapters = _.map(state.chapters, (val, uid) => {
    return { ...val, uid };
  });

  return { chapters };
};

export default connect(mapStateToProps, { deleteChapter, chaptersFetch })(withRouter(AdminChapterList));
