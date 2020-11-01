import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "../videoFooter/VideoFooter";
import VideoSidebar from "../videoSidebar/VideoSidebar";

export default function Video({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  comments,
}) {
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
        src={url}
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />

      <VideoSidebar likes={likes} shares={shares} comments={comments} />
    </div>
  );
}
