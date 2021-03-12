import React from 'react'
import { getPlaylistDuration } from '../helpers'
import { millsToMinAndSec } from '../helpers'
import { minSecFormat } from '../helpers'

const Header = ({playlist}) => {

  const playlistDurationInMills = getPlaylistDuration(playlist.tracks.items);
  const playlistDuration = millsToMinAndSec(playlistDurationInMills, minSecFormat);

  return (
    <header className="playlist__header">
      <img className="playlist__thumbnail" src={playlist?.images[0].url} alt={playlist.name}/>
      <div className="playlist__details">
        <h3>Playlist</h3>
        <h2>{playlist.name}</h2>
        <p>
          {playlist.owner.display_name} &#8226; 
          <span> {playlist.tracks.total} songs, </span>
          <span>{playlistDuration}</span>
        </p>
      </div>
    </header>
  )
}

export default Header