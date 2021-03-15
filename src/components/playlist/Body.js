import React, { useRef, useEffect } from 'react'
import Track from './Track';

const Body = ({playlist, handleTrackClick, clickedTrackIndex, setClickedTrackIndex, setClickedTrackUrl}) => {

  function useOutsideAlerter(ref) {
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

  return (
    <div className="playlist__tracks-body" ref={playlistTracksRef}>
      {playlist.tracks.items.map((item, index) => ( 
        <Track 
          key={item.track.id}
          item={item}
          index={index}
          clickedTrackIndex={clickedTrackIndex}
          handleTrackClick={handleTrackClick}/>
      ))}
    </div>
  )
}

export default Body