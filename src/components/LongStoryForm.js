import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLongStory } from '../actions';
import TextEditor from './TextEditor';

class LongStoryForm extends Component {
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
    const { createLongStory, history } = this.props;

    createLongStory(values, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="card-panel">
        <h4>Start a new long story!</h4>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Story Title"
            name="storyTitle"
            component={this.renderTextField}
          />
          <Field
            label="Story Image URL"
            name="storyImage"
            component={this.renderTextField}
          />
          <Field
            label="First Chapter Title"
            name="chapterTitle"
            component={this.renderTextField}
          />
          <Field 
            label="First Chapter Image URL"
            name="chapterImage"
            component={this.renderTextField}
          />
          <Field
            label="First Chapter Content"
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
  form: 'LongStoryForm'
})(
  connect(null, { createLongStory })(withRouter(LongStoryForm))
);
