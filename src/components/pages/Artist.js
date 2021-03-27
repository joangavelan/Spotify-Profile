import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Loader from '../loader/Loader';
import { spotifyApi } from '../spotify'
import Player from '../player-button/PlayButton'
import './Artist.scss' 

const Artist = () => {

  const [artist, setArtist] = useState('');

  const location = useLocation();
  const artistId = location.artist_id;

  useEffect(() => {
    spotifyApi.getArtist(artistId)
      .then(artist => {
        setArtist(artist)
      })
  }, [artistId])

  const genres = [];
  
  if(artist) {
    artist.genres.map(genre => genres.push(genre));
  }

  return (
    <>
      {artist
        ? <div className="artist">
            <div className="artist__header">
              <h1 className="artist__name">{artist.name}</h1>
              <img 
                className="artist__thumbnail" 
                src={artist.images?.[0]?.url} 
                alt={artist.name}/>
            </div>
            <div className="artist__stats">
              <div className="artist__genres">
                <h3>Genres</h3>
                <p>{genres.join(', ')}</p>
              </div>
              <div className="artist__followers">
                <h3>Followers</h3>
                <p>{artist.followers.total}</p>
              </div>
              <div className="artist__popularity">
                <h3>Popularity</h3>
                <p>{artist.popularity}%</p>
              </div>
            </div>
            <Player url={artist.external_urls.spotify}/>
          </div>
        : <Loader />}
    </>
    
  )
}

export default Artist