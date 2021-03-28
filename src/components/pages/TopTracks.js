import React, { useState, useEffect } from 'react'
import Heading from '../heading/Heading'
import Tracks from '../track/four-col/Tracks'
import Loader from '../loader/Loader'
import { spotifyApi } from '../spotify'
import Warning from '../warning/Warning'
 
const TopTracks = () => {

  const [topTracks, setTopTracks] = useState('');

  useEffect(() => {
    spotifyApi.getMyTopTracks({limit: 50})
     .then(topTracks => setTopTracks(topTracks));
  }, [])

  return (
    <>
      {topTracks ? 
        topTracks?.items.length > 0 
        ? <div className="container">
            <Heading title="Top Tracks"/>
            <Tracks tracks={topTracks.items}/>
          </div>
        : <Warning message="No tracks listened"/>     

      : <Loader />
      }
    </>
  )
}

export default TopTracks