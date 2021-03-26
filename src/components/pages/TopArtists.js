import React, { useState, useEffect } from 'react'
import { spotifyApi } from '../spotify'
import Card from '../card/Card'
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
          <div className="re-grid-row auto">
            {topArtists.map(artist => (
              <Card
                key={artist.id}
                itemUrl={artist.external_urls.spotify}  
                imgUrl={artist?.images?.[0]?.url}
                name={artist.name} 
                description={artist.type}
                radius={true}/>
            ))}
          </div>
        </div>
        
      : <Loader />}
    </>
  )
}

export default TopArtists