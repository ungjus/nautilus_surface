import React from "react";

import Settings from "../components/settings/Settings.js";
import Controller from "../components/controller/Controller.js";
import RosCamera from "../components/rosCamera/RosCamera.js";
import IpCamera from "../components/ipCamera/IpCamera.js";
import ScriptRunner from "../components/scriptRunner/ScriptRunner.js";
import Text from "../components/text/text.js";
import Video from "../components/video/video.js";

import Xbox from "../components/xbox/Xbox.js";

export let getWidgetComponent = (data) => {
  switch (data.type) {
    case "video":
      return <Video props={data.savedProps} />;
    case "text":
      return <Text props={data.savedProps} />;
    case "video":
      return <Video props={data.savedProps} />;
    case "settings":
      return <Settings props={data.savedProps} />;
    case "ros_camera":
      return <RosCamera props={data.savedProps} />;
    case "ip_camera":
      return <IpCamera props={data.savedProps} />;
    case "controller":
      return <Xbox props={data.savedProps} />;
    case "key_controller":
      return <Controller props={data.savedProps}/>;
    case "script_runner":
      return <ScriptRunner props={data.savedProps}/>;
  }
};

export default null;
