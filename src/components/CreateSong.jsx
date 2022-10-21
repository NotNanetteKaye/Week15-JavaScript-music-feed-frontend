import React, { useState } from 'react';
import axios from 'axios';
const url = "http://127.0.0.1:8000/api/music/";


const CreateSong = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [releaseDate, setReleaseDate] = useState();
  const [genre, setGenre] = useState("");
  const [likes, setLikes] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: releaseDate,
      genre: genre,
      likes: likes,
    };
    try {
      const response = await axios.post(url, newSong);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="form-group row">
        <label>Title</label>
        <input
          type="string"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Artists</label>
        <input
          type="string"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
        <label>Album</label>
        <input
          type="string"
          value={album}
          onChange={(event) => setAlbum(event.target.value)}
        />
        <label>Release Date</label>
        <input
          type="date"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
        <label>Genre</label>
        <input
          type="string"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
        <label>Likes</label>
        <input
          type="number"
          step="1"
          value={likes}
          onChange={(event) => setLikes(event.target.value)}
        />
      </div>
      <button>Create New Song</button>
    </form>
  );
};

export default CreateSong;

// async function createSong(newSong) {
//   let response = await axios.post("http://127.0.0.1:8000/api/music/", newSong);
//   if (response.status===204) {
//     console.log('successfully created a new song')
//   }
//   if (response.status===201){
//     await getAllSongs();
//   }
// }
