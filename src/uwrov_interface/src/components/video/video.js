import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.socket = require('socket.io-client')('http://localhost:4040')
    this.state = {
      frames: [],
    }
    this.webcamRef = React.createRef();    
  }

  capture = () => {
    const imageSrc = this.webcamRef.current.getScreenshot()
  }
  
  
  
  render() {
    return (
      <>
        <Webcam
          audio={false}
          height={720}
          ref={this.webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </>
    );
  }
}