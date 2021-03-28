import React, { useState, useEffect } from 'react'
import { spotifyApi } from '../spotify'
import Card from '../card/Card'
import Loader from '../loader/Loader';
import Warning from '../warning/Warning'

const TopArtists = () => {

  const [topArtists, setTopArtists] = useState('');

  useEffect(() => {
    spotifyApi.getMyTopArtists({limit: 40})
      .then(artists => setTopArtists(artists))
  }, [])

  return (
    <>
      {topArtists
        ? topArtists?.items.length > 0 ?
            <div className="container">
              <h1 style={{marginBottom: '3rem', textAlign: 'center'}}>Top Artists</h1>
              <div className="re-grid-row auto">
                {topArtists.items.map(artist => (
                  <Card
                    key={artist.id}
                    to={{pathname: (`artists/${artist.name}`), artist_id: artist.id}} 
                    imgUrl={artist?.images?.[0]?.url}
                    name={artist.name} 
                    description={artist.type}
                    radius={true}/>
                ))}
              </div>
            </div> 
          : <Warning message="You haven't listen to any artist yet"/>
      : <Loader />}
    </>
  )
}

export default TopArtists