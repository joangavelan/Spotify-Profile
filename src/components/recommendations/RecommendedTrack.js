import React from 'react'
import { getArtists } from '../helpers'

const RecommendedTrack = ({track, addTrackToPlaylist}) => {
  return (
    <div className="playlist__track grid-row col-3">
      <div className="playlist__track-title">
        <img 
          src={track.album?.images[2]?.url}
          className="playlist__track-thumbnail"/>
        <div className="playlist__track-brand">
          <p className="playlist__track-name">{track.name}</p>
          <p className="playlist__track-artist">{getArtists(track.artists)}</p>
        </div>
      </div>
      <div><p className="playlist__track-album">{track.name}</p></div>
      <div><button onClick={() => addTrackToPlaylist(track.uri)} className="playlist__track-add">Add</button></div>
    </div>
  )
}

export default RecommendedTrack