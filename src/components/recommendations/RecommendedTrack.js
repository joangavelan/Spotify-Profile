import React from 'react'
import { useGlobalState } from '../Provider'
import Name from '../track/Name'
import AddButton from '../track/AddButton'
import Title from '../track/Title'
import { handleTrackClick } from '../../utilities/'

const RecommendedTrack = ({track, index, handleTrackAdittion}) => {

  const [{selected_track}, dispatch] = useGlobalState();

  const selectedClass = selected_track.field === 'recommended' && selected_track.index === index ? 'selected' : '';

  const args = {
    preventClass: '.track-add', 
    dispatch,
    url: track.external_urls.spotify,
    index,
    field: 'recommended'
  };

  return (
    <div
      className={`track grid-row col-3 ${selectedClass}`}
      onClick={(e) => handleTrackClick(e, args)}>
        <Title 
          albumImageUrl={track.album?.images[2]?.url} 
          trackName={track.name}
          trackArtists={track.artists}
          icon={true}
          filter={true}/>
        <Name 
          name={track.name}/>
        <AddButton 
          id={track.id}
          uri={track.uri} 
          handleTrackAdittion={handleTrackAdittion}/>
    </div>
  )
}

export default RecommendedTrack