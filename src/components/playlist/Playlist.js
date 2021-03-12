import React, { useState, useEffect } from 'react'
import { spotifyApi } from '../spotify'
import { useLocation } from 'react-router-dom'
import Loader from '../loader/Loader'
import './Playlist.scss'
import Header from './Header'
import Songs from './Songs'

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
    // console.log(playlist.tracks.items[2].track)
    setPlaylist(playlist);
  }

  return (
    <div className="playlist">
      {playlist ?
      <>
        <Header playlist={playlist} />
        <Songs playlist={playlist} />
      </>
      : <Loader />
      }
    </div>
  )
}

export default Playlist