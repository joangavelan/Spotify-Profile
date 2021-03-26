import React, { useState, useEffect } from 'react'
import Heading from '../heading/Heading'
import Tracks from '../top-tracks/TopTracks'
import Loader from '../loader/Loader'
import { spotifyApi } from '../spotify'
 
const TopTracks = () => {

  const [topTracks, setTopTracks] = useState('');

  useEffect(() => {
    spotifyApi.getMyTopTracks({limit: 40})
     .then(topTracks => setTopTracks(topTracks.items));
  }, [])

  return (
    <>
      {topTracks 
        ? 
          <div className="container">
            <Heading title="Top Tracks"/>
            <Tracks topTracks={topTracks}/>
          </div>
        : <Loader />     
      }
    </>
  )
}

export default TopTracks