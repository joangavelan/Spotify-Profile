import React from 'react'
import Numeration from '../track/Numeration'
import Title from '../track/Title'
import Album from '../track/Album'
import Added from '../track/Added'
import Duration from '../track/Duration'
import { handleTrackClick } from '../../utilities/'
import { spotifyApi }  from '../spotify'
import { ACTIONS } from '../reducer'
import { useGlobalState } from '../Provider'

const Track = ({item, index, playlistId}) => {

  const [{selected_track}, dispatch] = useGlobalState();

  const removeTrackFromPlaylist = (uri) => {
    const uris = [uri];
    spotifyApi.removeTracksFromPlaylist(playlistId, uris);
    dispatch({type: ACTIONS.SET_UPDATE});
    dispatch({type: ACTIONS.SET_UNSELECT_TRACK});
  }

  const selectedClass = selected_track.field === 'playlist' && selected_track.index === index ? 'selected' : '';
  
  const args = {
    preventClass: '.delete-icon', 
    dispatch,
    url: item.track.external_urls.spotify,
    index,
    field: 'playlist'
  };
  
  return (
    <div 
      className={`track grid-row ${selectedClass}`} 
      onClick={(e) => handleTrackClick(e, args)}>
        <Numeration index={index}/>
        <Title 
          albumImageUrl={item.track.album?.images?.[2]?.url} 
          trackName={item.track.name}
          trackArtists={item.track.artists}/>
        <Album name={item.track.album.name}/>
        <Added addedAt={item.added_at}/>
        <Duration 
          uri={item.track.uri}
          durationMs={item.track.duration_ms} 
          removeTrack={removeTrackFromPlaylist}
          deleteIcon={true}/>
    </div>
  )
}

export default Track