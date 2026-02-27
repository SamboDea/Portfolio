import React, { useRef } from "react";
import thunderVideo from "../assets/video/thunders.mp4";

function ThunderVideoController() {
  const videoRef = useRef(null);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={thunderVideo}
        autoPlay
        loop
        muted
        className="thunder-video"
      />
    </div>
  );
}

export default ThunderVideoController;
