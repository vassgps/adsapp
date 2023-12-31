import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = ({ options }) => {
  const { src } = options;

  return (
    <div>
      <video
        id="my-video"
        className="video-js"
        autoPlay="true"
        muted
        loop
        style={{ width: "100vw", height: "100vh" }}
      >
        <source src={src[0].src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoJS;
