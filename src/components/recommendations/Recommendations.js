import React, { useState, useEffect} from 'react'
import { spotifyApi } from '../spotify'
import Heading from '../utilities/Heading';
import { useGlobalState } from '../Provider'
import { ACTIONS } from '../reducer' 
import Track from './RecommendedTrack'

const Recommendations = ({ playlist }) => {

  const [recommendations, setRecommendations] = useState([]);
  const [{}, dispatch] = useGlobalState();

  const items = playlist.tracks.items;
  
  const seeds = {
    seed_tracks: items[0].track.id,
    seed_genres: playlist.name,
    seed_artists: items[0].track.artists[0].id,
    limit: 10
  }

  useEffect(() => {
    fetchRecommendations(seeds);
  }, [])

  const fetchRecommendations = async (obj) => {
    const recommendations = await spotifyApi.getRecommendations(obj);
    // console.log(recommendations)
    setRecommendations(recommendations)
  }

  const addTrackToPlaylist = (uri) => {
    const uris = [uri];
    spotifyApi.addTracksToPlaylist(playlist.id, uris);
    dispatch({type: ACTIONS.SET_UPDATE})
  }

  return (
    <>
      {recommendations.tracks && 
      <div className="playlist__recommended-tracks">
        <Heading playlistName={playlist.name}/>
        {recommendations?.tracks?.map(track => (
          <Track 
            key={track.id} 
            track={track}
            addTrackToPlaylist={addTrackToPlaylist}/>
        ))}
      </div>
      }
    </>
  )
}

export default Recommendations

  // spotifyApi.getAvailableGenreSeeds().then(seeds => console.log(seeds));

  // if(items) {
  //   const max = items.length >= 5 ? 5 : items.length;

  //   for(let i = 0; i < 2 ; i++) {
  //     let trackId = items[i].track.id;
  //     let trackMainArtistId = items[i].track.artists[0].id;
  //     if(trackMainArtistId) seed_artists.push(trackMainArtistId);
  //     if(trackId) seed_tracks.push(trackId);
  //   }
  // }

  // console.log(seed_artists.join(', '))
  // console.log(seed_tracks.join(', '))

  // spotifyApi.addTracksToPlaylist(playlist.id);