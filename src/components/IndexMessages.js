import React, { Component } from 'react';
import _ from 'lodash';
import renderHTML from 'react-render-html'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { messagesFetch, deleteMessage } from '../actions';

class IndexMessages extends Component {
  componentDidMount() {
    this.props.messagesFetch();
  }

  onDeleteClick(message) {
    const { deleteMessage, history } = this.props;
    const { uid } = message;

    deleteMessage(uid, history);
  }

  renderContent() {
    const { messages } = this.props;

    if (messages == false) {
      return <h5>No messages</h5>;
    }

    return _.map(messages, (message) => {
      return [
        <li key={message.uid}>
          <div className="row">
            <div className="col l4 m12">
              <p style={{ fontWeight: 'bold' }}>From: {message.name}</p>
              <p style={{ fontWeight: 'bold' }}>Email: {message.email}</p>
              <a
                onClick={this.onDeleteClick.bind(this, message)}
                className="btn red"
              >
                Delete Message
              </a>
            </div>
            <div className="col l8 m12">
              <span style={{ fontWeight: 'bold' }}>{renderHTML(message.content)}</span>
            </div>
          </div>
          <hr />
        </li>
      ]
    });
  }

  render() {
    return (
      <div className="card-panel">
        <h4>Messages</h4>
        <hr />
        <ul>
        {this.renderContent()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const messages = _.map(state.messages, (val, uid) => {
    return { ...val, uid };
  });

  return { messages };
};

export default connect(mapStateToProps, { messagesFetch, deleteMessage })(withRouter(IndexMessages));
