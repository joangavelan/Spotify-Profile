import React, { useState, useEffect } from 'react'
import { spotifyApi } from '../spotify'
import SubHeading from '../sub-heading/SubHeading'
import { useGlobalState } from '../Provider'
import { ACTIONS } from '../reducer' 
import Track from './RecommendedTrack'

const Recommendations = ({ playlist, recommendedTracksRef}) => {

  const [tracks, setTracks] = useState([]);
  const [{}, dispatch] = useGlobalState();

  const playlistTrackItems = playlist.tracks.items;

  const fetchRecommendations = async (limit) => {
    const seeds = {
      seed_tracks: playlistTrackItems[0].track.id,
      seed_genres: playlist.name,
      seed_artists: playlistTrackItems[0].track.artists[0].id,
      limit
    }
    const recommendations = await spotifyApi.getRecommendations(seeds);
    const tracks = recommendations.tracks;
    return tracks;
  }

  useEffect( () => {
    fetchRecommendations(10)
      .then(tracks => {
        setTracks(tracks);
      });
  }, [])

  const addTrackToPlaylist = (uri) => {
    const uris = [uri];
    spotifyApi.addTracksToPlaylist(playlist.id, uris);
    dispatch({type: ACTIONS.SET_UPDATE});
  }

  const removeAddedTrack = (id) => {
    setTracks(tracks.filter(track => track.id !== id));
  }

  const addNewTrackToRecommendations = async () => {
    const recommendation = await fetchRecommendations(1);
    const newRecommendedTrack = recommendation[0];
    setTracks(tracks => [...tracks, newRecommendedTrack]);
  } 

  const handleTrackAddition = (uri, id) => {
    addTrackToPlaylist(uri);
    removeAddedTrack(id);
    addNewTrackToRecommendations();
  }

  return (
    <>
      {tracks && 
      <div className="playlist__recommendations">
        <SubHeading
          title="Recomendations"
          description={`Recommended tracks based on ${playlist.name}`}/>
        <div className="playlist__recommended-tracks" ref={recommendedTracksRef}>
          {tracks.map((track, index) => (
            <Track 
              key={track.id} 
              track={track}
              index={index}
              handleTrackAdittion={handleTrackAddition}/>
          ))}
        </div>
      </div>
      }
    </>
  )
}

export default Recommendations