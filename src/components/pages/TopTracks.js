import React, { useState, useEffect } from 'react'
import Heading from '../heading/Heading'
import Tracks from '../top-tracks/TopTracks'
import './TopTracks.scss'
import Loader from '../loader/Loader'
import { spotifyApi } from '../spotify'
 
const TopTracks = () => {

  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    spotifyApi.getMyTopTracks({limit: 40})
     .then(topTracks => setTopTracks(topTracks));
  }, [])

  return (
    <div className="topTracks">
      <Heading title="Top Tracks"/>
      <Tracks limit={40} grid={4}/>
    </div>
  )
}

export default TopTracks