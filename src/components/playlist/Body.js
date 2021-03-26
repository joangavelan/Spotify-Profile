import React, { useRef, useEffect } from 'react'
import Columns from './Columns'
import PlaylistTracks from './PlaylistTracks'
import Player from './Player'
import '../../sass/_layout.scss'
import Recommendations from '../recommendations/Recommendations'
import Warning from '../warning/Warning'
import { useGlobalState } from '../Provider'
import { ACTIONS } from '../reducer'

const Body = ({ playlist }) => {

  const [{ selected_track }, dispatch] = useGlobalState();

  let playlistTracksRef = useRef(null);
  let recommendedTracksRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if((playlistTracksRef.current && recommendedTracksRef.current && !playlistTracksRef.current.contains(event.target) && !recommendedTracksRef.current.contains(event.target) && !event.target.matches('.playlist__player')) || event.target.matches('.delete-icon') || event.target.matches('.playlist__track-add')) {
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
        <Player url={selected_track.url}/>
        <div className="playlist__tracks">
          <Columns />
          <PlaylistTracks 
            playlist={playlist} 
            playlistTracksRef={playlistTracksRef}/>
        </div>
        <Recommendations 
          playlist={playlist} 
          recommendedTracksRef={recommendedTracksRef}/>
      </>
      : <Warning />}
    </div>
  )
}

export default Body