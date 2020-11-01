import React, { useRef, useState } from "react";
import "./Video.css";
import myVideo from "../../utils/videos/tiktokvideo_1604132845.mp4";

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // If video is playing, stop ut
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
    // If video is stopped, play it
    else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        className="video__player"
        src={myVideo}
      ></video>

      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}
