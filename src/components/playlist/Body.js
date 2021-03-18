import React, { useRef, useEffect } from 'react'
import Head from './Head'
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
      if(playlistTracksRef.current && recommendedTracksRef.current && !playlistTracksRef.current.contains(event.target) && !recommendedTracksRef.current.contains(event.target) && !event.target.matches('.playlist__playerLink') || event.target.matches('.playlist__delete-icon') || event.target.matches('.playlist__track-add')) {
        dispatch({type: ACTIONS.SET_UNSELECT_TRACK});
      }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [])

  return (
    <div className="playlist__tracksContainer">
      {playlist.tracks.items.length > 0 ?
      <>
        <a className="playlist__playerLink" 
           onClick={handleAnchorTag}
           style={{backgroundColor: selected_track.url ? '#1DB954' : '#00a73b'}}
           href={selected_track.url} 
           target="_blank">
            Play on spotify
        </a>
        <div className="playlist__tracks">
          <Head />
          <PlaylistTracks playlist={playlist} playlistTracksRef={playlistTracksRef}/>
        </div>
        <Recommendations playlist={playlist} recommendedTracksRef={recommendedTracksRef}/>
      </>
      : <Warning />}
    </div>
  )
}

export default Body