import React, { useCallback } from 'react'
import { getArtists, getTimeDifference } from '../helpers'
import { useGlobalState } from '../Provider'
import Numeration from '../track/Numeration'
import Title from '../track/Title'
import Album from '../track/Album'
import Added from '../track/Added'
import Duration from '../track/Duration'

const Track = ({item, index, handleTrackClick, removeTrack}) => {

  const [{selected_track}] = useGlobalState();

  const added = useCallback(getTimeDifference(item.added_at), []);
  const selectedClass = selected_track.field === 'playlist' && selected_track.index === index ? 'selected' : '';  

  console.log(item)

  return (
    <div 
      className={`playlist__track grid-row ${selectedClass}`} 
      onClick={(e) => handleTrackClick(item.track.external_urls.spotify, index, e)}>
        <Numeration index={index}/>
        <Title 
          albumImageUrl={item.track.album?.images?.[2]?.url} 
          trackName={item.track.name}
          trackArtists={item.track.artists}/>
        <Album name={item.track.album.name}/>
        <Added added={added}/>
        <Duration 
          uri={item.track.uri}
          durationMs={item.track.duration_ms} 
          removeTrack={removeTrack}
          deleteIcon={true}/>
    </div>
  )
}

export default Track