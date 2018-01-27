import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { chaptersFetch, updateChapter } from '../actions';
import TextEditor from './TextEditor';

class UpdateChapter extends Component {
  componentDidMount() {
    const { uid } = this.props.match.params;

    this.props.chaptersFetch(uid);
  }

  renderTextField(field) {
    return (
      <div className="input-field">
        <input
          placeholder={field.label}
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    const { updateChapter, history } = this.props;
    const { uid, chapter_uid } = this.props.match.params;

    updateChapter(uid, chapter_uid, values, history);
  }

  render() {
    if (this.props.auth.user === null) {
      return (
        <h3>Please <Link to="/admin/login">login</Link> to see the admin dashboard.</h3>
      );
    }

    const { handleSubmit } = this.props;

    return (
      <div className="card-panel">
        <h4>Edit this chapter</h4>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Chapter Title"
            name="chapterTitle"
            component={this.renderTextField}
          />
          <Field
            label="Chapter Image URL"
            name="chapterImage"
            component={this.renderTextField}
          />
          <Field
            label="Chapter Content"
            name="chapterContent"
            component={TextEditor}
          />
          <button
            type="submit"
            className="btn blue"
            style={{ margin: '10px 0' }}
          >
            Submit
          </button>
          <Link
            to="/admin/dashboard"
            style={{ margin: '0 5px' }}
            className="btn red"
          >
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ chapters, auth }, ownProps) => {
  return { auth, initialValues: chapters[ownProps.match.params.chapter_uid] };
};

const UpdateChapterForm = reduxForm({
  form: 'UpdateChapterForm',
  enableReinitialize: true
})(UpdateChapter);

export default connect(mapStateToProps, { chaptersFetch, updateChapter })(withRouter(UpdateChapterForm));
