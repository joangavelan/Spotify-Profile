import React, { useState, useEffect } from 'react'
import Heading from '../heading/Heading'
import Tracks from '../track/four-col/Tracks'
import Loader from '../loader/Loader'
import { spotifyApi } from '../spotify'
 
const TopTracks = () => {

  const [topTracks, setTopTracks] = useState('');

  useEffect(() => {
    spotifyApi.getMyTopTracks({limit: 50})
     .then(topTracks => setTopTracks(topTracks.items));
  }, [])

  return (
    <>
      {topTracks 
        ? 
          <div className="container">
            <Heading title="Top Tracks"/>
            <Tracks tracks={topTracks}/>
          </div>
        : <Loader />     
      }
    </>
  )
}

export default TopTracks