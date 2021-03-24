import React from 'react'
import Heading from '../heading/Heading'
import Tracks from '../top-tracks/TopTracks'
import './TopTracks.scss'

const TopTracks = () => {
  return (
    <div className="topTracks">
      <Heading title="Top Tracks"/>
      <Tracks limit={40}/>
    </div>
  )
}

export default TopTracks