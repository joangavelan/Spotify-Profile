import React, { useState, useEffect } from 'react'
import { spotifyApi } from '../spotify'
import { useLocation } from 'react-router-dom'
import Loader from '../loader/Loader'
import './Playlist.scss'

const Playlist = () => {

  const [playlist, setPlaylist] = useState('');

  const location = useLocation();
  const playlistId = location.id;

  useEffect(() => {
    
    setPlaylist('')
    fetchPlaylist(playlistId);

  }, [playlistId])

  const fetchPlaylist = async (id) => {
    const playlist = await spotifyApi.getPlaylist(id);
    console.log(playlist)
    setPlaylist(playlist);
  }

  const getPlaylistDuration = (playlistItems) => {
    let total = 0;
    playlistItems.forEach(item => {
      total += item.track.duration_ms;
    });
    return total;
  }

  return (
    <div className="playlist">
      {!playlist ? <Loader /> : 
      <>
        <img src={playlist?.images[1].url}/>
        <h3>Playlist</h3>
        <h2>{playlist.name}</h2>
        <p>
          {playlist.owner.display_name} &#8226; 
          <span> {playlist.tracks.total} songs, </span>
          <span>{getPlaylistDuration(playlist.tracks.items)}</span>
        </p>
        <a href="a">Play on spotify</a>
        <ul>
          {playlist.tracks.items.map(item => ( 
            <li key={item.track.id}>
              <div>
                <p>{item.track.name}</p>
                <span>{item.track.artists[0].name}</span>
              </div>
              <p>{item.track.album.name}</p>
              <p>{item.added_at}</p>
              <p>{item.track.duration_ms}</p>
            </li>
          ))}
        </ul>
      </>
      }
    </div>
  )
}

export default Playlist