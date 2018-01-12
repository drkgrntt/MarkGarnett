import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Dashboard extends Component {
  onLogoutClick() {
    const { logoutUser, history } = this.props;

    logoutUser(history);
  }

  renderContent() {
    switch (this.props.auth.user) {
      case null:
        return (
          <h3>Please <Link to="/">login</Link> to see the dashboard.</h3>
        );
      case false:
        return;
      default: 
        return (
          <div>
            <a style={{ margin: '10px' }} onClick={this.onLogoutClick.bind(this)} className="btn red">Logout</a>
            <h1>THIS IS THE DASHBOARD</h1>
          </div>
        );
    }
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Dashboard));
