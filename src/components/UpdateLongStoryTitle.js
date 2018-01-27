import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { longStoriesFetch, updateLongStory } from '../actions';

class UpdateLongStoryTitle extends Component {
  componentDidMount() {
    this.props.longStoriesFetch();
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

  onSubmit(value) {
    const { updateLongStory, history } = this.props;
    const { uid } = this.props.match.params;

    updateLongStory(value, uid, history);
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
      <h4>Edit this story title</h4>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Story Title"
            name="storyTitle"
            component={this.renderTextField}
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

const mapStateToProps = ({ longStories, auth }, ownProps) => {
  return { auth, initialValues: longStories[ownProps.match.params.uid] };
};

const UpdateLongStoryTitleForm = reduxForm({
  form: 'UpdateLongStoryTitleForm',
  enableReinitialize: true
})(UpdateLongStoryTitle);

export default connect(mapStateToProps, { longStoriesFetch, updateLongStory })(withRouter(UpdateLongStoryTitleForm));
