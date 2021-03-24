import React from 'react'
import './Heading.scss'
import { RiPlayMiniFill } from 'react-icons/ri'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useGlobalState } from '../Provider'

const Heading = ({title}) => {

  const [{selected_track}] = useGlobalState();

  const handlePlayClick = (e) => {
    if(!selected_track.url) e.preventDefault();
  }

  return (
    <div className="heading">
      <div>
        <a 
          onClick={handlePlayClick} 
          href={selected_track.url}
          target="_blank"
          rel="noreferrer">
            <RiPlayMiniFill className="play-icon"/>
        </a>
        <h1>{title}</h1>
      </div>
      <AiOutlineClockCircle className="clock-icon"/>
    </div>
  )
}

export default Heading