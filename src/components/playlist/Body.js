import React, { useRef, useEffect } from 'react'
import { getArtists, millsToMinAndSec, clockFormat, getDayDiff } from '../helpers'

export function Body({playlist, handleSongClick, clickedSongIndex, setClickedSongIndex, setClickedSongUrl}) {

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if(ref.current && !ref.current.contains(event.target) && !event.target.matches('.playlist__playerLink')) {
          setClickedSongIndex(false);
          setClickedSongUrl('');
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const playlistSongsRef = useRef();
  useOutsideAlerter(playlistSongsRef);

  return (
    <div className="playlist__songs-body" ref={playlistSongsRef}>
      {playlist.tracks.items.map((item, index) => ( 
        <div 
          key={item.track.id}
          className={`playlist__song grid-row ${clickedSongIndex === index ? 'selected' : ''} `} 
          onClick={() => handleSongClick(index, item.track.external_urls.spotify)}>
          <div>{index+1}</div>
          <div className="playlist__song-title-wrapper">
            <div className="playlist__song-title">
              <img 
                className="playlist__song-thumbnail"
                src={item.track.album?.images[2]?.url} 
                alt={item.track.name}/>
              <div className="playlist__song-brand">
                <p className="playlist__song-name">
                {item.track.name}
                </p>
                <p className="playlist__song-artist">
                {getArtists(item.track.artists)}
                </p>
              </div>
            </div>
          </div>
          <div><span className="playlist__song-album">{item.track.album.name}</span></div>
          <div><span>{`${getDayDiff(item.added_at)} days ago`}</span></div>
          <div><span>{millsToMinAndSec(item.track.duration_ms, clockFormat)}</span></div>
        </div>
      ))}
    </div>
  )
}