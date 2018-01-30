import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createShortStory } from '../actions';
import TextEditor from './TextEditor';

class ShortStoryForm extends Component {
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
    const { createShortStory, history } = this.props;

    createShortStory(values, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="card-panel">
        <h4>Use this form to create a new short story!</h4>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderTextField}
          />
          <Field
            label="Image URL"
            name="image"
            component={this.renderTextField}
          />
          <Field
            label="Forward"
            name="forward"
            component={this.renderTextField}
          />
          <Field
            label="Story Content"
            name="content"
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
  form: 'ShortStoryForm'
})(
  connect(null, { createShortStory })(withRouter(ShortStoryForm))
);
