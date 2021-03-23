import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiPlayMiniFill } from 'react-icons/ri'
import Tracks from '../top-tracks/TopTracks'
import './TopTracks.scss'
import { useGlobalState } from '../Provider'

const TopTracks = () => {

  const [{selected_track}] = useGlobalState();

  const handlePlayClick = (e) => {
    if(!selected_track.url) e.preventDefault();
  }

  return (
    <div className="topTracks">
      <div className="topTracks-heading">
        <div>
          <a 
            onClick={handlePlayClick} 
            href={selected_track.url}
            target="_blank"
            rel="noreferrer">
              <RiPlayMiniFill className="play-icon"/>
          </a>
          <h1>Top Tracks</h1>
        </div>
        <AiOutlineClockCircle className="clock-icon"/>
      </div>
      <Tracks limit={40}/>
    </div>
  )
}

export default TopTracks