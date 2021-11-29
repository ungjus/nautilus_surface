import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.socket = require("socket.io-client")("http://localhost:4040");
    this.state = {
      messages: [],
      name: "Anonymous",
    };

    // Listener for retrieving messages from server
    this.socket.on("Text Chat", (messages) => {
      this.updateMessages(messages);
    });
  }

  // TODO: Create a "connecting..."" server log message when socket turns on
  componentDidMount() {
    // Send out a one-time request to retrieve all messages from server upon start
    this.socket.emit("Request Msgs");
  }

  // Updates to current server's messages
  updateMessages = (messages) => {
    this.setState({
      messages: messages,
    });
  };

  // Displays newly typed message and sends to server
  handleNewMessage = (author, text) => {
    this.setState({
      messages: [
        ...this.state.messages,
        { author: this.state.name, body: text },
      ],
    });
    this.socket.emit("Post Msg", { author: this.state.name, body: text });
  };

  handleNameSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value);
    this.setState({
      name: this.input.value,
    });
  };
  render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages} me={this.state.name} />
        <MessageForm onMessageSend={this.handleNewMessage} />
        <div className="NameForm">
          <input
            type="text"
            ref={(node) => (this.input = node)}
            placeholder="Enter your message..."
          />
          <input
            value="Enter name"
            type="button"
            onClick={this.handleNameSubmit}
          />
        </div>
      </div>
    );
  }
}
