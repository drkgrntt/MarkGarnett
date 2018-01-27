import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChapter } from '../actions';
import TextEditor from './TextEditor';

class ChapterForm extends Component {
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
    const { uid, createChapter, history } = this.props;
    const { chapterTitle, chapterImage, chapterContent } = values;

    createChapter(uid, chapterTitle, chapterImage, chapterContent, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <hr />
        <h4>Add a chapter!</h4>
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
            label="Story Content"
            name="chapterContent"
            component={TextEditor}
          />
          <button
            type="submit"
            className="btn blue"
            style={{ margin: '10px 0'}}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'ChapterForm'
})(
  connect(null, { createChapter })(withRouter(ChapterForm))
);
