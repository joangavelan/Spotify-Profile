import React from 'react'
import { getPlaylistDuration } from '../helpers'
import { millsToMinAndSec } from '../helpers'
import { minSecFormat } from '../helpers'
import { RiMusicLine } from 'react-icons/ri'

const Header = ({playlist}) => {

  console.log(playlist)
  const playlistDurationInMills = getPlaylistDuration(playlist.tracks.items);
  const playlistDuration = millsToMinAndSec(playlistDurationInMills, minSecFormat);

  return (
    <header className="playlist__header">
      <div className="playlist__thumbnail">
        {playlist.images.length > 0 
        ? <img src={playlist?.images[0]?.url} alt={playlist.name}/>
        : <RiMusicLine className="music-icon"/>}
      </div>
      <div className="playlist__details">
        <h3>Playlist</h3>
        <h2>{playlist.name}</h2>
        <p>
          {playlist.owner.display_name}
          {playlist.tracks.total > 0 &&
          <>
            <span>  &#8226; {playlist.tracks.total} songs, </span>
            <span>{playlistDuration}</span>
          </>
          } 
        </p>
      </div>
    </header>
  )
}

export default Header