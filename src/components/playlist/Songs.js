import React, { useState } from 'react'
import { Head } from './Head'
import { Body } from './Body'
import '../../sass/_layout.scss'

const Songs = ({ playlist }) => {

  const [clickedSongIndex, setClickedSongIndex] = useState(false);
  const [clickedSongUrl, setClickedSongUrl] = useState('');

  const handleSongClick = (songIndex, songUrl) => {
    setClickedSongIndex(songIndex);
    setClickedSongUrl(songUrl);
  }

  const handleAnchorTag = (e) => {
    if(!clickedSongUrl) e.preventDefault();
  }

  return (
    <div className="playlist__songsContainer">
      <a className="playlist__playerLink" 
         onClick={handleAnchorTag}
         style={{backgroundColor: clickedSongUrl ? '#1DB954' : '#00a73b'}}
         href={clickedSongUrl} 
         target="_blank">
           Play on spotify
      </a>
      <div className="playlist__songs">
        <Head />
        <Body 
          playlist={playlist} 
          clickedSongIndex={clickedSongIndex}
          setClickedSongIndex={setClickedSongIndex}
          clickedSongUrl={clickedSongUrl}
          setClickedSongUrl={setClickedSongUrl}
          handleSongClick={handleSongClick}/>
      </div>
    </div>
  )
}

export default Songs