import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongTable from './components/SongTable';
import CreateSong from './components/CreateSong';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  });

  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  }


  return (
    <div>
      <SongTable songPosts={songs}/>
      <CreateSong/>
    </div>
  )
}
export default App;
