import React from "react";
import "./Video.css";
import myVideo from "../../utils/videos/tiktokvideo_1604132845.mp4";

export default function Video() {
  return (
    <div className="video">
      <video loop className="video__player" src={myVideo}></video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}
