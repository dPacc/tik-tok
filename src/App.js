import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/video/Video";
import axios from "./api/api";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, shares, comments, song, likes }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
