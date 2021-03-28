import React, { useState, useEffect } from 'react'
import Heading from '../heading/Heading'
import Tracks from '../track/four-col/Tracks'
import Loader from '../loader/Loader'
import { spotifyApi } from '../spotify'
import Warning from '../warning/Warning'

const Recent = () => {

  const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState('');

  useEffect(() => {
    spotifyApi.getMyRecentlyPlayedTracks({limit: 50})
     .then(data => setRecentlyPlayedTracks(data));
  }, [])

  const tracks = [];

  if(recentlyPlayedTracks) {
    recentlyPlayedTracks.items.map(item => tracks.push(item.track));
  }

  return (
    <>
      {recentlyPlayedTracks ? 
          tracks.length > 0 ? 
              <div className="container">
                <Heading title="Recently Played Tracks"/>
                <Tracks tracks={tracks}/>
              </div>
            : <Warning message="No tracks listened"/>    
        : <Loader />
      }
    </>
  )
}

export default Recent