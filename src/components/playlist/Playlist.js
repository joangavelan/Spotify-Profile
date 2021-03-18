import React, { useState, useEffect } from 'react'
import { spotifyApi } from '../spotify'
import { useLocation } from 'react-router-dom'
import Loader from '../loader/Loader'
import './Playlist.scss'
import Header from './Header'
import Body from './Body'
import { useGlobalState } from '../Provider'

const Playlist = () => {

  const [playlist, setPlaylist] = useState('');
  const [{update}] = useGlobalState();

  const location = useLocation();
  const playlistId = location.playlist_id;

  useEffect(() => {
    setPlaylist('')
    fetchPlaylist(playlistId);
  }, [playlistId])

  useEffect(() => {
    const id = setTimeout(() => {
      fetchPlaylist(playlistId);
    }, 500);
    return () => clearTimeout(id)
  }, [playlistId, update])

  const fetchPlaylist = async (id) => {
    const playlistFetch = await spotifyApi.getPlaylist(id);
    setPlaylist(playlistFetch);
  }

  return (
    <div className="playlist">
      {playlist ?
      <>
        <Header playlist={playlist} />
        <Body playlist={playlist} />
      </>
      : <Loader />
      }
    </div>
  )
}

export default Playlist