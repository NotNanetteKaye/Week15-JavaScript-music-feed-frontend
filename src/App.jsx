import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateSong from "./components/CreateSong";
import SearchBarTable from "./components/SearchBar";
import './App.css';

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
    <div className='container-fluid'>
      <br></br>
      <h1 className='music-feed'>Nanette's Music Feed!</h1>
      <h6 className='quote'><em>"Because music has no language barrier. Music needs no translation."</em></h6>
      <div className='row'>
          <div className='col-md-4'>
            <div className='border-box'>
                <CreateSong songData={songs}/>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='border-box'>
              <SearchBarTable songPosts={songs}/>
            </div>
          </div>
      </div>
    </div>
  );
}
export default App;
