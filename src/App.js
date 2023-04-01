import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video.js";
import db from "./config/firebase.js";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videoSnaps = await getDocs(videosCollection);
    const videosList = videoSnaps.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="appVideos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video
          likes={560}
          messages={450}
          shares={380}
          name="Guizer44"
          description="The best of world"
          music="Veigh baby"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        /> */}
      </div>
    </div>
  );
}

export default App;
