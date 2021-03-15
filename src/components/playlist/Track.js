import React from 'react'
import { getArtists, millsToMinAndSec, clockFormat, getDayDiff } from '../helpers'
import { AiOutlineDelete } from 'react-icons/ai'

const Track = ({item, index, clickedTrackIndex, handleTrackClick}) => {
  return (
    <div 
      className={`playlist__track grid-row ${clickedTrackIndex === index ? 'selected' : ''} `} 
      onClick={() => handleTrackClick(index, item.track.external_urls.spotify)}>
      <div>{index+1}</div>
      <div className="playlist__track-title-wrapper">
        <div className="playlist__track-title">
          <img 
            className="playlist__track-thumbnail"
            src={item.track.album?.images[2]?.url} 
            alt={item.track.name}/>
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
      <div><span>{`${getDayDiff(item.added_at)} days ago`}</span></div>
      <div>
        <AiOutlineDelete className="playlist__delete-icon"/>
        <span>{millsToMinAndSec(item.track.duration_ms, clockFormat)}</span>
      </div>
    </div>
  )
}

export default Track