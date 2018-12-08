import React from 'react';

class Message extends React.Component {
  render(){
    return (
      <div className="message">
        <div className="message-username"> { this.props.username } </div>
        <div className="message-text"> { this.props.message } </div>
      </div>
    )
  };
};

export default Message;
