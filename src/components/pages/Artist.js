import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { spotifyApi } from '../spotify'

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
    <div>
      <h1>{artist.name}</h1>
      <img src={artist.images?.[0]?.url} alt={artist.name}/>
      <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">Play on Spotify</a>
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
  )
}

export default Artist