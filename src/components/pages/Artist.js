import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Loader from '../loader/Loader';
import { spotifyApi } from '../spotify'
import Player from '../player-button/PlayButton'

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

  return (
    <>
      {artist
        ? <div>
            <h1>{artist.name}</h1>
            <img src={artist.images?.[0]?.url} alt={artist.name}/>
            <Player url={artist.external_urls.spotify}/>
            <div>
              <h3>Genres</h3>
              <ul>
                {artist.genres.map(genre => <li>{genre}</li>)}
              </ul>
            </div>
            <div>
              <h3>Popularity:</h3>
              <span>{artist.popularity}</span>
            </div>
            <div>
              <h3>Followers:</h3>
              <span>{artist.followers.total}</span>
            </div>
          </div>
        : <Loader />}
    </>
    
  )
}

export default Artist