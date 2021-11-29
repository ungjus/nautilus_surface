import React from "react";

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.socket = require("socket.io-client")("http://localhost:4040");
    this.state = {
      frames: [],
    };
  }

  render() {
    return <></>;
  }
}
