import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import AdminShortStoryList from './AdminShortStoryList';
import ShortStoryForm from './ShortStoryForm';
import AdminLongStoryList from './AdminLongStoryList';
import LongStoryForm from './LongStoryForm';

class Dashboard extends Component {
  onLogoutClick() {
    const { logoutUser, history } = this.props;

    logoutUser(history);
  }

  renderContent() {
    if (this.props.auth.user === null) {
      return (
        <h3>Please <Link to="/admin/login">login</Link> to see the admin dashboard.</h3>
      );
    }

    return (
      <div>
        <Link style={{ margin: '10px', float: 'right' }} className="btn" to="/">View Website</Link>
        <a style={{ margin: '10px', float: 'right' }} onClick={this.onLogoutClick.bind(this)} className="btn red">Logout</a>
        <h2>Admin Dashboard</h2>
        <AdminShortStoryList />
        <ShortStoryForm />
        <AdminLongStoryList />
        <LongStoryForm />
      </div>
    );
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
