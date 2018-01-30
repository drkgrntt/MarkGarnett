import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { shortStoriesFetch, updateShortStory } from '../actions';
import TextEditor from './TextEditor';

class UpdateShortStory extends Component {
  componentDidMount() {
    this.props.shortStoriesFetch();
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
    const { updateShortStory, history } = this.props;
    const { uid } = this.props.match.params;

    updateShortStory(values, uid, history);
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
        <h4>Edit this story</h4>
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

const mapStateToProps = ({ shortStories, auth }, ownProps) => {
  return { auth, initialValues: shortStories[ownProps.match.params.uid] };
};

const UpdateShortStoryForm = reduxForm({
  form: 'UpdateShortStoryForm',
  enableReinitialize: true
})(UpdateShortStory);

export default connect(mapStateToProps, { shortStoriesFetch, updateShortStory })(withRouter(UpdateShortStoryForm));
