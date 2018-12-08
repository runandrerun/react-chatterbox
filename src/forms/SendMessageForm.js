import { Component } from 'react';

class SendMessageForm extends Component {

  handleSubmit = () => {
    console.log("Test")
  };

  handleChange = () => {
    console.log("Test")
  };

  render() {
    return (
      <form className="send-message-form" onSubmit={this.handleSubmit}>
        <input
          placeholder={"Enter Your Message"}
          onChange={this.handleChange}
        />
      </form>
    )
  };
};

export default SendMessageForm;
