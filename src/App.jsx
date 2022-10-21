import React, { useState, useEffect } from "react";
import axios from "axios";
import SongTable from "./components/SongTable";
import CreateSong from "./components/CreateSong";
import SearchBar from "./components/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);


  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  return (
    <div>
      <SearchBar songPosts={songs}/>
      <CreateSong/>
    </div>
  );
}
export default App;
