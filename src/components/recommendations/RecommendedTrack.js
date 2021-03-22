import React from 'react'
import { useGlobalState } from '../Provider'
import Name from '../track/Name'
import AddButton from '../track/AddButton'
import Title from '../track/Title'

const RecommendedTrack = ({track, index, handleTrackClick, handleTrackAdittion}) => {

  const [{ selected_track }] = useGlobalState();

  const selectedClass = selected_track.field === 'recommended' && selected_track.index === index ? 'selected' : '';

  return (
    <div
      className={`track grid-row col-3 ${selectedClass}`}
      onClick={(e) => handleTrackClick(track.external_urls.spotify, index, e)}>
        <Title 
          albumImageUrl={track.album?.images[2]?.url} 
          trackName={track.name}
          trackArtists={track.artists}
          icon={true}
          filter={true}/>
        <Name 
          name={track.name}/>
        <AddButton 
          track={track} 
          handleTrackAdittion={handleTrackAdittion}/>
    </div>
  )
}

export default RecommendedTrack