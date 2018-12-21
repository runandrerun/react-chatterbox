import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from '../Components/Message';

export default class RoomList extends Component {

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.clientHeight + 50 >= node.scrollHeight;
  };

  componentDidUpdate() {

  };

  render() {
    return (
      <div className="message-list">
      </div>
    )
  };
};
