import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions';

class RegisterForm extends Component {
  renderField(field) {
    return (
      <div className="input-field">
        <input
          placeholder={field.label}
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    const { registerUser, history } = this.props;

    registerUser(values, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <div className="col m4"></div>
        <div className="card-panel col m4">
          <h5>Please enter your email, password, and the admin code.</h5>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Email"
              name="email"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Password"
              name="password"
              type="password"
              component={this.renderField}
            />
            <Field
              label="Admin Code"
              name="adminCode"
              type="password"
              component={this.renderField}
            />
            <button
              type="submit"
              className="btn orange"
              style={{ margin: '10px' }}
            >
              Submit
            </button>
            <span className="authFail">{this.props.auth.error}</span>
          </form>
        </div>
        <div className="col m4"></div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default reduxForm({
  form: 'RegisterForm'
})(
  connect(mapStateToProps, { registerUser })(withRouter(RegisterForm))
);
