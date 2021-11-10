import React from "react";
import Webcam from "react-webcam";
// https://www.npmjs.com/package/react-webcam

// What I am thinking of doing is primarily using the 
// webcam to capture screenshots and then send each
// screenshot to the interface pretty much continuously. 
// Maybe the screenshots could happen at a certain rate 
// i.e. 30fps and then the publisher/subscriber can 
// also accommodate that (I think with spin()?). 
// I don't really understand how to use these consts
// to actually get the image. I know there is a 
// getScreenshot() method that I used in the class 
// constructor, but I don't know exactly how to transfer
// that data or update the website. 
// I'm not sure how I should write my render method
// to account for this. 

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