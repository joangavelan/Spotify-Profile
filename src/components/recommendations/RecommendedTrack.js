import React, { useCallback } from 'react'
import { getArtists } from '../helpers'
import { RiPlayMiniFill } from 'react-icons/ri'
import { useGlobalState } from '../Provider'

const RecommendedTrack = ({track, index, handleTrackClick, addTrackToPlaylist}) => {

  const [{ selected_track }] = useGlobalState();

  const artists = useCallback(getArtists(track.artists), []);

  return (
    <div
    className={`playlist__track grid-row col-3 ${selected_track.field === 'recommended' && selected_track.index === index ? 'selected' : ''}`}
    onClick={() => handleTrackClick(track.external_urls.spotify, index)}>
      <div className="playlist__track-title">
        <div className="playlist__track-thumbnail">
          <img className="r-thumbnail" src={track.album?.images[2]?.url}/>
          <RiPlayMiniFill />
        </div>
        <div className="playlist__track-brand">
          <p className="playlist__track-name">{track.name}</p>
          <p className="playlist__track-artist">{artists}</p>
        </div>
      </div>
      <div><p className="playlist__track-album">{track.name}</p></div>
      <div>
        <button 
        className="playlist__track-add"
        onClick={() => addTrackToPlaylist(track.uri)}>
          Add
        </button>
      </div>
    </div>
  )
}

export default RecommendedTrack