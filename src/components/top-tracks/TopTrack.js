import React from 'react'
import Duration from '../track/Duration'
import Name from '../track/Name'
import Numeration from '../track/Numeration'
import Title from '../track/Title'
import '../track/Tracks.scss'
import { handleTrackClick } from '../../utilities'
import { useGlobalState } from '../Provider'

const Track = ({track, index}) => {

  const [{selected_track}, dispatch] = useGlobalState();

  const selectedClass = selected_track.field === 'playlist' && selected_track.index === index ? 'selected' : '';

  const args = {
    preventClass: '.delete-icon', 
    dispatch,
    url: track.external_urls.spotify,
    index,
    field: 'playlist'
  };

  return (
    <div 
      className={`track grid-row col-4 ${selectedClass}`}
      onClick={(e) => handleTrackClick(e, args)}>
      <Numeration 
        index={index}/>
      <Title 
        albumImageUrl={track.album?.images?.[2]?.url}
        trackName={track.name}
        trackArtists={track.artists}/>
      <Name 
        name={track.name}/>
      <Duration 
        uri={track.uri}
        durationMs={track.duration_ms}/>
    </div>
  )
}

export default Track