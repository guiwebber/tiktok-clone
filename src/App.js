import "./App.css";
import Video from "./pages/Video.js";

function App() {
  return (
    <div className="App">
      <div className="appVideos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Guilherme"
          description="Goalkepper"
          music="Veigh baby"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        <Video
          likes={560}
          messages={450}
          shares={380}
          name="Guizer44"
          description="The best of world"
          music="Veigh baby"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  );
}

export default App;
