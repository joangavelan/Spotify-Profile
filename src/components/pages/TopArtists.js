import React, { useState, useEffect } from 'react'
import { spotifyApi } from '../spotify'
import Artists from '../most-streamed-artists/MostStreamedArtists'
import Loader from '../loader/Loader';

const TopArtists = () => {

  const [topArtists, setTopArtists] = useState('');

  useEffect(() => {
    spotifyApi.getMyTopArtists({limit: 40})
      .then(artists => setTopArtists(artists.items))
  }, [])

  return (
    <>
      {topArtists 
      ? <div className="container">
          <h1 style={{marginBottom: '3rem', textAlign: 'center'}}>Top Artists</h1>
          <Artists artists={topArtists}/>
        </div>
        
      : <Loader />}
    </>
  )
}

export default TopArtists