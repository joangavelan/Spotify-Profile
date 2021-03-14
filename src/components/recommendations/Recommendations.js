import React, { useState, useEffect} from 'react'
import { spotifyApi } from '../spotify'
import Heading from '../utilities/Heading';
import { getArtists } from '../helpers'

const Recommendations = ({ playlist }) => {

  const [recommendations, setRecommendations] = useState([]);

  // console.log(playlist)

  const obj = {
    seed_artist: playlist.tracks.items[0].track.artists[0].id,
    seed_genres: playlist.name,
    seed_tracks: playlist.tracks.items[0].track.id,
  }

  // spotifyApi.getAvailableGenreSeeds().then(seeds => console.log(seeds));

  useEffect(() => {
    fetchRecommendations(obj);
  }, [])

  const fetchRecommendations = async (obj) => {
    const recommendations = await spotifyApi.getRecommendations(obj);
    console.log(recommendations)
    setRecommendations(recommendations)
  }

  return (
    <>
      {recommendations.tracks && 
      <div className="playlist__recommended-tracks">
        <Heading playlistName={playlist.name}/>
        {recommendations?.tracks?.map(track => (
          <div 
          key={track.id}
          className="playlist__recommended-track playlist__track grid-row-3">
            <img 
              src={track.album?.images[2]?.url}
              className="playlist__track-thumbnail"/>
            <div>
              <p>{track.name}</p>
              <p>{getArtists(track.artists)}</p>
            </div>
            <p>{track.name}</p>
            <button>Añadir</button>
          </div>
        ))}
      </div>
      }
    </>
  )
}

export default Recommendations  