import React, { useRef, useEffect } from 'react'
import Track from './Track';
import { spotifyApi }  from '../spotify'
import { ACTIONS } from '../reducer'
import { useGlobalState } from '../Provider'

const Body = ({playlist, handleTrackClick, clickedTrackIndex, setClickedTrackIndex, setClickedTrackUrl}) => {

  const [{}, dispatch] = useGlobalState();

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if(ref.current && !ref.current.contains(event.target) && !event.target.matches('.playlist__playerLink')) {
          setClickedTrackIndex(false);
          setClickedTrackUrl('');
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const playlistTracksRef = useRef();
  useOutsideAlerter(playlistTracksRef);

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
          clickedTrackIndex={clickedTrackIndex}
          handleTrackClick={handleTrackClick}
          removeTrack={removeTrackFromPlaylist}/>
      ))}
    </div>
  )
}

export default Body