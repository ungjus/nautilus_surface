import React from "react";
import MessageForm from './MessageForm'
import MessageList from './MessageList'

// git test
export default class Text extends React.Component {
  constructor(props) {
    super(props);
    //this.socket = require('socket.io-client')('http://localhost:4040')
    this.state = {
      messages: [],
    }

    //this.socket.on("Text", this.updateText);
  }

  handleNewMessage = (text) => {
    console.log("got text update: " + text);
    this.setState({
      messages: [...this.state.messages, { me: true, author: "Me", body: text }],
    })
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