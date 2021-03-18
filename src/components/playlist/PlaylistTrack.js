import React, { useCallback } from 'react'
import { getArtists, millsToMinAndSec, clockFormat, getTimeDifference } from '../helpers'
import { AiOutlineDelete } from 'react-icons/ai'
import { useGlobalState } from '../Provider'

const Numeration = ({index}) => <div>{index + 1}</div>;

const Title = ({item, artists}) => {
  return (
    <div className="playlist__track-title-wrapper">
      <div className="playlist__track-title">
        <div className="playlist__track-thumbnail">
          <img 
            src={item.track.album?.images[2]?.url} 
            alt={item.track.name}/>
        </div>
        <div className="playlist__track-brand">
          <p className="playlist__track-name">{item.track.name}</p>
          <p className="playlist__track-artist">{artists}</p>
        </div>
      </div>
    </div>
  );
}

const Album = ({item}) => {
  return (
    <div>
      <span className="playlist__track-album">
        {item.track.album.name}
      </span>
    </div>
  );
}

const Added = ({added}) => {
  return (
    <div>
      <span>{added}</span>
    </div>
  );
}

const LastColumn = ({item, duration, removeTrack}) => {
  return (
    <div>
      <AiOutlineDelete className="playlist__delete-icon" onClick={() => removeTrack(item.track.uri)}/>
      <span>{duration}</span>
    </div>
  );
}

const Track = ({item, index, handleTrackClick, removeTrack}) => {

  const [{selected_track}] = useGlobalState();

  const added = useCallback(getTimeDifference(item.added_at), []);
  const trackDuration = useCallback(millsToMinAndSec(item.track.duration_ms, clockFormat), []);
  const artists = useCallback(getArtists(item.track.artists), []);
  const selectedClass = selected_track.field === 'playlist' && selected_track.index === index ? 'selected' : '';

  return (
    <div 
      className={`playlist__track grid-row ${selectedClass}`} 
      onClick={(e) => handleTrackClick(item.track.external_urls.spotify, index, e)}>
        <Numeration index={index}/>
        <Title item={item} artists={artists}/>
        <Album item={item}/>
        <Added added={added}/>
        <LastColumn item={item} duration={trackDuration} removeTrack={removeTrack}/>
    </div>
  )
}

export default Track