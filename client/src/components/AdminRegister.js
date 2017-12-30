import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { createUserAsAdmin } from '../actions';

class AdminRegister extends Component {
  // RENDER FORM FIELD
  renderField(field) {
    return (
      <div className="input-field" style={{ margin: '0 20px' }}>
        <input
          type={field.type}
          placeholder={field.label}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    const { createUserAsAdmin, history } = this.props;

    createUserAsAdmin(values, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row" style={{ margin: '50px' }}>
        <div className="col m3"></div>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Register Admin Account</span>
              <p>Please enter the following information. If you do not know the Admin Code, please click on "Home"</p>
            </div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label="Admin ID"
                name="username"
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
              <div className="card-action">
                <input className="submit" type="submit" value="Register" />
                <Link to="/" className="right">Home</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col m3"></div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'AdminForm'
})(
  connect(null, { createUserAsAdmin })(withRouter(AdminRegister))
);
