import React from "react";
import MessageForm from './MessageForm'
import MessageList from './MessageList'

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.socket = require('socket.io-client')('http://localhost:4040')
    this.state = {
      messages: [],
    }

    // Listener for retrieving messages from server
    this.socket.on("Get all Msgs", (messages) => {
      this.updateMessages(messages);
    })

    // Send out a one-time request to retrieve all messages from server upon start
    this.socket.emit("Request Msgs");

  }

  // TODO: Create a "connecting..."" server log message when socket turns on

  // Updates to current server's messages
  updateMessages = (messages) => {
    this.setState({
      messages: messages,
    });
  }
  
  // Displays newly typed message and sends to server
  handleNewMessage = (author, text) => {
    this.setState({
      messages: [...this.state.messages, { author: author, body: text }],
    });
    this.socket.emit("Post Msg", { author: author, body: text });
  }

  render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    );
  }
}