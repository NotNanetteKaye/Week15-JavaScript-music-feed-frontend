import React from 'react';

const SongTable = (props) => {

    async function deleteOps(id) {
        let result = await fetch('http://127.0.0.1:8000/api/music/delete/'+id, {method: 'DELETE'});
        result = await result.json()
    }

    return (
        <div className='container'>
            <table className="table table-sm">
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
                    {props.songPosts.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                <td>{song.likes}</td>
                                <td><span onClick={()=>deleteOps(song.id)} className="delete">Delete</span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongTable