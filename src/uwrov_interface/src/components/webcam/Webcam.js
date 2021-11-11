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

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

// const WebcamDisplay = () => {
//   const webcamRef = React.useRef(null);

//   const capture = React.useCallback(
//     () => {
//       const imageSrc = webcamRef.current.getScreenshot();
//     },
//     [webcamRef]
//   );

//   return (
//     <>
//       <Webcam
//         audio={false}
//         height={720}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={1280}
//         videoConstraints={videoConstraints}
//       />
//       <button onClick={capture}>Capture photo</button>
//     </>
//   );
// };
// export default WebcamDisplay;

export default class WebcamDisplay extends React.Component {
  constructor(props) {
    super(props);
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