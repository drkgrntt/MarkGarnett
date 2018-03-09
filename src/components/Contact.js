import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createMessage } from '../actions';
import TextEditor from './TextEditor';

class Contact extends Component {
  renderTextField(field) {
    return (
      <div className="input-field col l6 m12">
        <h5>{field.label}</h5>
        <input
          placeholder={field.label}
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    const { createMessage, history } = this.props;

    createMessage(values, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="FSAbackground">
        <h3>Contact Mark</h3>
        <hr />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="row">
            <Field
              label="Your Name"
              name="name"
              component={this.renderTextField}
            />
            <Field
              label="Your Email Address"
              name="email"
              component={this.renderTextField}
            />
          </div>
          <h5>Content</h5>
          <Field
            name="content"
            component={TextEditor}
          />
          <button
            type="submit"
            className="btn indigo lighten-1"
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
  form: 'ContactForm'
})(
  connect(null, { createMessage })(withRouter(Contact))
);