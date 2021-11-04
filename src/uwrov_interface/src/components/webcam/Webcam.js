import React from "react";

export default class Webcam extends React.Component {
  constructor(props) {
    super(props);
    // this.socket = require('socket.io-client')('http://localhost:4040')
    this.state = { //never set the state directly, just use setState. also, setState is asynch 
      text: "Placeholder text"
      //frame
    };

    // this.socket.on("Text", this.updateText);
  }

  updateText = (data) => {
    console.log("got text update: " + data.text);
    this.setState({ text: data.text });
  }

  render() { //things it'll display 
    return (
      <div className="text-box">
        <p className="text">{this.state.text}</p>
      </div>
    );
  }
}