import React from 'react'
import { getArtists, millsToMinAndSec, clockFormat, getTimeDifference } from '../helpers'
import { AiOutlineDelete } from 'react-icons/ai'
import { useGlobalState } from '../Provider'

const Track = ({item, index, handleTrackClick, removeTrack}) => {

  const [{selected_track}] = useGlobalState();
  const added = getTimeDifference(item.added_at);

  return (
    <div 
      className={`playlist__track grid-row ${selected_track.field === 'playlist' && selected_track.index === index ? 'selected' : ''} `} 
      onClick={(e) => handleTrackClick(item.track.external_urls.spotify, index, e)}>
      <div>{index+1}</div>
      <div className="playlist__track-title-wrapper">
        <div className="playlist__track-title">
          <div className="playlist__track-thumbnail">
            <img 
              src={item.track.album?.images[2]?.url} 
              alt={item.track.name}/>
          </div>
          <div className="playlist__track-brand">
            <p className="playlist__track-name">
            {item.track.name}
            </p>
            <p className="playlist__track-artist">
            {getArtists(item.track.artists)}
            </p>
          </div>
        </div>
      </div>
      <div><span className="playlist__track-album">{item.track.album.name}</span></div>
      <div><span>{added}</span></div>
      <div>
        <AiOutlineDelete 
          className="playlist__delete-icon" 
          onClick={() => removeTrack(item.track.uri)}/>
        <span>{millsToMinAndSec(item.track.duration_ms, clockFormat)}</span>
      </div>
    </div>
  )
}

export default Track