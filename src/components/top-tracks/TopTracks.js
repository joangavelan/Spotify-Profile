import React, { useRef } from 'react'
import Track from './TopTrack'
import { useOutsideHandler } from '../../utilities'
import { useGlobalState } from '../Provider'

const TopTracks = ({topTracks}) => {

  const [{}, dispatch] = useGlobalState();

  const topTracksRef = useRef(null);
  useOutsideHandler(topTracksRef, dispatch, '.play-icon');

  return (
    <div 
      ref={topTracksRef}
      className="tracks"
      style={{marginTop: 0}}>
      {topTracks.map((track, index) => (
        <Track 
          key={track.id} 
          track={track}
          index={index}/>
      ))}
    </div>
  )
}

export default TopTracks