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
      <div className='row'>
        <h1 className='display-1'>Music Feed</h1>
        <div style={{padding:'1em'}}>
          <h1 className='nkd'>Nanette</h1>
          <h1 className='nkd'>Kaye</h1>
          <h1 className='nkd'>Dolera</h1>
        </div>
      </div>
      <h3 className='font-italic'>Because music has no language barrier. Music needs no translation.</h3>
      <div className='col-md-2'></div>
      <div className='col-md-7'>
        <CreateSong songData={songs}/>
      <div className='col-md-2'></div>
      <SearchBarTable songPosts={songs}/>
      </div>
    </div>
  );
}
export default App;
