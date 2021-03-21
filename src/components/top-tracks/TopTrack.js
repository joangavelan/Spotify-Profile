import React from 'react'
import Duration from '../track/Duration'
import Name from '../track/Name'
import Numeration from '../track/Numeration'
import Title from '../track/Title'

const Track = ({track, index}) => {

  return (
    <div className="track grid-row">
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