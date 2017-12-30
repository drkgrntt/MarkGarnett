import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { loginUserAsAdmin } from '../actions';

class AdminLogin extends Component {
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
    const { loginUserAsAdmin, history } = this.props;

    loginUserAsAdmin(values, history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row" style={{ margin: '50px' }}>
        <div className="col m3"></div>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Login to Admin Account</span>
              <p>Please enter the following information. If you are not an admin, please click on "Home"</p>
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
              <div className="card-action">
                <input className="submit" type="submit" value="Login" />
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
  connect(null, { loginUserAsAdmin })(withRouter(AdminLogin))
);
