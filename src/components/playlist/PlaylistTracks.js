import React from 'react'
import Track from './PlaylistTrack';
import { spotifyApi }  from '../spotify'
import { ACTIONS } from '../reducer'
import { useGlobalState } from '../Provider'

const PlaylistTracks = ({playlist, playlistTracksRef}) => {
  const [{}, dispatch] = useGlobalState();

  const handlePlaylistTrackClick = (url, index, e) => {
    if(e.target.matches('.playlist__delete-icon')) return;
    dispatch({type: ACTIONS.SET_SELECTED_TRACK_URL, url})
    dispatch({type: ACTIONS.SET_SELECTED_TRACK_INDEX, index})
    dispatch({type: ACTIONS.SET_SELECTED_TRACK_FIELD, field: 'playlist'})
  }

  const removeTrackFromPlaylist = (uri) => {
    const uris = [uri];
    spotifyApi.removeTracksFromPlaylist(playlist.id, uris);
    dispatch({type: ACTIONS.SET_UPDATE})
  }

  return (
    <div className="playlist__tracks-body" ref={playlistTracksRef}>
      {playlist.tracks.items.map((item, index) => ( 
        <Track 
          key={item.track.id}
          item={item}
          index={index}
          handleTrackClick={handlePlaylistTrackClick}
          removeTrack={removeTrackFromPlaylist}/>
      ))}
    </div>
  )
};

export default PlaylistTracks 