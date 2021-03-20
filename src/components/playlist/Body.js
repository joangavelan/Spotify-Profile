import React, { useRef, useEffect } from 'react'
import Columns from './Columns'
import PlaylistTracks from './PlaylistTracks'
import '../../sass/_layout.scss'
import Recommendations from '../recommendations/Recommendations'
import Warning from '../utilities/Warning'
import { useGlobalState } from '../Provider'
import { ACTIONS } from '../reducer'

const Body = ({ playlist }) => {

  const [{ selected_track }, dispatch] = useGlobalState();

  const handleAnchorTag = (e) => {
    if(!selected_track.url) e.preventDefault();
  }

  let playlistTracksRef = useRef(null);
  let recommendedTracksRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if((playlistTracksRef.current && recommendedTracksRef.current && !playlistTracksRef.current.contains(event.target) && !recommendedTracksRef.current.contains(event.target) && !event.target.matches('.playlist__playerLink')) || event.target.matches('.delete-icon') || event.target.matches('.playlist__track-add')) {
        dispatch({type: ACTIONS.SET_UNSELECT_TRACK});
      }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [dispatch]);

  return (
    <div className="playlist__body">
      <div className="playlist__body-cover"/>
      {playlist.tracks.items.length > 0 ?
      <>
        <a className="playlist__playerLink" 
           onClick={handleAnchorTag}
           style={{backgroundColor: selected_track.url ? '#1DB954' : '#00a73b'}}
           href={selected_track.url} 
           target="_blank"
           rel="noreferrer">
            Play on spotify
        </a>
        <div className="playlist__tracks">
          <Columns />
          <PlaylistTracks playlist={playlist} playlistTracksRef={playlistTracksRef}/>
        </div>
        <Recommendations playlist={playlist} recommendedTracksRef={recommendedTracksRef}/>
      </>
      : <Warning />}
    </div>
  )
}

export default Body