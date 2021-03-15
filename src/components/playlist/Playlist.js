import React, { useState, useEffect } from 'react'
import { spotifyApi } from '../spotify'
import { useLocation } from 'react-router-dom'
import Loader from '../loader/Loader'
import './Playlist.scss'
import Header from './Header'
import Tracks from './Tracks'
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
    console.log(update)
    const id = setTimeout(() => {
      fetchPlaylist(playlistId);
    }, 500);
    return () => clearTimeout(id)
  }, [update])

  const fetchPlaylist = async (id) => {
    const playlistFetch = await spotifyApi.getPlaylist(id);
    // const last = playlistFetch?.tracks?.items.length - 1;
    // console.log(playlistFetch?.tracks?.items[last].track.name);
    // console.log(playlistFetch.tracks.items[2])
    setPlaylist(playlistFetch);
  }

  return (
    <div className="playlist">
      {playlist ?
      <>
        <Header playlist={playlist} />
        <Tracks playlist={playlist} />
      </>
      : <Loader />
      }
    </div>
  )
}

export default Playlist