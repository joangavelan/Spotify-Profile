import React, { useRef } from 'react'
import Track from './Track'
import { useOutsideHandler } from '../../../utilities'
import { useGlobalState } from '../../Provider'

const Tracks = ({tracks}) => {

  const [{}, dispatch] = useGlobalState();

  const tracksRef = useRef(null);
  useOutsideHandler(tracksRef, dispatch, '.play-icon');

  return (
    <div 
      ref={tracksRef}
      className="tracks"
      style={{marginTop: 0}}>
      {tracks.map((track, index) => (
        <Track 
          key={Math.random() * 10000} 
          track={track}
          index={index}/>
      ))}
    </div>
  )
}

export default Tracks