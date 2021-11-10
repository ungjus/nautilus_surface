import React from "react";
import Webcam from "react-webcam";
// https://www.npmjs.com/package/react-webcam
const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

  return (
    <>
      <Webcam
        audio={true}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default class Webcam extends React.Component {
  constructor(props) {
    super(props);
    this.socket = require('socket.io-client')('http://localhost:4040')
    this.state = { //never set the state directly, just use setState. also, setState is asynch 
      text: "Placeholder text",
      frame: getScreenshot()
    };

    // this.socket.on("Text", this.updateText);
  }

  updateCam = (data) => {
    console.log("got camera update");
    this.setState({ frame: data.frame });
  }

  render() { //things it'll display 
    return (
      <div className="camera-box">
        <p className="camera">{this.state.frame}</p>
      </div>
    );
  }
}