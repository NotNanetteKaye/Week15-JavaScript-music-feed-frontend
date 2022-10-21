import { useState } from "react";

const SearchBarTable = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
        <h5><em>Search through my songs here:</em></h5>
      <br></br>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <table className='table table-hover'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
                <th>Likes</th>
            </tr>
        </thead>
        <tbody>
            {props.songPosts.filter((val) => {
                if (searchTerm === '') {
                    return val
                } else if (val.album.toLowerCase().includes(searchTerm.toLowerCase()) || val.artist.toLowerCase().includes(searchTerm.toLowerCase()) || val.genre.toLowerCase().includes(searchTerm.toLowerCase()) || val.release_date.toLowerCase().includes(searchTerm.toLowerCase()) || val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((song, index) => {
                return (
                    <tr key={index}>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <td>{song.likes}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </div>
  );
};

export default SearchBarTable;

