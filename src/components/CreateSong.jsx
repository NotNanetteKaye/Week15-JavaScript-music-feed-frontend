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
    <div>
      <h5><em>Add a new song to the table:</em></h5>
      <br></br>
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
        <br></br>
        <button>Create New Song</button>
      </form>
      </div>
  );
};

export default CreateSong;

// const CreateSong = (props) => {
//   const [addSongData, setAddSongData] = useState({
//     title:'',
//     artist: '',
//     album:'',
//     releaseDate: '2022-10-10',
//     genre: '',
//     likes: 1,
//   })

//   const handleFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute('name');
//     const fieldValue = event.target.value;

//     const newSongData = {...addSongData};
//     newSongData[fieldName] = fieldValue;

//     setAddSongData(newSongData)
//     };

//     const handleFormSubmit = async (event) => {
//       event.preventDefault();
//       let newSong = {
//         id: nanoid(),
//         title: addSongData.title,
//         artist: addSongData.artist,
//         album: addSongData.album,
//         release_date: addSongData.releaseDate,
//         genre: addSongData.genre,
//         likes: addSongData.likes,
//       };
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
//         console.log(response.data);
//       } catch (error) {
//         console.log(error.response);
//       }
//     }

//   return (
//     <form onChange={handleFormSubmit} className="form-grid">
//       <div className="form-group row">
//         <label>Title</label>
//         <input
//           type="string"
//           name='title'
//           onChange={handleFormChange}
//         />
//         <label>Artists</label>
//         <input
//           type="string"
//           name='artist'
//           onChange={handleFormChange}
//         />
//         <label>Album</label>
//         <input
//           type="string"
//           name="album"
//           onChange={handleFormChange}
//         />
//         <label>Release Date</label>
//         <input
//           type="date"
//           name="date"
//           onChange={handleFormChange}
//         />
//         <label>Genre</label>
//         <input
//           type="string"
//           name="genre"
//           onChange={handleFormChange}
//         />
//         <label>Likes</label>
//         <input
//           type="number"
//           step="1"
//           name="likes"
//           onChange={handleFormChange}
//         />
//       </div>
//       <button type='submit'>Create New Song</button>
//     </form>
//   );
// };

