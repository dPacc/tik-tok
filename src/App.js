import "./App.css";
import Video from "./components/video/Video";
import myVideo from "./utils/videos/tiktokvideo_1604132845.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url={myVideo}
          channel="miglanii"
          description="No hate please D:"
          song="Adele - Someone like you"
          likes={100}
          comments={52}
          shares={12}
        />
        <Video
          url={myVideo}
          channel="miglanii"
          description="No hate please D:"
          song="Adele - Someone like you"
          likes={100}
          comments={52}
          shares={12}
        />
      </div>
    </div>
  );
}

export default App;
