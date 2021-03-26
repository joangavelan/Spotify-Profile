import React from 'react'

const Player = ({url}) => {

  const handleAnchorTag = (e) => {
    if(!url) e.preventDefault();
  }

  return (
    <>
      <a className="playlist__player" 
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