import React, { useState } from 'react'
import { Head } from './Head'
import { Body } from './Body'

const Songs = ({ playlist }) => {

  const [selectedSong, setSelectedSong] = useState(false);

  return (
    <div className="playlist__songsContainer">
      <a className="playlist__playerLink" href="a" target="_blank">Play on spotify</a>
        <div className="playlist__songs">
          <Head />
          <Body 
            selectedSong={selectedSong} 
            playlist={playlist} 
            setSelectedSong={setSelectedSong}/>
        </div>
    </div>
  )
}

export default Songs