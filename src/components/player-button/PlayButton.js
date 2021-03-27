import React from 'react'
import './PlayButton.scss'

const Player = ({url}) => {

  const handleAnchorTag = (e) => {
    if(!url) e.preventDefault();
  }

  return (
    <>
      <a className="play-button" 
         onClick={handleAnchorTag}
         style={{backgroundColor: url ? '#1DB954' : '#00a73b'}}
         href={url} 
         target="_blank"
         rel="noreferrer">
          Play on spotify
      </a>
    </>
  )
}

export default Player