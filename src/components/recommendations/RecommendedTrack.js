import React, { useCallback } from 'react'
import { getArtists } from '../helpers'
import { RiPlayMiniFill } from 'react-icons/ri'
import { useGlobalState } from '../Provider'

const Title = ({track, artists}) => {
  return (
    <div className="playlist__track-title">
      <div className="playlist__track-thumbnail">
        <img 
          className="r-thumbnail" 
          src={track.album?.images[2]?.url}/>
        <RiPlayMiniFill />
      </div>
      <div className="playlist__track-brand">
        <p className="playlist__track-name">{track.name}</p>
        <p className="playlist__track-artist">{artists}</p>
      </div>
    </div>
  );
}

const Name = ({track}) => {
  return (
    <div>
      <p className="playlist__track-album">
        {track.name}
      </p>
    </div>
  );
}

const AddButton = ({track, handleTrackAdittion}) => {
  return (
    <div>
      <button 
        className="playlist__track-add"
        onClick={() => handleTrackAdittion(track.uri, track.id)}>
          Add
      </button>
    </div>
  );
}

const RecommendedTrack = ({track, index, handleTrackClick, handleTrackAdittion}) => {

  const [{ selected_track }] = useGlobalState();

  const artists = useCallback(getArtists(track.artists), []);
  const selectedClass = selected_track.field === 'recommended' && selected_track.index === index ? 'selected' : '';

  return (
    <div
      className={`playlist__track grid-row col-3 ${selectedClass}`}
      onClick={(e) => handleTrackClick(track.external_urls.spotify, index, e)}>
        <Title track={track} artists={artists}/>
        <Name track={track}/>
        <AddButton track={track} handleTrackAdittion={handleTrackAdittion}/>
    </div>
  )
}

export default RecommendedTrack